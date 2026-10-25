/**
 * Source catalogue: every source cited by any claim, listed once. Links that lead to the same document are merged
 * (normalised URL), and pages of one tool or report that share a title, host and year are grouped into one entry.
 */
import type { Confidence, CountryContent, CountryId, ThemeId } from "../data/schema.ts";
import { THEME_IDS } from "../data/schema.ts";
import { DATED_BEFORE } from "./codes.ts";

export interface CitingClaim {
  id: string;
  country: CountryId;
  theme: ThemeId;
  confidence: Confidence;
}

export interface CatalogueEntry {
  /** Stable anchor id, identical in both languages when the URL is. */
  slug: string;
  title: string;
  /** Distinct links in first-cited order; usually one. */
  urls: string[];
  /** Host without "www.", shown as the publisher line. */
  host: string;
  year?: number;
  dated: boolean;
  claims: CitingClaim[];
  countries: CountryId[];
  confidences: Confidence[];
}

const TRACKING = /^(utm_[a-z]+|fbclid|gclid|ref|ref_src)$/i;

/**
 * Comparison key for a URL: scheme and "www." dropped, host lowercased, fragment and tracking parameters removed,
 * trailing slashes trimmed. Path case is kept because many servers treat it as significant.
 */
export function normalizeUrl(raw: string): string {
  let u: URL;
  try {
    u = new URL(raw.trim());
  } catch {
    return raw.trim();
  }
  const host = u.hostname.toLowerCase().replace(/^www\./, "");
  const params = [...u.searchParams.entries()].filter(([k]) => !TRACKING.test(k));
  const search = params.length ? `?${new URLSearchParams(params).toString()}` : "";
  const path = u.pathname.replace(/\/+$/, "");
  const port = u.port ? `:${u.port}` : "";
  return `${host}${port}${path}${search}`;
}

export function hostOf(raw: string): string {
  try {
    return new URL(raw).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

/** Title key: case, punctuation and spacing ignored, so "X: Y" and "X — Y" meet. */
export function titleKey(title: string): string {
  return title
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\p{P}\p{S}\s]+/gu, " ")
    .trim();
}

export const isDated = (year: number | undefined, before: number = DATED_BEFORE) => year !== undefined && year < before;

/** FNV-1a, 32 bit, as base 36: short stable anchors without a crypto dependency. */
export function shortHash(s: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(36);
}

function mostCommon<T>(values: T[]): T | undefined {
  const counts = new Map<T, number>();
  for (const v of values) counts.set(v, (counts.get(v) ?? 0) + 1);
  let best: T | undefined;
  let n = 0;
  for (const [v, c] of counts) {
    if (c > n) {
      best = v;
      n = c;
    }
  }
  return best;
}

interface Draft {
  key: string;
  urls: string[];
  titles: string[];
  years: number[];
  claims: CitingClaim[];
}

const CONF_ORDER: Confidence[] = ["strong", "medium", "weak"];

export function buildCatalogue(list: readonly CountryContent[], lang: "en" | "ja" = "en"): CatalogueEntry[] {
  const byUrl = new Map<string, Draft>();
  for (const country of list) {
    for (const theme of THEME_IDS) {
      for (const claim of country.themes[theme] ?? []) {
        const seen = new Set<string>();
        for (const s of claim.sources) {
          const key = normalizeUrl(s.url);
          let d = byUrl.get(key);
          if (!d) {
            d = { key, urls: [], titles: [], years: [], claims: [] };
            byUrl.set(key, d);
          }
          if (!d.urls.includes(s.url)) d.urls.push(s.url);
          d.titles.push(s.title);
          if (s.year !== undefined) d.years.push(s.year);
          if (!seen.has(key)) {
            seen.add(key);
            d.claims.push({ id: claim.id, country: country.id, theme, confidence: claim.confidence });
          }
        }
      }
    }
  }

  // Second pass: one entry per (host, title, year), so e.g. several pages of one comparison tool become one source.
  const groups = new Map<string, Draft>();
  for (const d of byUrl.values()) {
    const title = mostCommon(d.titles) ?? d.titles[0] ?? "";
    const year = mostCommon(d.years);
    const gkey = `${hostOf(d.urls[0] ?? "")}|${titleKey(title)}|${year ?? ""}`;
    const g = groups.get(gkey);
    if (!g) {
      groups.set(gkey, { ...d, urls: [...d.urls], titles: [...d.titles], years: [...d.years], claims: [...d.claims] });
      continue;
    }
    for (const u of d.urls) if (!g.urls.includes(u)) g.urls.push(u);
    g.titles.push(...d.titles);
    g.years.push(...d.years);
    for (const c of d.claims) if (!g.claims.some((x) => x.id === c.id)) g.claims.push(c);
  }

  const collator = new Intl.Collator(lang, { sensitivity: "base", numeric: true });
  const sortTitle = (t: string) => t.replace(/^[\s"'“‘「『(（[]+/u, "");
  return [...groups.values()]
    .map((g): CatalogueEntry => {
      const title = mostCommon(g.titles) ?? "";
      const year = mostCommon(g.years);
      const countries = [...new Set(g.claims.map((c) => c.country))];
      const confidences = CONF_ORDER.filter((c) => g.claims.some((x) => x.confidence === c));
      return {
        slug: `src-${shortHash(g.key)}`,
        title,
        urls: g.urls,
        host: hostOf(g.urls[0] ?? ""),
        ...(year !== undefined ? { year } : {}),
        dated: isDated(year),
        claims: g.claims,
        countries,
        confidences,
      };
    })
    .sort((a, b) => collator.compare(sortTitle(a.title), sortTitle(b.title)) || a.slug.localeCompare(b.slug));
}

export interface SourceFilter {
  country?: CountryId | undefined;
  confidence?: Confidence | undefined;
}

/** A source matches when at least one claim citing it satisfies every given condition at once. */
export function filterCatalogue(entries: readonly CatalogueEntry[], f: SourceFilter): CatalogueEntry[] {
  return entries.filter((e) =>
    e.claims.some(
      (c) =>
        (f.country === undefined || c.country === f.country) &&
        (f.confidence === undefined || c.confidence === f.confidence),
    ),
  );
}

/** Citing claims grouped by country, in the order countries first appear. */
export function claimsByCountry(entry: CatalogueEntry): { country: CountryId; claims: CitingClaim[] }[] {
  return entry.countries.map((country) => ({ country, claims: entry.claims.filter((c) => c.country === country) }));
}

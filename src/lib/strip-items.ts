/**
 * Build-time side of the vantage strip: turns country meta into plain StripItem data. Kept apart from
 * src/lib/strip.ts so the client island never pulls in schema.ts (and zod).
 */
import {
  COUNTRY_IDS,
  type CountryMeta,
  CULTURE_MAP_SCALES,
  type CultureMapScale,
  HOFSTEDE_DIMENSIONS,
  type HofstedeDimension,
} from "../data/schema.ts";
import { DISPLAY_CODE } from "./codes.ts";
import { hofstedeProfile, isRegion } from "./compare.ts";
import { MEYER_RANGE, type StripItem, type StripKey, type StripMember, scaleKind } from "./strip.ts";

export function isStripKey(key: string): key is StripKey {
  return (
    (CULTURE_MAP_SCALES as readonly string[]).includes(key) || (HOFSTEDE_DIMENSIONS as readonly string[]).includes(key)
  );
}

/** Canonical display order of Nordic members, used to break ties. */
const MEMBER_ORDER = ["DK", "SE", "FI", "NO", "IS"];
const NATION_CODE: Record<string, string> = {
  Denmark: "DK",
  Sweden: "SE",
  Finland: "FI",
  Norway: "NO",
  Iceland: "IS",
};

function rank(order: readonly string[], v: string): number {
  const i = order.indexOf(v);
  return i === -1 ? order.length : i;
}

const byMember = (a: StripMember, b: StripMember) =>
  a.value - b.value || rank(MEMBER_ORDER, a.code) - rank(MEMBER_ORDER, b.code) || a.code.localeCompare(b.code);

/**
 * Per-member Meyer steps from a free-text note such as "DK -3 / SE -3 / FI -2". Accepts ASCII, Unicode minus and
 * en dash signs, "+", optional spaces or a colon, and any separator. Steps outside −3..+3, decimals, unknown codes
 * (when `allowed` is given) and repeated codes are dropped. Returns an empty list when nothing usable is found, so
 * the caller falls back to the region's single step.
 */
export function parseMemberSteps(note: string | undefined, allowed?: readonly string[]): StripMember[] {
  if (!note) return [];
  const out: StripMember[] = [];
  const seen = new Set<string>();
  for (const m of note.matchAll(/\b([A-Z]{2})\s*:?\s*([+\-−–]?)\s*(\d+)(?![\d.])/g)) {
    const code = m[1]!;
    const sign = m[2] === "" || m[2] === "+" ? 1 : -1;
    const value = sign * Number(m[3]);
    if (Math.abs(value) > MEYER_RANGE || seen.has(code)) continue;
    if (allowed && !allowed.includes(code)) continue;
    seen.add(code);
    out.push({ code, value: value === 0 ? 0 : value });
  }
  return out.sort(byMember);
}

/** One item per country with meta, in canonical country order. */
export function stripItems(key: StripKey, metas: readonly CountryMeta[]): StripItem[] {
  const kind = scaleKind(key);
  const ordered = [...metas].sort((a, b) => COUNTRY_IDS.indexOf(a.id) - COUNTRY_IDS.indexOf(b.id));
  return ordered.map((meta) => {
    const code = DISPLAY_CODE[meta.id];
    if (kind === "meyer") {
      const pos = meta.cultureMap[key as CultureMapScale];
      const members = isRegion(meta) && pos.step !== null ? parseMemberSteps(pos.note, meta.iso) : [];
      return { id: meta.id, code, value: pos.step, secondary: pos.basis === "secondary", members };
    }
    const dim = key as HofstedeDimension;
    const members = isRegion(meta)
      ? meta.hofstede
          .flatMap((h, i): StripMember[] => {
            const v = h.scores[dim];
            const c = NATION_CODE[h.country] ?? meta.iso[i] ?? h.country.slice(0, 2).toUpperCase();
            return v === null ? [] : [{ code: c, value: v }];
          })
          .sort(byMember)
      : [];
    return { id: meta.id, code, value: hofstedeProfile(meta).scores[dim], secondary: false, members };
  });
}

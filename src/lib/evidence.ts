/**
 * Evidence map (research/design.md, figure C): countries × themes, each cell holding the claims for that pair with
 * their confidence counts. It measures how much the site knows, never anything about the countries.
 */
import {
  type Claim,
  type Confidence,
  type CountryContent,
  type CountryId,
  THEME_IDS,
  type ThemeId,
} from "../data/schema.ts";

export type Counts = Record<Confidence, number> & { total: number };

export interface Cell {
  country: CountryId;
  theme: ThemeId;
  /** Strongest first, data order kept within a level. */
  claims: Claim[];
  counts: Counts;
}

export interface Row {
  country: CountryContent;
  cells: Cell[];
  counts: Counts;
}

export interface EvidenceMap {
  rows: Row[];
  themes: Record<ThemeId, Counts>;
  counts: Counts;
}

const RANK: Record<Confidence, number> = { strong: 0, medium: 1, weak: 2 };

export function emptyCounts(): Counts {
  return { strong: 0, medium: 0, weak: 0, total: 0 };
}

export function countConfidence(claims: readonly Pick<Claim, "confidence">[]): Counts {
  const c = emptyCounts();
  for (const { confidence } of claims) {
    c[confidence] += 1;
    c.total += 1;
  }
  return c;
}

export function addCounts(a: Counts, b: Counts): Counts {
  return {
    strong: a.strong + b.strong,
    medium: a.medium + b.medium,
    weak: a.weak + b.weak,
    total: a.total + b.total,
  };
}

/** Stable sort, well attested first. */
export function byStrength<T extends Pick<Claim, "confidence">>(claims: readonly T[]): T[] {
  return claims
    .map((c, i) => [c, i] as const)
    .sort(([a, i], [b, j]) => RANK[a.confidence] - RANK[b.confidence] || i - j)
    .map(([c]) => c);
}

export function evidenceMap(list: readonly CountryContent[]): EvidenceMap {
  const themes = Object.fromEntries(THEME_IDS.map((t) => [t, emptyCounts()])) as Record<ThemeId, Counts>;
  let counts = emptyCounts();
  const rows = list.map((country) => {
    const cells = THEME_IDS.map((theme) => {
      const claims = country.themes[theme] ?? [];
      const cellCounts = countConfidence(claims);
      themes[theme] = addCounts(themes[theme], cellCounts);
      return { country: country.id, theme, claims: byStrength(claims), counts: cellCounts };
    });
    const rowCounts = cells.reduce((acc, c) => addCounts(acc, c.counts), emptyCounts());
    counts = addCounts(counts, rowCounts);
    return { country, cells, counts: rowCounts };
  });
  return { rows, themes, counts };
}

/** Cells whose every claim is thin: where the site knows least. Empty cells count too. */
export function thinCells(map: EvidenceMap): Cell[] {
  return map.rows.flatMap((r) => r.cells.filter((c) => c.counts.weak === c.counts.total));
}

/** Claim counts for one country, summed over themes. */
export function countryCounts(country: CountryContent): Counts {
  return THEME_IDS.reduce((acc, t) => addCounts(acc, countConfidence(country.themes[t] ?? [])), emptyCounts());
}

/** Theme ↔ scale links live in theme-scales.ts; re-exported here for existing importers. */
export { THEME_SCALES } from "./theme-scales.ts";

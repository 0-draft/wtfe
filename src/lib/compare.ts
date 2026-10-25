import {
  COUNTRY_IDS,
  type CountryId,
  type CountryMeta,
  CULTURE_MAP_SCALES,
  type CultureMapScale,
  HOFSTEDE_DIMENSIONS,
  type HofstedeDimension,
} from "../data/schema.ts";

export type Pair = readonly [CountryId, CountryId];

/**
 * Every ordered pair. Order is meaningful: `jp-vs-de` reads "Germany as seen from Japan" (the first id is the
 * vantage), and `de-vs-jp` is its mirror.
 */
export function allPairs(ids: readonly CountryId[] = COUNTRY_IDS): Pair[] {
  return ids.flatMap((a) => ids.filter((b) => b !== a).map((b) => [a, b] as const));
}

export const pairSlug = ([a, b]: Pair) => `${a}-vs-${b}`;

export function parsePairSlug(slug: string): Pair | undefined {
  const m = /^([a-z]+)-vs-([a-z]+)$/.exec(slug);
  if (!m) return undefined;
  const [a, b] = [m[1] as CountryId, m[2] as CountryId];
  return a !== b && COUNTRY_IDS.includes(a) && COUNTRY_IDS.includes(b) ? [a, b] : undefined;
}

export const mirror = ([a, b]: Pair): Pair => [b, a];

/** A row that stands for several countries (the Nordics): its meta lists more than one ISO code. */
export const isRegion = (meta: Pick<CountryMeta, "iso">): boolean => meta.iso.length > 1;

export interface HofstedeProfile {
  scores: Record<HofstedeDimension, number | null>;
  /** True when a region's national scores were averaged (e.g. the Nordics). */
  aggregated: boolean;
}

export function hofstedeProfile(meta: CountryMeta): HofstedeProfile {
  const entries = meta.hofstede;
  const scores = Object.fromEntries(
    HOFSTEDE_DIMENSIONS.map((d) => {
      const vals = entries.map((e) => e.scores[d]).filter((v): v is number => v !== null);
      return [d, vals.length ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length) : null];
    }),
  ) as Record<HofstedeDimension, number | null>;
  return { scores, aggregated: isRegion(meta) && entries.length > 1 };
}

export interface Delta<K extends string> {
  key: K;
  a: number | null;
  b: number | null;
  /** b - a, or null when either side is unknown. */
  delta: number | null;
}

function byGap<K extends string>(rows: Delta<K>[]): Delta<K>[] {
  return [...rows].sort(
    (x, y) => (y.delta === null ? -1 : Math.abs(y.delta)) - (x.delta === null ? -1 : Math.abs(x.delta)),
  );
}

export function hofstedeDeltas(a: CountryMeta, b: CountryMeta): Delta<HofstedeDimension>[] {
  const [pa, pb] = [hofstedeProfile(a).scores, hofstedeProfile(b).scores];
  return HOFSTEDE_DIMENSIONS.map((key) => ({
    key,
    a: pa[key],
    b: pb[key],
    delta: pa[key] === null || pb[key] === null ? null : pb[key]! - pa[key]!,
  }));
}

export function cultureMapDeltas(a: CountryMeta, b: CountryMeta): Delta<CultureMapScale>[] {
  return CULTURE_MAP_SCALES.map((key) => {
    const [sa, sb] = [a.cultureMap[key].step, b.cultureMap[key].step];
    return { key, a: sa, b: sb, delta: sa === null || sb === null ? null : sb - sa };
  });
}

/** The scales where two countries sit furthest apart, largest gap first; unknowns last. */
export function biggestGaps<K extends string>(rows: Delta<K>[], n = 3): Delta<K>[] {
  return byGap(rows)
    .filter((r) => r.delta !== null && r.delta !== 0)
    .slice(0, n);
}

export interface MemberScore {
  /** Country name as recorded in the data (English). */
  country: string;
  score: number;
}

/**
 * The national scores behind a profile, per dimension (nulls skipped). For a single country each list has one
 * entry; for a region it shows exactly which members the average in `hofstedeProfile` was taken over.
 */
export function hofstedeMembers(meta: CountryMeta): Record<HofstedeDimension, MemberScore[]> {
  return Object.fromEntries(
    HOFSTEDE_DIMENSIONS.map((d) => [
      d,
      meta.hofstede.flatMap((e) => (e.scores[d] === null ? [] : [{ country: e.country, score: e.scores[d] }])),
    ]),
  ) as Record<HofstedeDimension, MemberScore[]>;
}

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

/** Every unordered pair once, in canonical COUNTRY_IDS order: jp-vs-kr, never kr-vs-jp. */
export function allPairs(ids: readonly CountryId[] = COUNTRY_IDS): Pair[] {
  const out: Pair[] = [];
  for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) out.push([ids[i]!, ids[j]!]);
  return out;
}

export const pairSlug = ([a, b]: Pair) => `${a}-vs-${b}`;

export function parsePairSlug(slug: string): Pair | undefined {
  const m = /^([a-z]+)-vs-([a-z]+)$/.exec(slug);
  if (!m) return undefined;
  const [a, b] = [m[1] as CountryId, m[2] as CountryId];
  const ia = COUNTRY_IDS.indexOf(a);
  const ib = COUNTRY_IDS.indexOf(b);
  return ia >= 0 && ib > ia ? [a, b] : undefined;
}

/** Canonical pair for any two distinct ids, so a picker can link `de` + `jp` to `jp-vs-de`. */
export function canonicalPair(a: CountryId, b: CountryId): Pair | undefined {
  if (a === b) return undefined;
  return COUNTRY_IDS.indexOf(a) < COUNTRY_IDS.indexOf(b) ? [a, b] : [b, a];
}

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
  return { scores, aggregated: entries.length > 1 };
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

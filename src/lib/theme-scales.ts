/**
 * Which scales bear on which theme: the single source for the links between theme pages and scale pages.
 * A scale is listed under a theme only when the claims under that theme regularly cite it or describe the behaviour
 * it measures; it is kept short on purpose. Scale pages read the inverse, SCALE_THEMES, derived from this table.
 */
import type { CultureMapScale, HofstedeDimension, ThemeId } from "../data/schema.ts";

export type ScaleKey = CultureMapScale | HofstedeDimension;

export const THEME_SCALES: Record<
  ThemeId,
  { meyer: readonly CultureMapScale[]; hofstede: readonly HofstedeDimension[] }
> = {
  design: { meyer: ["persuading", "scheduling"], hofstede: ["uai"] },
  failure: { meyer: [], hofstede: ["uai"] },
  feedback: { meyer: ["evaluating", "disagreeing"], hofstede: [] },
  hierarchy: { meyer: ["leading", "deciding", "disagreeing"], hofstede: ["pdi"] },
  communication: { meyer: ["communicating", "persuading", "trusting"], hofstede: [] },
  work: { meyer: ["scheduling", "trusting"], hofstede: ["mas", "ivr"] },
  oss: { meyer: [], hofstede: [] },
};

const THEME_ORDER = Object.keys(THEME_SCALES) as ThemeId[];
const ALL_KEYS: readonly ScaleKey[] = [
  "communicating",
  "evaluating",
  "persuading",
  "leading",
  "deciding",
  "trusting",
  "disagreeing",
  "scheduling",
  "pdi",
  "idv",
  "mas",
  "uai",
  "lto",
  "ivr",
];

/** The inverse of THEME_SCALES: for each scale, the themes that list it, in theme order. */
export const SCALE_THEMES = Object.fromEntries(
  ALL_KEYS.map((k): [ScaleKey, readonly ThemeId[]] => [
    k,
    THEME_ORDER.filter((th) =>
      (THEME_SCALES[th].meyer as readonly string[]).concat(THEME_SCALES[th].hofstede).includes(k),
    ),
  ]),
) as unknown as Record<ScaleKey, readonly ThemeId[]>;

import type { ScaleText } from "../../i18n/scales.ts";
import type { GapLine } from "../../lib/compare-text.ts";

/** Percent position on a ruler strip; the line runs from PAD% to (100 − PAD)% so end numbers and codes never clip. */
export const PAD = 8;
export const pct = (v: number, lo: number, hi: number) => PAD + ((v - lo) / (hi - lo)) * (100 - 2 * PAD);

/** One row of the gap ruler, ready to draw. */
export interface RulerRow {
  key: string;
  kind: "meyer" | "hofstede";
  text: ScaleText;
  line: GapLine<string>;
  /** Mark positions in percent. */
  xa: number | null;
  xb: number | null;
  /** Step ticks in percent. */
  ticks: number[];
  /** Numbers written at the two ends of the line. */
  ends: [string, string];
  codeA: string;
  codeB: string;
  /** Member ticks of a region (Hofstede only): [percent, side]. */
  members: [number, "a" | "b"][];
  notes: string[];
}

/**
 * Words for the gap ruler (research/design.md, figure B): one sentence per scale saying how the second country of a
 * pair differs from the first (the vantage), in English and Japanese, plus the grouping of the rows.
 */
import type { CountryId, CountryMeta, CultureMapScale, HofstedeDimension } from "../data/schema.ts";
import { memberNamesJa, meyerPhrases } from "../i18n/compare.ts";
import { hofstedeText } from "../i18n/scales.ts";
import type { Lang } from "../i18n/ui.ts";
import { cultureMapDeltas, type Delta, hofstedeDeltas, hofstedeMembers, hofstedeProfile } from "./compare.ts";

const LOCALE: Record<Lang, string> = { en: "en-GB", ja: "ja" };

/** A country name ready to drop into a sentence. */
export interface Noun {
  /** Sentence-initial form: "The Netherlands", "Japan". */
  subject: string;
  /** Mid-sentence form: "the Netherlands", "Japan". */
  object: string;
  /** English verb agreement: "the Nordics give". */
  plural: boolean;
}

/** English names that take "the" (the data writes "Netherlands" but "The Nordics"). */
const WITH_ARTICLE: ReadonlySet<CountryId> = new Set(["us", "gb", "nl", "nordics"]);
const PLURAL: ReadonlySet<CountryId> = new Set(["nordics"]);

export function noun(lang: Lang, id: CountryId, name: string): Noun {
  if (lang === "ja") return { subject: name, object: name, plural: false };
  const bare = name.replace(/^the\s+/i, "");
  const article = WITH_ARTICLE.has(id);
  return {
    subject: article ? `The ${bare}` : bare,
    object: article ? `the ${bare}` : bare,
    plural: PLURAL.has(id),
  };
}

export interface Side {
  id: CountryId;
  meta: CountryMeta;
  noun: Noun;
}

export type Group = "different" | "close" | "none";

export interface GapLine<K extends string> extends Delta<K> {
  group: Group;
  /** Absolute gap (steps for Meyer, points for Hofstede); null when either side has no source. */
  gap: number | null;
  sentence: string;
}

const fmt = (lang: Lang, n: number) => new Intl.NumberFormat(LOCALE[lang]).format(n);
const list = (lang: Lang, items: string[], type: "conjunction" | "disjunction" = "conjunction") =>
  new Intl.ListFormat(LOCALE[lang], { type }).format(items);
const groupOf = (delta: number | null): Group => (delta === null ? "none" : delta === 0 ? "close" : "different");
const lowerFirst = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

export function stepsLabel(lang: Lang, n: number): string {
  if (lang === "ja") return `${fmt(lang, n)} 段階`;
  return n === 1 ? "1 step" : `${fmt(lang, n)} steps`;
}

/** Meyer leaves Japan, Korea and China off the persuading axis ("holistic"), which is not the same as no source. */
const isHolistic = (side: Side, key: CultureMapScale) => /holistic/i.test(side.meta.cultureMap[key].note ?? "");

function meyerMissing(lang: Lang, key: CultureMapScale, sides: Side[]): string {
  const holistic = sides.filter((s) => isHolistic(s, key));
  const unsourced = sides.filter((s) => !isHolistic(s, key));
  const parts: string[] = [];
  if (lang === "en") {
    if (holistic.length)
      parts.push(
        `Meyer places ${list(
          lang,
          holistic.map((s) => s.noun.object),
        )} outside this scale, as holistic thinking`,
      );
    if (unsourced.length)
      parts.push(
        `${parts.length ? "no" : "No"} source places ${list(
          lang,
          unsourced.map((s) => s.noun.object),
          "disjunction",
        )} on this scale`,
      );
    return parts.join("; ");
  }
  if (holistic.length)
    parts.push(
      `Meyer は${list(
        lang,
        holistic.map((s) => s.noun.object),
      )}を全体論的な思考としてこの尺度の外に置いている`,
    );
  if (unsourced.length)
    parts.push(
      `この尺度で${list(
        lang,
        unsourced.map((s) => s.noun.object),
      )}の位置を示す出典はない`,
    );
  return parts.join("。");
}

/** One sentence for one Meyer scale, written from A's point of view about B. */
export function meyerSentence(lang: Lang, row: Delta<CultureMapScale>, a: Side, b: Side): string {
  if (row.delta === null) {
    const missing = [row.a === null ? a : null, row.b === null ? b : null].filter((s): s is Side => s !== null);
    return meyerMissing(lang, row.key, missing);
  }
  if (row.delta === 0) {
    return lang === "en"
      ? `${a.noun.subject} and ${b.noun.object} sit on the same step`
      : `${a.noun.subject}と${b.noun.object}は同じ段階にある`;
  }
  const phrase = meyerPhrases[row.key][row.delta < 0 ? "left" : "right"];
  const n = Math.abs(row.delta);
  if (lang === "en") {
    const verb = phrase.en.verb[b.noun.plural ? 1 : 0];
    return `${b.noun.subject} ${verb} ${phrase.en.rest} ${a.noun.object} (${stepsLabel(lang, n)})`;
  }
  return `${b.noun.subject}は${a.noun.object}より${phrase.ja}（${stepsLabel(lang, n)}）`;
}

/** One sentence for one Hofstede dimension: its name and both scores, never "a more X culture". */
export function hofstedeSentence(lang: Lang, row: Delta<HofstedeDimension>, a: Side, b: Side): string {
  const dim = hofstedeText[lang][row.key].name;
  if (row.a === null || row.b === null) {
    const missing = [row.a === null ? a : null, row.b === null ? b : null].filter((s): s is Side => s !== null);
    return lang === "en"
      ? `No ${lowerFirst(dim)} score for ${list(
          lang,
          missing.map((s) => s.noun.object),
          "disjunction",
        )}`
      : `${list(
          lang,
          missing.map((s) => s.noun.object),
        )}には${dim}のスコアがない`;
  }
  const [sa, sb] = [fmt(lang, row.a), fmt(lang, row.b)];
  const d = row.b - row.a;
  if (d === 0) {
    return lang === "en"
      ? `${b.noun.subject} and ${a.noun.object} both score ${sb} on ${lowerFirst(dim)}`
      : `${dim}のスコアは${b.noun.subject}も${a.noun.object}も ${sb}`;
  }
  const n = Math.abs(d);
  if (lang === "en") {
    const pts = n === 1 ? "1 point" : `${fmt(lang, n)} points`;
    const verb = b.noun.plural ? "score" : "scores";
    return `${b.noun.subject} ${verb} ${pts} ${d > 0 ? "higher" : "lower"} than ${a.noun.object} on ${lowerFirst(dim)} (${sb} against ${sa})`;
  }
  return `${dim}のスコアは${b.noun.subject} ${sb}、${a.noun.object} ${sa} で、${b.noun.subject}が ${fmt(lang, n)} ポイント${d > 0 ? "高い" : "低い"}`;
}

/** Largest gap first; rows without a gap (unknown) last; ties keep the scale order. */
function sortByGap<K extends string>(rows: GapLine<K>[]): GapLine<K>[] {
  return rows
    .map((r, i) => ({ r, i }))
    .sort((x, y) => (y.r.gap ?? -1) - (x.r.gap ?? -1) || x.i - y.i)
    .map(({ r }) => r);
}

export function meyerLines(lang: Lang, a: Side, b: Side): GapLine<CultureMapScale>[] {
  return sortByGap(
    cultureMapDeltas(a.meta, b.meta).map((row) => ({
      ...row,
      group: groupOf(row.delta),
      gap: row.delta === null ? null : Math.abs(row.delta),
      sentence: meyerSentence(lang, row, a, b),
    })),
  );
}

export function hofstedeLines(lang: Lang, a: Side, b: Side): GapLine<HofstedeDimension>[] {
  return sortByGap(
    hofstedeDeltas(a.meta, b.meta).map((row) => ({
      ...row,
      group: groupOf(row.delta),
      gap: row.delta === null ? null : Math.abs(row.delta),
      sentence: hofstedeSentence(lang, row, a, b),
    })),
  );
}

export type Grouped<K extends string> = Record<Group, GapLine<K>[]>;

/** Split sorted lines into "where you will notice the difference", "where you are close" and "no source". */
export function groupLines<K extends string>(lines: GapLine<K>[]): Grouped<K> {
  return {
    different: lines.filter((l) => l.group === "different"),
    close: lines.filter((l) => l.group === "close"),
    none: lines.filter((l) => l.group === "none"),
  };
}

const EN_COUNT = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
const memberName = (lang: Lang, n: string) => (lang === "ja" ? (memberNamesJa[n] ?? n) : n);

/**
 * For a region (the Nordics) a sentence saying its Hofstede scores are an average and of which countries;
 * null for a single country.
 */
export function regionNote(lang: Lang, side: Side): string | null {
  if (!hofstedeProfile(side.meta).aggregated) return null;
  const names = side.meta.hofstede.map((h) => memberName(lang, h.country));
  const n = names.length;
  if (lang === "en") {
    const count = EN_COUNT[n] ?? String(n);
    return `${side.noun.subject} ${side.noun.plural ? "are" : "is"} not one country: ${side.noun.plural ? "their" : "its"} scores are the average of ${count} (${list(lang, names)}).`;
  }
  return `${side.noun.subject}は 1 つの国ではありません。スコアは${list(lang, names)}の ${n} か国の平均です。`;
}

/** "Sweden 31, Finland 33, Denmark 18, Norway 31": the national scores behind one averaged dimension. */
export function memberBreakdown(lang: Lang, side: Side, key: HofstedeDimension): string | null {
  if (!hofstedeProfile(side.meta).aggregated) return null;
  const members = hofstedeMembers(side.meta)[key];
  const parts = members.map((m) => `${memberName(lang, m.country)} ${fmt(lang, m.score)}`);
  return lang === "en"
    ? `${side.noun.subject}: average of ${parts.join(", ")}`
    : `${side.noun.subject}：${parts.join("、")} の平均`;
}

/** "+3", "−2", "0": a Meyer step with a real minus sign. */
export const signedStep = (n: number) => (n > 0 ? `+${n}` : n < 0 ? `−${-n}` : "0");

/**
 * Text equivalent of one ruler strip: where each country sits and what the ends of the line mean.
 * `left`/`right` are the pole names; Meyer runs −3..+3, Hofstede 0..100.
 */
export function positionsText(
  lang: Lang,
  kind: "meyer" | "hofstede",
  row: Delta<string>,
  a: Side,
  b: Side,
  poles: { left: string; right: string },
): string {
  const val = (v: number | null) =>
    v === null ? (lang === "en" ? "no source" : "出典なし") : kind === "meyer" ? signedStep(v) : fmt(lang, v);
  const [lo, hi] = kind === "meyer" ? ["−3", "+3"] : ["0", "100"];
  return lang === "en"
    ? `${a.noun.subject} ${val(row.a)}, ${b.noun.object} ${val(row.b)}, on a line from ${lo} (${poles.left}) to ${hi} (${poles.right}).`
    : `${a.noun.subject} ${val(row.a)}、${b.noun.object} ${val(row.b)}（${lo}＝${poles.left}、${hi}＝${poles.right}）。`;
}

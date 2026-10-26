/**
 * Words for the gap ruler (research/design.md, figure B): one sentence per scale saying how the second country of a
 * pair differs from the first (the vantage), in English and Japanese, plus the grouping of the rows.
 */
import type { CountryId, CountryMeta, CultureMapScale, HofstedeDimension } from "../data/schema.ts";
import { memberNamesJa, meyerPhrases } from "../i18n/compare.ts";
import type { Lang } from "../i18n/ui.ts";
import { cultureMapDeltas, type Delta, hofstedeDeltas, hofstedeMembers, hofstedeProfile } from "./compare.ts";
import { isPluralName, nameInSentence } from "./names.ts";

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

export function noun(lang: Lang, id: CountryId, name: string): Noun {
  return {
    subject: nameInSentence(lang, id, name, { capitalize: true }),
    object: nameInSentence(lang, id, name),
    plural: isPluralName(lang, id),
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
/** "A and B" / "A or B" in English; "AとB" / "A、B、C" in Japanese (Intl's Japanese list uses "、" even for two). */
export function list(
  lang: Lang,
  items: readonly string[],
  type: "conjunction" | "disjunction" = "conjunction",
): string {
  if (lang === "ja") return items.length === 2 ? `${items[0]}と${items[1]}` : items.join("、");
  return new Intl.ListFormat(LOCALE[lang], { type }).format(items);
}
const groupOf = (delta: number | null): Group => (delta === null ? "none" : delta === 0 ? "close" : "different");

export function stepsLabel(lang: Lang, n: number): string {
  if (lang === "ja") return `${fmt(lang, n)} 段階`;
  return n === 1 ? "1 step" : `${fmt(lang, n)} steps`;
}

/** Meyer leaves Japan, Korea and China off the persuading axis ("holistic"), which is not the same as no source. */
const isHolistic = (side: Side, key: CultureMapScale) => /holistic/i.test(side.meta.cultureMap[key].note ?? "");

/** Why a scale has no marks: who Meyer leaves off as holistic thinkers, and who no source places. */
export interface Missing {
  holistic: Side[];
  unsourced: Side[];
}

function missingOf(row: Delta<CultureMapScale>, a: Side, b: Side): Missing {
  const sides = [row.a === null ? a : null, row.b === null ? b : null].filter((s): s is Side => s !== null);
  return {
    holistic: sides.filter((s) => isHolistic(s, row.key)),
    unsourced: sides.filter((s) => !isHolistic(s, row.key)),
  };
}

/**
 * The reason a scale (or several, `count` > 1) carries no marks. Written so one sentence can stand for several
 * scales: "No source places Ukraine on these scales".
 */
export function missingSentence(lang: Lang, m: Missing, count = 1): string {
  const names = (sides: Side[]) => sides.map((s) => s.noun.object);
  const parts: string[] = [];
  if (lang === "en") {
    const these = count > 1 ? "these scales" : "this scale";
    if (m.holistic.length) {
      const their = m.holistic.length > 1 || m.holistic[0]!.noun.plural ? "their" : "its";
      parts.push(
        `Meyer leaves ${list(lang, names(m.holistic))} off ${these} and describes ${their} reasoning as holistic`,
      );
    }
    if (m.unsourced.length) {
      const where = parts.length ? "on it" : `on ${these}`;
      parts.push(`No source places ${list(lang, names(m.unsourced), "disjunction")} ${where}`);
    }
    return parts.join(". ");
  }
  const these = count > 1 ? "これらの尺度" : "この尺度";
  if (m.holistic.length) {
    parts.push(`Meyer は${list(lang, names(m.holistic))}の考え方を全体論的として、${these}に位置づけていない`);
  }
  if (m.unsourced.length) {
    parts.push(
      parts.length
        ? `${list(lang, names(m.unsourced))}の位置を示す出典もない`
        : `${these}で${list(lang, names(m.unsourced))}の位置を示す出典はない`,
    );
  }
  return parts.join("。");
}

/** Lines without marks, merged when they share a reason, so a pair with Ukraine reads one sentence, not eight. */
export function noneGroups<K extends CultureMapScale>(
  lang: Lang,
  lines: readonly GapLine<K>[],
  a: Side,
  b: Side,
): { keys: K[]; sentence: string }[] {
  const groups = new Map<string, { keys: K[]; m: Missing }>();
  for (const l of lines) {
    const m = missingOf(l, a, b);
    const id = `${m.holistic.map((s) => s.id).join()}|${m.unsourced.map((s) => s.id).join()}`;
    const g = groups.get(id);
    if (g) g.keys.push(l.key);
    else groups.set(id, { keys: [l.key], m });
  }
  return [...groups.values()].map((g) => ({ keys: g.keys, sentence: missingSentence(lang, g.m, g.keys.length) }));
}

/** One sentence for one Meyer scale, written from A's point of view about B. */
export function meyerSentence(lang: Lang, row: Delta<CultureMapScale>, a: Side, b: Side): string {
  if (row.delta === null) return missingSentence(lang, missingOf(row, a, b));
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

/**
 * One sentence for one Hofstede dimension: both scores and the gap, never "a more X culture". The dimension's name
 * is the row heading, so the sentence does not repeat it.
 */
export function hofstedeSentence(lang: Lang, row: Delta<HofstedeDimension>, a: Side, b: Side): string {
  if (row.a === null || row.b === null) {
    const missing = [row.a === null ? a : null, row.b === null ? b : null].filter((s): s is Side => s !== null);
    const names = missing.map((s) => s.noun.object);
    return lang === "en" ? `No score for ${list(lang, names, "disjunction")}` : `${list(lang, names)}のスコアはない`;
  }
  const [sa, sb] = [fmt(lang, row.a), fmt(lang, row.b)];
  const d = row.b - row.a;
  if (d === 0) {
    return lang === "en"
      ? `${b.noun.subject} and ${a.noun.object} both score ${sb}`
      : `${b.noun.subject}と${a.noun.object}はどちらも ${sb}`;
  }
  const n = Math.abs(d);
  if (lang === "en") {
    const pts = n === 1 ? "1 point" : `${fmt(lang, n)} points`;
    const verb = b.noun.plural ? "score" : "scores";
    return `${b.noun.subject} ${verb} ${pts} ${d > 0 ? "higher" : "lower"} than ${a.noun.object} (${sb} against ${sa})`;
  }
  return `${b.noun.subject}は${a.noun.object}より ${fmt(lang, n)} ポイント${d > 0 ? "高い" : "低い"}（${sb} 対 ${sa}）`;
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
    return `${side.noun.subject} ${side.noun.plural ? "are" : "is"} not one country: each score is the average of ${count} national scores (${list(lang, names)}).`;
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
  /** Top of the Hofstede line: 100, or more when a score goes past 100. */
  hofMax = 100,
): string {
  const val = (v: number | null) =>
    v === null ? (lang === "en" ? "no source" : "出典なし") : kind === "meyer" ? signedStep(v) : fmt(lang, v);
  const [lo, hi] = kind === "meyer" ? ["−3", "+3"] : ["0", fmt(lang, hofMax)];
  return lang === "en"
    ? `${a.noun.subject} ${val(row.a)}, ${b.noun.object} ${val(row.b)}, on a line from ${lo} (${poles.left}) to ${hi} (${poles.right}).`
    : `${a.noun.subject} ${val(row.a)}、${b.noun.object} ${val(row.b)}（${lo}＝${poles.left}、${hi}＝${poles.right}）。`;
}

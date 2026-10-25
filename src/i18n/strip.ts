import type { CultureMapScale } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

/** UI strings for the vantage strip (research/design.md, figure A) and the scale pages. */
const en = {
  "strip.noSource": "No source",
  "strip.secondary": "† Placed from reviews and summaries of Meyer's work, not from her own chart.",
  "strip.provMeyer":
    "Source: Erin Meyer, The Culture Map (2014) and her country mapping charts. Positions are approximate, read off her charts onto a seven-step grid.",
  "strip.provHofstede":
    "Source: The Culture Factor country comparison tool, current values (revised around 2023), retrieved 2026.",
  "strip.taras":
    "Country averages. About 80% of variation in values is between people inside a country (Taras et al. 2016).",
  "strip.extended": (max: number) => `The line runs to ${max} because at least one score is above 100.`,
  "strip.region": (code: string, members: string) => `${code} is drawn as a span over its members: ${members}.`,
  "strip.meanOf": (list: string) => `mean of ${list}`,
  "strip.about": "About this scale",
  "strip.asText": "Positions as text",
  "strip.colCountry": "Country or region",
  "strip.colPosition": "Position",
  "strip.colStep": "Step (−3 to +3)",
  "strip.colScore": "Score",
  "strip.summary": (scale: string, list: string) => `${scale}: ${list}.`,
  "strip.scrollLabel": (scale: string) => `${scale} strip, scrolls sideways`,
  "strip.secondaryShort": "secondary basis",
  "vantage.label": "Read from",
  "vantage.none": "Nowhere: show every position",
  "vantage.noData": "no source",
  "vantage.you": (name: string) => `you (${name})`,
  "vantage.live": (name: string) => `Reading the scale from ${name}.`,
  "vantage.liveNone": "Showing every position.",
  "vantage.missing": (name: string) =>
    `No source places ${name} on this scale, so the strip cannot be read from there. Showing every position instead.`,
  "vantage.hint":
    "Pick the country you work from. The line re-centres on it and every other country is placed relative to you.",
  "vantage.listLabel": (name: string) => `Countries as seen from ${name}, furthest first`,
  "vantage.sameStep": (v: string) => `Same step as ${v}`,
  "vantage.sameScore": (v: string) => `Same score as ${v}`,
  "vantage.steps": (n: number, phrase: string, v: string) => `${n} ${n === 1 ? "step" : "steps"} ${phrase} than ${v}`,
  "vantage.points": (n: number, higher: boolean, v: string) =>
    `${n} ${n === 1 ? "point" : "points"} ${higher ? "higher" : "lower"} than ${v}`,
  "scales.title": "Scales",
  "scales.lead":
    "Fourteen lines, one per scale. Each tick is a country or region placed where a published framework puts it. Read them as positions relative to each other, not as traits of the people who live there.",
  "scales.meyer": "Erin Meyer's Culture Map",
  "scales.meyerIntro":
    "Eight scales from Erin Meyer's The Culture Map (2014), built from her interviews and teaching with international managers. She publishes charts, not numbers, so each country is read off her chart onto a coarse seven-step grid. The positions are relative: a country is direct or indirect compared with the others on the line.",
  "scales.meyerLimits":
    "Limits: the scales are not a validated survey instrument, the source population is mostly managers in multinational companies, and neighbouring steps are not meaningfully different.",
  "scales.hofstede": "Hofstede's six dimensions",
  "scales.hofstedeIntro":
    "Six dimensions from Geert Hofstede's research, which began with an IBM employee survey in 1967 to 1973 and was extended by later replications. The scores are The Culture Factor's current values, revised around 2023, on a 0 to 100 line.",
  "scales.hofstedeLimits":
    "Limits: these are national averages. About 80% of variation in values lies between people inside a country, and applying a country score to an individual is the ecological fallacy.",
  "scales.method": "How to read these scales",
  "scales.all": "All scales",
  "scale.poles": "The two ends",
  "scale.builtFrom": "What it is built from",
  "scale.vantage": "Read it from a country",
  "scale.related": "Themes that draw on it",
  "scale.seeAlso": "See also",
  "scale.framework": (name: string) => `Part of ${name}`,
  "scale.leftPole": "Left end",
  "scale.rightPole": "Right end",
} as const;

type Strings = {
  [K in keyof typeof en]: (typeof en)[K] extends (...a: infer A) => string ? (...a: A) => string : string;
};

const ja: Strings = {
  "strip.noSource": "出典なし",
  "strip.secondary": "† Meyer 本人の図ではなく、書評や要約をもとに置いた位置。",
  "strip.provMeyer":
    "出典：Erin Meyer『異文化理解力』（The Culture Map, 2014）と同氏の国別チャート。位置はおおよそで、図から 7 段階に読み取ったもの。",
  "strip.provHofstede": "出典：The Culture Factor の国別比較ツール。2023 年ごろ改訂の現行値（2026 年取得）。",
  "strip.taras": "国の平均値です。価値観のばらつきの約 8 割は、同じ国に住む人どうしの間にあります（Taras ほか 2016）。",
  "strip.extended": (max: number) => `100 を超えるスコアがあるため、線を ${max} まで延ばしています。`,
  "strip.region": (code: string, members: string) => `${code} は構成国の位置にまたがる幅で示しています：${members}。`,
  "strip.meanOf": (list: string) => `${list} の平均`,
  "strip.about": "この尺度について",
  "strip.asText": "位置を文字で見る",
  "strip.colCountry": "国・地域",
  "strip.colPosition": "位置",
  "strip.colStep": "段階（−3〜+3）",
  "strip.colScore": "スコア",
  "strip.summary": (scale: string, list: string) => `${scale}：${list}。`,
  "strip.scrollLabel": (scale: string) => `${scale}の図（横にスクロールできます）`,
  "strip.secondaryShort": "二次資料による",
  "vantage.label": "どこから見るか",
  "vantage.none": "選ばない（すべての位置を表示）",
  "vantage.noData": "出典なし",
  "vantage.you": (name: string) => `あなた（${name}）`,
  "vantage.live": (name: string) => `${name}から見た位置に切り替えました。`,
  "vantage.liveNone": "すべての位置を表示しています。",
  "vantage.missing": (name: string) =>
    `${name}はこの尺度に出典がないため、${name}から見た図は描けません。すべての位置を表示しています。`,
  "vantage.hint": "自分が働いている国を選んでください。線がその国を中心に描き直され、ほかの国は自分との差で並びます。",
  "vantage.listLabel": (name: string) => `${name}から見た各国（差の大きい順）`,
  "vantage.sameStep": (v: string) => `${v}と同じ段階`,
  "vantage.sameScore": (v: string) => `${v}と同じスコア`,
  "vantage.steps": (n: number, phrase: string, v: string) => `${v}より${phrase}（${n} 段階）`,
  "vantage.points": (n: number, higher: boolean, v: string) => `${v}より ${n} ポイント${higher ? "高い" : "低い"}`,
  "scales.title": "尺度",
  "scales.lead":
    "尺度ごとに 1 本の線を引き、公開されている枠組みが各国・地域を置いた位置に目盛りを立てています。国どうしの相対的な位置として読んでください。そこに住む人の性質を表すものではありません。",
  "scales.meyer": "Erin Meyer の Culture Map",
  "scales.meyerIntro":
    "Erin Meyer『異文化理解力』（The Culture Map, 2014）の 8 つの尺度です。国際企業のマネージャーへの聞き取りと研修での観察から組み立てられています。書籍には数値がなく図だけが載っているため、図から粗い 7 段階に読み取っています。位置は相対的なもので、ある国が「直接的」なのは線上のほかの国と比べてのことです。",
  "scales.meyerLimits":
    "限界：検証された調査尺度ではありません。元になった人々の多くは多国籍企業の管理職で、隣り合う段階の差には大きな意味がありません。",
  "scales.hofstede": "Hofstede の 6 次元",
  "scales.hofstedeIntro":
    "Geert Hofstede の研究による 6 つの次元です。1967〜1973 年の IBM 社員調査に始まり、その後の追試で広げられました。スコアは The Culture Factor が 2023 年ごろに改訂した現行値で、0〜100 の線上に置いています。",
  "scales.hofstedeLimits":
    "限界：国の平均値です。価値観のばらつきの約 8 割は国の内部の個人差にあり、国のスコアを個人に当てはめるのは生態学的誤謬です。",
  "scales.method": "尺度の読み方",
  "scales.all": "尺度の一覧",
  "scale.poles": "両端の意味",
  "scale.builtFrom": "何から作られているか",
  "scale.vantage": "ある国から見る",
  "scale.related": "この尺度に関わるテーマ",
  "scale.seeAlso": "関連項目",
  "scale.framework": (name: string) => `${name}の尺度`,
  "scale.leftPole": "左端",
  "scale.rightPole": "右端",
};

export const stripText: Record<Lang, Strings> = { en: en as unknown as Strings, ja };

/**
 * Comparative phrases for Meyer's scales: [towards the left pole, towards the right pole].
 * EN reads "2 steps <phrase> than Japan"; JA reads "日本より<phrase>（2 段階）".
 */
export const meyerComparatives: Record<Lang, Record<CultureMapScale, readonly [string, string]>> = {
  en: {
    communicating: ["more low-context", "more high-context"],
    evaluating: ["more direct", "more indirect"],
    persuading: ["more principles-first", "more applications-first"],
    leading: ["more egalitarian", "more hierarchical"],
    deciding: ["more consensual", "more top-down"],
    trusting: ["more task-based", "more relationship-based"],
    disagreeing: ["more willing to disagree openly", "more inclined to avoid confrontation"],
    scheduling: ["more linear about time", "more flexible about time"],
  },
  ja: {
    communicating: ["低文脈", "高文脈"],
    evaluating: ["否定的フィードバックが直接的", "否定的フィードバックが間接的"],
    persuading: ["原理優先寄り", "応用優先寄り"],
    leading: ["平等主義的", "階層的"],
    deciding: ["合意志向", "トップダウン寄り"],
    trusting: ["タスクベース寄り", "関係ベース寄り"],
    disagreeing: ["反論をいとわない", "対立を避ける"],
    scheduling: ["直線的な時間感覚", "柔軟な時間感覚"],
  },
};

import type { CultureMapScale } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

/**
 * How one Meyer scale is put into words when the second country sits further towards one pole than the first.
 * English: `<B> <verb> <rest> <A>`, the verb agreeing with B ("Germany gives", "the Nordics give").
 * Japanese: `<B>は<A>より<rest>`.
 */
export interface PolePhrase {
  en: { verb: readonly [singular: string, plural: string]; rest: string };
  ja: string;
}

/** `left` = B is nearer the negative-step pole than A; `right` = nearer the positive-step pole. */
export const meyerPhrases: Record<CultureMapScale, { left: PolePhrase; right: PolePhrase }> = {
  communicating: {
    left: {
      en: { verb: ["spells", "spell"], rest: "things out more explicitly than" },
      ja: "物事をはっきり言葉にする",
    },
    right: {
      en: { verb: ["leaves", "leave"], rest: "more to be read between the lines than" },
      ja: "行間に多くを委ねて伝える",
    },
  },
  evaluating: {
    left: {
      en: { verb: ["gives", "give"], rest: "negative feedback more directly than" },
      ja: "否定的なフィードバックを直接的に伝える",
    },
    right: {
      en: { verb: ["gives", "give"], rest: "negative feedback more indirectly than" },
      ja: "否定的なフィードバックを間接的に伝える",
    },
  },
  persuading: {
    left: {
      en: { verb: ["expects", "expect"], rest: "the theory before the conclusion more than" },
      ja: "結論より先に理論や原則を求める",
    },
    right: {
      en: { verb: ["expects", "expect"], rest: "the conclusion and examples before the theory more than" },
      ja: "理論より先に結論や事例を求める",
    },
  },
  leading: {
    left: {
      en: { verb: ["keeps", "keep"], rest: "less distance between boss and team than" },
      ja: "上司とチームの距離が近い",
    },
    right: {
      en: { verb: ["keeps", "keep"], rest: "more distance between boss and team than" },
      ja: "上司とチームの距離が遠い",
    },
  },
  deciding: {
    left: { en: { verb: ["decides", "decide"], rest: "by group agreement more than" }, ja: "集団の合意で物事を決める" },
    right: {
      en: { verb: ["leaves", "leave"], rest: "decisions to the person in charge more than" },
      ja: "決定を責任者に委ねる",
    },
  },
  trusting: {
    left: {
      en: { verb: ["builds", "build"], rest: "trust through reliable work more than" },
      ja: "仕事ぶりで信頼を築く",
    },
    right: {
      en: { verb: ["builds", "build"], rest: "trust through personal relationships more than" },
      ja: "個人的な関係で信頼を築く",
    },
  },
  disagreeing: {
    left: {
      en: { verb: ["disagrees", "disagree"], rest: "openly more readily than" },
      ja: "ためらわずに公然と反論する",
    },
    right: { en: { verb: ["avoids", "avoid"], rest: "open disagreement more than" }, ja: "公然と反論するのを避ける" },
  },
  scheduling: {
    left: {
      en: { verb: ["sticks", "stick"], rest: "to fixed plans and deadlines more than" },
      ja: "予定や期限を固定して守る",
    },
    right: { en: { verb: ["treats", "treat"], rest: "plans as more flexible than" }, ja: "予定を状況に合わせて変える" },
  },
};

/** Japanese names of the national entries inside a region (the data records them in English). */
export const memberNamesJa: Record<string, string> = {
  Sweden: "スウェーデン",
  Finland: "フィンランド",
  Denmark: "デンマーク",
  Norway: "ノルウェー",
};

const en = {
  "title.join": "vs",
  "pick.from": "Seen from",
  "pick.to": "Compared with",
  seenFrom: (a: string, b: string) => `Seen from ${a}: each line below describes ${b} relative to ${a}.`,
  swap: (a: string, b: string) => `Swap: see ${a} from ${b}`,
  "ruler.heading": "Culture Map: eight scales",
  "ruler.lead": (a: string, b: string) =>
    `Erin Meyer's eight scales, sorted by how far apart ${a} and ${b} sit, largest gap first.`,
  "ruler.legendA": (a: string) => `Filled dot: ${a}, where you are looking from`,
  "ruler.legendB": (b: string) => `Hollow ring: ${b}`,
  "ruler.secondary": "† position taken from a review or summary, not from Meyer's own chart.",
  "ruler.provenance":
    "Positions are read by eye from Erin Meyer's published charts and rounded to seven steps. A step means “further towards that pole”, not a measured distance.",
  "ruler.how": "How the positions were read",
  "ruler.members": (code: string, note: string) => `${code} by country: ${note}`,
  "group.different": "Where you will notice the difference",
  "group.close": "Where you are close",
  "group.none": "No source",
  "group.noneLead": "These scales are left unmarked: placing a country without a source would be guessing.",
  "hofstede.heading": "Hofstede: six dimensions",
  "hofstede.lead": (a: string, b: string) =>
    `Scores from 0 to 100, sorted by the gap between ${a} and ${b}. They describe national averages, not either country's character.`,
  "hofstede.caption":
    "Country averages. About 80% of variation in values is between people inside a country (Taras et al. 2016).",
  "hofstede.provenance": (title: string, year: string) => `Source: ${title} (${year}).`,
  "hofstede.how": "About the Hofstede dimensions",
  description: (a: string, b: string) =>
    `${b} as seen from ${a}: where the two differ on Erin Meyer's eight scales and Hofstede's six dimensions, and what the sources say on each theme.`,
  "themes.heading": "What the sources say, theme by theme",
  "themes.lead": (a: string, b: string) =>
    `Entries for ${a} and ${b}, side by side on wide screens. Each keeps its own confidence label and citations.`,
  "index.title": "Compare",
  "index.lead":
    "Pick the country you work from, then the one you work with. The order matters: Germany seen from Japan reads differently from Japan seen from Germany.",
  "index.pickerHeading": "Choose two",
  "index.choose": "Choose…",
  "index.go": "Compare",
  "index.goHint": "Choose two different countries.",
  "index.suggested": "Pairs to start with",
  "index.biggest": (scale: string, steps: string) => `Largest gap: ${scale}, ${steps}`,
  "index.none": "No Culture Map gap on record",
  "index.all": "All 182 pairs",
  "index.allLead": "Each row is a vantage point. Pick the country you want to look at from there.",
  "index.rowFrom": (a: string) => `From ${a}`,
  "index.cellName": (a: string, b: string) => `${b} seen from ${a}`,
} as const;

type Dict = { [K in keyof typeof en]: (typeof en)[K] extends (...a: infer A) => string ? (...a: A) => string : string };

const ja: Dict = {
  "title.join": "と",
  "pick.from": "視点",
  "pick.to": "比較相手",
  seenFrom: (a: string, b: string) => `${a}から見た${b}。以下の各行は、${b}が${a}とどう違うかを書いています。`,
  swap: (a: string, b: string) => `入れ替える：${b}から見た${a}`,
  "ruler.heading": "Culture Map の 8 尺度",
  "ruler.lead": (a: string, b: string) => `Erin Meyer の 8 つの尺度を、${a}と${b}の差が大きい順に並べています。`,
  "ruler.legendA": (a: string) => `塗りつぶしの点：${a}（見ている側）`,
  "ruler.legendB": (b: string) => `白抜きの輪：${b}`,
  "ruler.secondary": "† Meyer 自身の図ではなく、書評や要約から読み取った位置。",
  "ruler.provenance":
    "位置は Erin Meyer が公開している図から目で読み取り、7 段階に丸めたものです。1 段階は「その極に一歩近い」という意味で、測った距離ではありません。",
  "ruler.how": "位置の読み取り方",
  "ruler.members": (code: string, note: string) => `${code} の国別：${note}`,
  "group.different": "違いに気づくところ",
  "group.close": "近いところ",
  "group.none": "出典なし",
  "group.noneLead": "出典なしに国を置くのは推測になるため、これらの尺度には印を付けていません。",
  "hofstede.heading": "Hofstede の 6 次元",
  "hofstede.lead": (a: string, b: string) =>
    `0〜100 のスコアを、${a}と${b}の差が大きい順に並べています。国の平均値であり、どちらの国の性格を表すものでもありません。`,
  "hofstede.caption":
    "国の平均値です。価値観のばらつきの約 80% は、国と国の間ではなく国の内部の個人間にあります（Taras ほか 2016）。",
  "hofstede.provenance": (title: string, year: string) => `出典：${title}（${year}）。`,
  "hofstede.how": "Hofstede の次元について",
  description: (a: string, b: string) =>
    `${a}から見た${b}。Erin Meyer の 8 尺度と Hofstede の 6 次元での違いと、テーマごとの出典付きの記述。`,
  "themes.heading": "テーマごとの記述",
  "themes.lead": (a: string, b: string) =>
    `${a}と${b}の記述を、広い画面では左右に並べています。各記述には信頼度と出典がそのまま付いています。`,
  "index.title": "比較",
  "index.lead":
    "自分が働いている国を選び、次に一緒に働く相手の国を選びます。順序には意味があります。日本から見たドイツと、ドイツから見た日本は、同じ差でも読み方が変わります。",
  "index.pickerHeading": "2 つを選ぶ",
  "index.choose": "選択…",
  "index.go": "比較する",
  "index.goHint": "異なる 2 つの国を選んでください。",
  "index.suggested": "まずはこの組み合わせから",
  "index.biggest": (scale: string, steps: string) => `最大の差：${scale}（${steps}）`,
  "index.none": "Culture Map 上の差の記録なし",
  "index.all": "182 通りの組み合わせ",
  "index.allLead": "各行が視点です。その国から見たい相手を選んでください。",
  "index.rowFrom": (a: string) => `${a}から`,
  "index.cellName": (a: string, b: string) => `${a}から見た${b}`,
};

export const compareDict: Record<Lang, Dict> = { en: en as unknown as Dict, ja };

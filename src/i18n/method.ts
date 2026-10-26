import type { Lang } from "./ui.ts";

/** Section ids on the method page. Stable: other pages and issues deep-link to them. */
export const METHOD_SECTIONS = [
  "what-this-is",
  "reading-a-claim",
  "frameworks",
  "software-evidence",
  "how-not-to-read",
  "data-limits",
  "corrections",
] as const;
export type MethodSection = (typeof METHOD_SECTIONS)[number];

/** Sub-sections of "frameworks", each with its own h3 id. */
export const FRAMEWORK_SECTIONS = ["culture-map", "hofstede", "globe"] as const;
export type FrameworkSection = (typeof FRAMEWORK_SECTIONS)[number];

interface MethodText {
  gloss: string;
  lead: string;
  tocLabel: string;
  sections: Record<MethodSection, string>;
  frameworks: Record<FrameworkSection, string>;
  labelsCaption: string;
  labelCol: string;
  countsCol: string;
  ruleNames: { strong: string; medium: string; weak: string };
  exampleCaption: string;
  exampleOnPage: string;
  gridCaption: string;
  gridLabel: string;
  revisedCaption: string;
  revisedCountry: string;
  revisedDimension: string;
  revisedOld: string;
  revisedNew: string;
  revisedOldSource: string;
  rastogiCaption: string;
  rastogiCountry: string;
  rastogiOdds: string;
  rastogiBar: string;
  rastogiBase: string;
  rastogiNote: string;
  tableScroll: string;
  poles: (left: string, right: string) => string;
}

export const methodText: Record<Lang, MethodText> = {
  en: {
    gloss: "Front matter: how this dictionary is made and how to read it",
    lead: "wtfe records how software engineering tends to be done in fourteen countries and regions, the way a usage dictionary records how words are used. This page explains what counts as evidence, how strong each kind is, which frameworks the scale pages rely on, and where the evidence runs out.",
    tocLabel: "On this page",
    sections: {
      "what-this-is": "What this site is, and is not",
      "reading-a-claim": "How to read a claim",
      frameworks: "The frameworks",
      "software-evidence": "Evidence from software engineering",
      "how-not-to-read": "How not to read this site",
      "data-limits": "Limits of the data",
      corrections: "Corrections",
    },
    frameworks: {
      "culture-map": "Erin Meyer's Culture Map",
      hofstede: "Hofstede's six dimensions",
      globe: "GLOBE, and why it is not used",
    },
    labelsCaption: "The three usage labels and what earns each one",
    labelCol: "Label",
    countsCol: "Sources that earn it",
    ruleNames: { strong: "Left rule: thick, solid", medium: "Left rule: thin, solid", weak: "Left rule: dashed" },
    exampleCaption: "A real entry, as it appears on the Germany page",
    exampleOnPage: "See it in context on the Germany page",
    gridCaption:
      "The seven steps used for Culture Map positions, read from the left pole to the right pole of each scale",
    gridLabel: "Seven-step grid",
    revisedCaption:
      "Examples of Hofstede scores that changed between older tables and The Culture Factor's current values",
    revisedCountry: "Country",
    revisedDimension: "Dimension",
    revisedOld: "Older table",
    revisedNew: "Current",
    revisedOldSource: "Older value cited by",
    rastogiCaption:
      "Odds of a pull request being accepted, by the submitter's country, relative to the United States (= 100). Rastogi et al. 2018, as summarized in the Ehime University WWS2019 slides",
    rastogiCountry: "Submitter's country",
    rastogiOdds: "Odds",
    rastogiBar: "Difference from the United States, drawn as a bar",
    rastogiBase: "(baseline)",
    rastogiNote:
      "Solid bars to the right of the center line mean higher odds than the United States, and outlined bars to the left mean lower odds. A full-width bar is a difference of 50.",
    tableScroll: "Table, scrolls sideways",
    poles: (left, right) => `${left} ↔ ${right}`,
  },
  ja: {
    gloss: "凡例：この辞書の作り方と読み方",
    lead: "wtfe は、14 の国と地域でソフトウェア開発がどう行われる傾向にあるかを、用例辞典が言葉の使われ方を記録するように記録しています。以下では、何を根拠とみなすか、根拠の種類ごとの確かさ、尺度のページの土台にある枠組み、それぞれの限界を説明します。",
    tocLabel: "このページの内容",
    sections: {
      "what-this-is": "このサイトは何で、何でないか",
      "reading-a-claim": "記述の読み方",
      frameworks: "使っている枠組み",
      "software-evidence": "ソフトウェア工学の実証研究",
      "how-not-to-read": "読み違えないために",
      "data-limits": "データの限界",
      corrections: "訂正の受け付け",
    },
    frameworks: {
      "culture-map": "Erin Meyer の Culture Map",
      hofstede: "Hofstede の 6 次元",
      globe: "GLOBE を使わない理由",
    },
    labelsCaption: "3 つの用法ラベルと、それぞれに必要な根拠",
    labelCol: "ラベル",
    countsCol: "このラベルになる出典",
    ruleNames: { strong: "左の罫：太い実線", medium: "左の罫：細い実線", weak: "左の罫：破線" },
    exampleCaption: "実際の記述（ドイツのページと同じ表示）",
    exampleOnPage: "ドイツのページで前後の記述と一緒に見る",
    gridCaption: "Culture Map の位置に使う 7 段階。各尺度の左の極から右の極へ並ぶ",
    gridLabel: "7 段階の目盛り",
    revisedCaption: "旧版の表と The Culture Factor の現行値で値が変わった Hofstede スコアの例",
    revisedCountry: "国",
    revisedDimension: "次元",
    revisedOld: "旧版",
    revisedNew: "現行値",
    revisedOldSource: "旧版の値の出典",
    rastogiCaption:
      "PR の投稿者の国別に見た採択オッズ（米国 = 100）。Rastogi ほか 2018 の結果を、愛媛大学の WWS2019 論文紹介スライドの数値で示す",
    rastogiCountry: "投稿者の国",
    rastogiOdds: "オッズ",
    rastogiBar: "米国との差を棒で示したもの",
    rastogiBase: "（基準）",
    rastogiNote:
      "中央の線より右にある塗りつぶしの棒は米国より採択されやすいこと、左にある枠線だけの棒は採択されにくいことを示す。棒の幅いっぱいが差 50 にあたる。",
    tableScroll: "表（横にスクロールできます）",
    poles: (left, right) => `${left} ↔ ${right}`,
  },
};

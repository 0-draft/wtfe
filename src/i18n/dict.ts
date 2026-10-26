import type { Confidence, ThemeId } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

const en = {
  "site.title": "wtfe",
  "site.expansion": "Ways They Frame Engineering",
  "site.desc":
    "How software engineers in different countries tend to think and work. Every claim cites a source and is rated for confidence.",
  "nav.skip": "Skip to content",
  "nav.countries": "Countries",
  "nav.themes": "Themes",
  "nav.scales": "Scales",
  "nav.compare": "Compare",
  "nav.method": "Method",
  "nav.sources": "Sources",
  "nav.theme": "Display",
  "nav.themeLight": "Light",
  "nav.themeDark": "Dark",
  "nav.themeAuto": "Auto",
  "nav.lang": "日本語",
  "nav.langLabel": "Switch to Japanese",
  "home.lead":
    "The site covers 14 countries and regions in seven themes. Each statement cites a public source and says how strong that source is.",
  "home.caveat":
    "These describe tendencies, not personal traits. Most of the variation in cultural values lies within countries rather than between them.",
  "home.countries": "Countries",
  "home.themes": "Themes",
  "home.claims": (n: number) => (n === 1 ? "1 claim" : `${n} claims`),
  "country.intro": "Overview",
  "country.variance": "Within-country variance and counter-evidence",
  "country.hofstede": "Hofstede dimensions",
  "country.cultureMap": "Culture Map positions",
  "country.untranslated": "This page has not been translated yet, so the Japanese original is shown.",
  "theme.lead": (theme: string) => `What the sources say about ${theme.toLowerCase()}, country by country.`,
  sources: "Sources",
  "claim.dated": "Dated",
  "claim.sourceCount": (n: number) => (n === 1 ? "1 source" : `${n} sources`),
  "confidence.label": "Confidence",
  "method.title": "Method",
  "foot.license": "Content CC BY 4.0 · Code MIT",
  "foot.repo": "Source and corrections on GitHub",
} as const;

type Dict = { [K in keyof typeof en]: (typeof en)[K] extends (...a: infer A) => string ? (...a: A) => string : string };

const ja: Dict = {
  "site.title": "wtfe",
  "site.expansion": "Ways They Frame Engineering",
  "site.desc":
    "世界各国のソフトウェアエンジニアがどう考え、どう働く傾向にあるかをまとめたサイトです。すべての記述に出典と信頼度を付けています。",
  "nav.skip": "本文へ移動",
  "nav.countries": "国",
  "nav.themes": "テーマ",
  "nav.scales": "尺度",
  "nav.compare": "比較",
  "nav.method": "読み方",
  "nav.sources": "出典",
  "nav.theme": "表示",
  "nav.themeLight": "ライト",
  "nav.themeDark": "ダーク",
  "nav.themeAuto": "自動",
  "nav.lang": "English",
  "nav.langLabel": "英語に切り替える",
  "home.lead":
    "14 の国と地域を 7 つのテーマで扱います。どの記述にも公開された出典を付け、その出典がどれだけ確かかを示しています。",
  "home.caveat":
    "ここにあるのは傾向で、その国の人の性質ではありません。文化的価値のばらつきの大半は、国と国の間ではなく国の内部にあります。",
  "home.countries": "国と地域",
  "home.themes": "テーマ",
  "home.claims": (n: number) => `記述 ${n} 件`,
  "country.intro": "概要",
  "country.variance": "国内のばらつきと反証",
  "country.hofstede": "Hofstede の 6 次元",
  "country.cultureMap": "Culture Map 上の位置",
  "country.untranslated": "このページはまだ翻訳されていません。日本語の原文を表示しています。",
  "theme.lead": (theme: string) => `${theme}について、出典が示す内容を国ごとに並べています。`,
  sources: "出典",
  "claim.dated": "【古い資料】",
  "claim.sourceCount": (n: number) => `出典 ${n} 件`,
  "confidence.label": "信頼度",
  "method.title": "読み方",
  "foot.license": "コンテンツ CC BY 4.0 · コード MIT",
  "foot.repo": "ソースコードと訂正の窓口（GitHub）",
};

export const dict: Record<Lang, Dict> = { en: en as unknown as Dict, ja };

export const themeNames: Record<Lang, Record<ThemeId, string>> = {
  en: {
    design: "Design & quality",
    failure: "Failure & risk",
    feedback: "Feedback & code review",
    hierarchy: "Hierarchy & decisions",
    communication: "Communication & docs",
    work: "Work & careers",
    oss: "Open source & community",
  },
  ja: {
    design: "設計と品質",
    failure: "失敗とリスク",
    feedback: "フィードバックとコードレビュー",
    hierarchy: "階層と意思決定",
    communication: "コミュニケーションとドキュメント",
    work: "働き方とキャリア",
    oss: "OSS とコミュニティ",
  },
};

export const confidenceNames: Record<Lang, Record<Confidence, string>> = {
  en: { strong: "Well attested", medium: "Attested", weak: "Thin" },
  ja: { strong: "【裏付け十分】", medium: "【裏付けあり】", weak: "【裏付け薄】" },
};

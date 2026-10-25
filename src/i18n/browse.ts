/**
 * UI strings for the browsing pages: home, the countries and themes indexes, theme pages, sources and the evidence
 * map. Typed like dict.ts so both languages must carry every key.
 */
import type { CountryId, ThemeId } from "../data/schema.ts";
import type { Lang } from "./ui.ts";

const en = {
  "home.premise":
    "wtfe describes how software engineers in fourteen countries and regions tend to design, review, decide and work, the way a usage dictionary describes how a language is used. Every statement points to a public source and carries a label for how well that source supports it. Read the entries as tendencies, not traits: about 80% of the variation in cultural values lies between people inside a country, not between countries.",
  "home.title": "Ways They Frame Engineering",
  "home.premiseCite": "Taras, Steel & Kirkman 2016",
  "home.mapTitle": "How much we know",
  "home.mapLead":
    "Each cell stacks one rule per claim. A thick rule is well attested, a thin rule is attested, a dashed rule is thin. The map shows the weight of the evidence, not anything about the countries themselves.",
  "home.scalesTitle": "Read a scale from where you stand",
  "home.scalesLink": (_name: string) => "Open the Evaluating scale",
  "home.compareTitle": "Compare two countries",
  "home.compareBody":
    "A comparison is read in one direction: “Germany as seen from Japan” lists where the gap is largest first, then the claims side by side, theme by theme.",
  "home.compareLink": "Choose two countries",
  "home.compareExample": (from: string, to: string) => `${to} as seen from ${from}`,
  "home.allCountries": "All countries, with one-line summaries",
  "home.allThemes": "All themes, with definitions",

  "map.caption": (claims: number, strong: number, medium: number, weak: number) =>
    `Evidence map: ${claims} claims across 14 countries and regions and 7 themes. ${strong} are well attested, ${medium} attested and ${weak} thin.`,
  "map.thinCells": (cells: string) => `Cells where every claim is thin: ${cells}.`,
  "map.noThinCells": "No cell rests on thin claims alone.",
  "map.corner": "Country or region",
  "map.cellLabel": (country: string, theme: string) => `${country} · ${theme}`,
  "map.counts": (strong: number, medium: number, weak: number) =>
    [strong && `${strong} well attested`, medium && `${medium} attested`, weak && `${weak} thin`]
      .filter(Boolean)
      .join(", "),
  "map.empty": "no claims",
  /** Rest of a cell's accessible name after the visible count. */
  "map.cellName": (counts: string, where: string) => `(${counts}): ${where}`,
  "map.legend": "Rules",
  "map.keyTitle": "Column codes",
  "map.readAll": (country: string, theme: string) => `Read all of ${country} · ${theme}`,
  "map.close": "Close",
  "map.scroll": "Evidence map, scrolls sideways",

  "countries.title": "Countries and regions",
  "countries.lead":
    "Fourteen entries, sorted alphabetically. The Nordics are one region entry; where a claim or a score applies to only one Nordic country, the entry says which.",
  "countries.counts": (total: number) => (total === 1 ? "1 claim" : `${total} claims`),
  "themes.title": "Themes",
  "themes.lead":
    "The seven themes every country entry is organised by. Each theme page lists all countries' claims on it, followed by the scales that bear on it.",
  "themes.counts": (claims: number, countries: number) => `${claims} claims from ${countries} countries and regions`,
  "theme.definition": "Definition",
  "theme.scales": "Related scales",
  "theme.scalesLead":
    "These scales describe national averages that bear on this theme. They place countries relative to one another; they say nothing about any one engineer.",
  "theme.meyer": "Culture Map",
  "theme.hofstede": "Hofstede",
  "theme.noScales":
    "No Culture Map or Hofstede scale measures this theme closely enough to list here. The claims below rest on their own sources.",
  "theme.countryLink": (country: string) => `${country}: the full entry`,
  "theme.jump": "Jump to a country",
  "country.compareTheme": (theme: string) => `Compare with other countries: ${theme}`,

  "sources.title": "Sources",
  "sources.lead": (n: number, claims: number) =>
    `${n} sources, each listed once, cited by ${claims} claims. Titles are kept as each claim cites them; where two links lead to the same document they are merged.`,
  "sources.dated": "Dated",
  "sources.datedNote": (year: number) => `Sources published before ${year} carry a “dated” label.`,
  "sources.noYear": "Year unknown",
  "sources.citedBy": "Cited by",
  "sources.links": (n: number) => `${n} pages`,
  "sources.catalogue": "Catalogue",
  "sources.byCountry": "By country",
  "sources.byCountryLead": "Each country's sources, linked to their place in the catalogue.",
  "sources.filter": "Filter",
  "sources.filterCountry": "Country or region",
  "sources.filterAll": "All",
  "sources.filterConfidence": "Cited by a claim that is",
  "sources.filterAny": "Any confidence",
  /** Filled client-side: {n} and {total} are replaced. */
  "sources.shown": "Showing {n} of {total} sources.",
  "sources.countryCount": (n: number) => (n === 1 ? "1 source" : `${n} sources`),
} as const;

type Dict = { [K in keyof typeof en]: (typeof en)[K] extends (...a: infer A) => string ? (...a: A) => string : string };

const ja: Dict = {
  "home.premise":
    "wtfe は、14 の国と地域のソフトウェアエンジニアが、どう設計し、どうレビューし、どう決め、どう働く傾向にあるかを記述します。用法辞典がことばの使われ方を記述するのと同じ書き方です。どの記述にも公開された出典があり、その出典がどこまで裏付けているかをラベルで示しています。書かれているのは傾向で、その国の人の性質ではありません。文化的価値のばらつきの約 8 割は、国と国の間ではなく、同じ国の人どうしの間にあります。",
  "home.title": "エンジニアの作法を国ごとに引く",
  "home.premiseCite": "Taras, Steel & Kirkman 2016",
  "home.mapTitle": "どこまでわかっているか",
  "home.mapLead":
    "各マスには記述 1 件につき 1 本の線を引いています。太い実線は裏付け十分、細い実線は裏付けあり、破線は裏付け薄です。この図が示すのは根拠の厚さで、国そのものの評価ではありません。",
  "home.scalesTitle": "尺度は自分の立ち位置から読む",
  "home.scalesLink": (name: string) => `Evaluating（${name}）の尺度を開く`,
  "home.compareTitle": "2 つの国を比べる",
  "home.compareBody":
    "比較には向きがあります。「日本から見たドイツ」では、差の大きい尺度から順に並べ、そのあとテーマごとに両国の記述を並べます。",
  "home.compareLink": "比べる 2 か国を選ぶ",
  "home.compareExample": (from: string, to: string) => `${from}から見た${to}`,
  "home.allCountries": "すべての国と地域（概要つき）",
  "home.allThemes": "すべてのテーマ（定義つき）",

  "map.caption": (claims: number, strong: number, medium: number, weak: number) =>
    `根拠の地図。14 の国と地域、7 つのテーマにわたる ${claims} 件の記述のうち、裏付け十分が ${strong} 件、裏付けありが ${medium} 件、裏付け薄が ${weak} 件。`,
  "map.thinCells": (cells: string) => `すべての記述が裏付け薄のマス: ${cells}。`,
  "map.noThinCells": "裏付け薄の記述だけでできているマスはありません。",
  "map.corner": "国・地域",
  "map.cellLabel": (country: string, theme: string) => `${country}・${theme}`,
  "map.counts": (strong: number, medium: number, weak: number) =>
    [strong && `裏付け十分 ${strong} 件`, medium && `裏付けあり ${medium} 件`, weak && `裏付け薄 ${weak} 件`]
      .filter(Boolean)
      .join("、"),
  "map.empty": "記述なし",
  "map.cellName": (counts: string, where: string) => `（${counts}）${where}`,
  "map.legend": "線の種類",
  "map.keyTitle": "列の略号",
  "map.readAll": (country: string, theme: string) => `${country}・${theme}をすべて読む`,
  "map.close": "閉じる",
  "map.scroll": "根拠の地図（横にスクロールできます）",

  "countries.title": "国と地域",
  "countries.lead":
    "14 の見出し語を五十音順に並べています。北欧は 1 つの地域として扱い、記述やスコアが北欧の一部の国だけに当てはまる場合は、どの国かを明記しています。",
  "countries.counts": (total: number) => `記述 ${total} 件`,
  "themes.title": "テーマ",
  "themes.lead":
    "どの国の項目も、この 7 つのテーマで構成しています。テーマのページには、そのテーマについての全か国の記述と、関係する尺度を載せています。",
  "themes.counts": (claims: number, countries: number) => `${countries} の国と地域から記述 ${claims} 件`,
  "theme.definition": "定義",
  "theme.scales": "関係する尺度",
  "theme.scalesLead":
    "以下の尺度は、このテーマに関わる国ごとの平均的な傾向を表します。国どうしの相対的な位置を示すもので、個々のエンジニアについては何も語りません。",
  "theme.meyer": "Culture Map",
  "theme.hofstede": "Hofstede",
  "theme.noScales":
    "このテーマに十分近い Culture Map や Hofstede の尺度はないため、載せていません。下の記述はそれぞれの出典だけに基づいています。",
  "theme.countryLink": (country: string) => `${country}の項目をすべて読む`,
  "theme.jump": "国へ移動",
  "country.compareTheme": (theme: string) => `ほかの国と比べる: ${theme}`,

  "sources.title": "出典",
  "sources.lead": (n: number, claims: number) =>
    `出典 ${n} 件を 1 回ずつ載せています。引用している記述は ${claims} 件です。題名は各記述の引用どおりで、同じ文書を指すリンクは 1 件にまとめています。`,
  "sources.dated": "【古い資料】",
  "sources.datedNote": (year: number) => `${year} 年より前に公開された出典には【古い資料】と付けています。`,
  "sources.noYear": "年不明",
  "sources.citedBy": "引用している記述",
  "sources.links": (n: number) => `${n} ページ`,
  "sources.catalogue": "一覧",
  "sources.byCountry": "国別",
  "sources.byCountryLead": "国ごとの出典です。一覧の該当箇所へリンクしています。",
  "sources.filter": "絞り込み",
  "sources.filterCountry": "国・地域",
  "sources.filterAll": "すべて",
  "sources.filterConfidence": "引用している記述の信頼度",
  "sources.filterAny": "指定しない",
  "sources.shown": "{total} 件中 {n} 件を表示しています。",
  "sources.countryCount": (n: number) => `出典 ${n} 件`,
};

export const browse: Record<Lang, Dict> = { en: en as unknown as Dict, ja };

/** Short column codes for the evidence map on narrow screens (research/design.md, figure C). */
export const themeCodes: Record<Lang, Record<ThemeId, string>> = {
  en: {
    design: "DES",
    failure: "FAIL",
    feedback: "REV",
    hierarchy: "HIER",
    communication: "COMM",
    work: "WORK",
    oss: "OSS",
  },
  ja: {
    design: "設計",
    failure: "失敗",
    feedback: "指摘",
    hierarchy: "階層",
    communication: "伝達",
    work: "働方",
    oss: "OSS",
  },
};

/** One-sentence definition of each theme: what the claims under it are about. */
export const themeDefinitions: Record<Lang, Record<ThemeId, string>> = {
  en: {
    design:
      "How teams decide what good software is: specifications, architecture, testing, process standards and who signs off on quality.",
    failure:
      "How mistakes, incidents and risk are handled: whether errors are spoken about, how postmortems work, and how cautious organisations are with new technology and data.",
    feedback:
      "How criticism travels between engineers: code review, pull request decisions, and how disagreement is voiced.",
    hierarchy:
      "Who decides and how: the distance between managers and teams, consensus versus top-down calls, and the legal and organisational rules around them.",
    communication:
      "How information is passed on: how much is said explicitly, what gets written down, meetings, and which language a team works in.",
    work: "The conditions around the work: hours, remote work, employment contracts, company size, pay and how careers move.",
    oss: "How engineers take part in open source and the wider community: contribution numbers, public funding, conferences and government use.",
  },
  ja: {
    design:
      "よいソフトウェアとは何かをチームがどう決めるか。仕様、アーキテクチャ、テスト、プロセス標準、品質の承認者などを扱います。",
    failure:
      "ミス、障害、リスクをどう扱うか。誤りを口にできるか、ポストモーテムの進め方、新しい技術やデータに組織がどこまで慎重かを扱います。",
    feedback: "エンジニアの間で指摘がどう伝わるか。コードレビュー、プルリクエストの判断、反対意見の出し方を扱います。",
    hierarchy:
      "誰がどう決めるか。上司とチームの距離、合意型かトップダウンか、それを取り巻く法律や組織のルールを扱います。",
    communication: "情報をどう伝えるか。どこまで明示的に言うか、何を文書に残すか、会議、チームの作業言語を扱います。",
    work: "仕事を取り巻く条件。労働時間、リモートワーク、雇用契約、企業規模、報酬、キャリアの動き方を扱います。",
    oss: "OSS や広いコミュニティへの関わり方。コントリビューションの規模、公的な資金、カンファレンス、行政での利用を扱います。",
  },
};

/**
 * Hiragana readings for sorting the Japanese index in 五十音 order. Country names are katakana or kanji, and
 * kanji cannot be collated by sound, so every entry gets an explicit reading.
 */
export const readings: Record<CountryId, string> = {
  jp: "にほん",
  kr: "かんこく",
  cn: "ちゅうごく",
  in: "いんど",
  us: "あめりか",
  gb: "いぎりす",
  de: "どいつ",
  fr: "ふらんす",
  nordics: "ほくおう",
  nl: "おらんだ",
  il: "いすらえる",
  br: "ぶらじる",
  pl: "ぽーらんど",
  ua: "うくらいな",
};

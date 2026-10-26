/**
 * UI strings for the site search (the command palette in Search.astro). Typed like dict.ts so both languages must
 * carry every key.
 */
import type { Lang } from "./ui.ts";

/** Page kinds written into `data-pagefind-meta="kind:…"` on `<main>` and shown as the usage label of a result. */
export const SEARCH_KINDS = ["home", "index", "country", "theme", "scale", "compare", "method", "sources"] as const;
export type SearchKind = (typeof SEARCH_KINDS)[number];

interface SearchStrings {
  open: string;
  dialog: string;
  placeholder: string;
  close: string;
  results: string;
  idle: string;
  loading: string;
  none: (q: string) => string;
  /** Numbers may be "{n}"-style placeholders: the palette fills them in the browser. */
  count: (n: number | string) => string;
  more: (shown: number | string, total: number | string) => string;
  unavailable: string;
  failed: string;
  keys: readonly (readonly [key: string, action: string])[];
  kinds: Record<SearchKind, string>;
}

const en: SearchStrings = {
  open: "Search",
  dialog: "Search the site",
  placeholder: "Country, theme or word",
  close: "Close",
  results: "Results",
  idle: "Searches the English pages.",
  loading: "Loading the index…",
  none: (q) => `Nothing found for “${q}”.`,
  count: (n) => (n === 1 ? "1 page" : `${n} pages`),
  more: (shown, total) => `showing ${shown} of ${total}`,
  unavailable: "Search works on the built site only. Run pnpm build, then pnpm preview.",
  failed: "The search index could not be loaded.",
  keys: [
    ["↑↓", "move"],
    ["↵", "open"],
    ["esc", "close"],
  ],
  kinds: {
    home: "Home",
    index: "Index",
    country: "Country",
    theme: "Theme",
    scale: "Scale",
    compare: "Compare",
    method: "Method",
    sources: "Sources",
  },
};

const ja: SearchStrings = {
  open: "検索",
  dialog: "サイト内検索",
  placeholder: "国、テーマ、語句",
  close: "閉じる",
  results: "検索結果",
  idle: "日本語のページから探します。",
  loading: "索引を読み込んでいます…",
  none: (q) => `「${q}」に一致するページはありません。`,
  count: (n) => `${n}件`,
  more: (shown, total) => `${total}件中${shown}件を表示`,
  unavailable: "検索はビルド済みのサイトでのみ使えます。pnpm build のあと pnpm preview で確認してください。",
  failed: "検索の索引を読み込めませんでした。",
  keys: [
    ["↑↓", "移動"],
    ["↵", "開く"],
    ["esc", "閉じる"],
  ],
  kinds: {
    home: "トップ",
    index: "一覧",
    country: "国・地域",
    theme: "テーマ",
    scale: "尺度",
    compare: "比較",
    method: "読み方",
    sources: "出典",
  },
};

export const search: Record<Lang, SearchStrings> = { en, ja };

/** Kind of a page from its Base `section` and its site-relative path ("/countries/", "/countries/jp/"). */
export function searchKind(section: string | undefined, path: string): SearchKind {
  if (!section) return "home";
  if (section === "method" || section === "sources") return section;
  if (path === `/${section}/`) return "index";
  return ({ countries: "country", themes: "theme", scales: "scale", compare: "compare" } as const)[
    section as "countries"
  ];
}

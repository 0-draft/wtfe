/**
 * Ordering for the countries index: alphabetical in English (a leading "The" ignored, as dictionaries do) and
 * 五十音 in Japanese by reading, with a group head per letter or kana row.
 */
import type { CountryId } from "../data/schema.ts";
import type { Lang } from "../i18n/ui.ts";

interface Named {
  id: CountryId;
  name: string;
}

export const sortName = (name: string) => name.replace(/^the\s+/i, "");

/** Kana rows (行) in 五十音 order, each with the hiragana it covers (voiced and half-voiced forms included). */
const KANA_ROWS: [head: string, chars: string][] = [
  ["あ", "ぁあぃいぅうゔぇえぉお"],
  ["か", "かがきぎくぐけげこご"],
  ["さ", "さざしじすずせぜそぞ"],
  ["た", "ただちぢっつづてでとど"],
  ["な", "なにぬねの"],
  ["は", "はばぱひびぴふぶぷへべぺほぼぽ"],
  ["ま", "まみむめも"],
  ["や", "ゃやゅゆょよ"],
  ["ら", "らりるれろ"],
  ["わ", "ゎわゐゑをん"],
];

const toHiragana = (s: string) => s.replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60));

/** Group head for an index entry: an uppercase Latin letter in English, the kana row (あ, か …) in Japanese. */
export function indexHead(lang: Lang, name: string, reading?: string): string {
  if (lang === "en") return sortName(name).charAt(0).toUpperCase();
  const first = toHiragana((reading ?? name).charAt(0));
  return KANA_ROWS.find(([, chars]) => chars.includes(first))?.[0] ?? first;
}

export function sortCountries<T extends Named>(
  lang: Lang,
  list: readonly T[],
  readings: Record<CountryId, string>,
): T[] {
  const collator = new Intl.Collator(lang, { sensitivity: "base" });
  const key = (c: T) => (lang === "ja" ? readings[c.id] : sortName(c.name));
  return [...list].sort((a, b) => collator.compare(key(a), key(b)));
}

/** Sorted entries split into consecutive groups under their index head. */
export function groupByHead<T extends Named>(
  lang: Lang,
  list: readonly T[],
  readings: Record<CountryId, string>,
): { head: string; items: T[] }[] {
  const groups: { head: string; items: T[] }[] = [];
  for (const c of sortCountries(lang, list, readings)) {
    const head = indexHead(lang, c.name, readings[c.id]);
    const last = groups.at(-1);
    if (last?.head === head) last.items.push(c);
    else groups.push({ head, items: [c] });
  }
  return groups;
}

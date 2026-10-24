import {
  COUNTRY_IDS,
  type CountryContent,
  type CountryId,
  type CountryMeta,
  countryContentSchema,
  countryMetaSchema,
  THEME_IDS,
  type ThemeId,
} from "../data/schema.ts";
import type { Lang } from "../i18n/ui.ts";

const raw = {
  ja: import.meta.glob<unknown>("../data/content/ja/countries/*.json", { eager: true, import: "default" }),
  en: import.meta.glob<unknown>("../data/content/en/countries/*.json", { eager: true, import: "default" }),
  meta: import.meta.glob<unknown>("../data/content/meta/*.json", { eager: true, import: "default" }),
};

const idOf = (path: string) => path.replace(/^.*\//, "").replace(/\.json$/, "");

function parseAll<T>(files: Record<string, unknown>, parse: (v: unknown) => T): Map<string, T> {
  return new Map(Object.entries(files).map(([path, v]) => [idOf(path), parse(v)]));
}

const content = {
  ja: parseAll(raw.ja, (v) => countryContentSchema.parse(v)),
  en: parseAll(raw.en, (v) => countryContentSchema.parse(v)),
};
const meta = parseAll(raw.meta, (v) => countryMetaSchema.parse(v));

/** Countries in canonical order. English falls back to Japanese until a translation exists. */
export function countries(lang: Lang): CountryContent[] {
  return COUNTRY_IDS.flatMap((id) => {
    const c = country(lang, id);
    return c ? [c] : [];
  });
}

export function country(lang: Lang, id: CountryId): CountryContent | undefined {
  return content[lang].get(id) ?? content.ja.get(id);
}

/** True when the page for `lang` is shown in its own language (not a Japanese fallback). */
export function isTranslated(lang: Lang, id: CountryId): boolean {
  return content[lang].has(id);
}

export function countryMeta(id: CountryId): CountryMeta | undefined {
  return meta.get(id);
}

export function claimsByTheme(lang: Lang, theme: ThemeId) {
  return countries(lang).map((c) => ({ country: c, claims: c.themes[theme] }));
}

export { THEME_IDS };

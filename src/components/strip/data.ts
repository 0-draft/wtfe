import {
  COUNTRY_IDS,
  type CountryId,
  type CountryMeta,
  CULTURE_MAP_SCALES,
  type CultureMapScale,
  HOFSTEDE_DIMENSIONS,
  type HofstedeDimension,
} from "../../data/schema.ts";
import { cultureMapText, hofstedeText, type ScaleText, scaleSlug } from "../../i18n/scales.ts";
import { type Lang, localePath } from "../../i18n/ui.ts";
import { country, countryMeta } from "../../lib/content.ts";
import { type StripItem, type StripKey, scaleKind } from "../../lib/strip.ts";
import { stripItems } from "../../lib/strip-items.ts";

/** Build-time data for strips: loads content, so it must not be imported by a client island. */

const metas: CountryMeta[] = COUNTRY_IDS.map((id) => countryMeta(id)).filter((m): m is CountryMeta => Boolean(m));

export const ALL_SCALES: readonly StripKey[] = [...CULTURE_MAP_SCALES, ...HOFSTEDE_DIMENSIONS];

export function scaleItems(key: StripKey): StripItem[] {
  return stripItems(key, metas);
}

export function scaleText(lang: Lang, key: StripKey): ScaleText {
  return scaleKind(key) === "meyer"
    ? cultureMapText[lang][key as CultureMapScale]
    : hofstedeText[lang][key as HofstedeDimension];
}

export function scaleHref(lang: Lang, key: StripKey): string {
  return localePath(lang, `/scales/${scaleSlug(key, scaleKind(key))}/`);
}

/** Every country's name in `lang`, keyed by id (plain object so it can be passed to an island). */
export function countryNames(lang: Lang): Record<CountryId, string> {
  return Object.fromEntries(COUNTRY_IDS.map((id) => [id, country(lang, id)?.name ?? id])) as Record<CountryId, string>;
}

/** Slug ↔ key for the scale pages: the 8 Meyer keys and `hofstede-<dim>`. */
export function scaleBySlug(slug: string): StripKey | undefined {
  return ALL_SCALES.find((k) => scaleSlug(k, scaleKind(k)) === slug);
}

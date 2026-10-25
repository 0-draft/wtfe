/**
 * Country names inside running text. Client-safe (no schema.ts values, no content), so the vantage-strip island,
 * the compare sentences and the home page all agree on "the Netherlands", "The Nordics give …" and so on.
 */
import type { CountryId } from "../data/schema.ts";
import type { Lang } from "../i18n/ui.ts";

/** English names that take "the" in a sentence. The data writes "Netherlands" but "The Nordics"; both are handled. */
const WITH_ARTICLE: ReadonlySet<CountryId> = new Set(["us", "gb", "nl", "nordics"]);
/** English names that take a plural verb ("the Nordics give"). */
const PLURAL: ReadonlySet<CountryId> = new Set(["nordics"]);

export interface NameOptions {
  /** Sentence-initial form: "The Netherlands". Default false: "the Netherlands". */
  capitalize?: boolean;
}

/**
 * A country name as it reads inside a sentence: "than the Netherlands", "The Nordics give", "日本より".
 * Japanese names are returned unchanged.
 */
export function nameInSentence(lang: Lang, id: CountryId, name: string, opts: NameOptions = {}): string {
  if (lang === "ja") return name;
  const bare = name.replace(/^the\s+/i, "");
  if (!WITH_ARTICLE.has(id)) return bare;
  return `${opts.capitalize ? "The" : "the"} ${bare}`;
}

/** English verb agreement: true for names that take a plural verb ("the Nordics are"). Always false in Japanese. */
export function isPluralName(lang: Lang, id: CountryId): boolean {
  return lang === "en" && PLURAL.has(id);
}

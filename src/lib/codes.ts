import type { CountryId } from "../data/schema.ts";

/** Short label shown on marks, the thumb index and headwords. ISO-like, but readers expect UK and a region code. */
export const DISPLAY_CODE: Record<CountryId, string> = {
  jp: "JP",
  kr: "KR",
  cn: "CN",
  in: "IN",
  us: "US",
  gb: "UK",
  de: "DE",
  fr: "FR",
  nordics: "NORD",
  nl: "NL",
  il: "IL",
  br: "BR",
  pl: "PL",
  ua: "UA",
};

/** Sources published before this year carry a "dated" label. */
export const DATED_BEFORE = 2016;

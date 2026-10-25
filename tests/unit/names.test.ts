import { describe, expect, it } from "vitest";
import { COUNTRY_IDS, CULTURE_MAP_SCALES, HOFSTEDE_DIMENSIONS, THEME_IDS } from "../../src/data/schema.ts";
import { country } from "../../src/lib/content.ts";
import { isPluralName, nameInSentence } from "../../src/lib/names.ts";
import { COUNTRY_ORDER } from "../../src/lib/strip.ts";
import { SCALE_THEMES, THEME_SCALES } from "../../src/lib/theme-scales.ts";

describe("nameInSentence", () => {
  it("adds 'the' where English needs it, whatever the data writes", () => {
    expect(nameInSentence("en", "nl", "Netherlands")).toBe("the Netherlands");
    expect(nameInSentence("en", "nl", "Netherlands", { capitalize: true })).toBe("The Netherlands");
    expect(nameInSentence("en", "nordics", "The Nordics")).toBe("the Nordics");
    expect(nameInSentence("en", "gb", "United Kingdom")).toBe("the United Kingdom");
    expect(nameInSentence("en", "jp", "Japan", { capitalize: true })).toBe("Japan");
    expect(nameInSentence("ja", "nl", "オランダ")).toBe("オランダ");
    expect(isPluralName("en", "nordics")).toBe(true);
    expect(isPluralName("ja", "nordics")).toBe(false);
  });
  it("never doubles the article on real names", () => {
    for (const id of COUNTRY_IDS) expect(nameInSentence("en", id, country("en", id)!.name)).not.toMatch(/the the/i);
  });
});

describe("client-safe country order", () => {
  it("matches COUNTRY_IDS", () => {
    expect([...COUNTRY_ORDER]).toEqual([...COUNTRY_IDS]);
  });
});

describe("theme ↔ scale links", () => {
  it("are mutual inverses", () => {
    for (const th of THEME_IDS) {
      for (const k of [...THEME_SCALES[th].meyer, ...THEME_SCALES[th].hofstede]) expect(SCALE_THEMES[k]).toContain(th);
    }
    for (const k of [...CULTURE_MAP_SCALES, ...HOFSTEDE_DIMENSIONS]) {
      for (const th of SCALE_THEMES[k]) {
        expect([...THEME_SCALES[th].meyer, ...THEME_SCALES[th].hofstede] as string[]).toContain(k);
      }
    }
    expect(Object.keys(SCALE_THEMES).sort()).toEqual([...CULTURE_MAP_SCALES, ...HOFSTEDE_DIMENSIONS].sort());
  });
});

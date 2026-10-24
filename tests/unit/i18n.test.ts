import { describe, expect, it } from "vitest";
import { langFromPath, localePath, stripLocale } from "../../src/i18n/ui.ts";

describe("localePath", () => {
  it("puts English at the base and Japanese under ja/", () => {
    expect(localePath("en", "/", "/wtfe/")).toBe("/wtfe/");
    expect(localePath("ja", "/", "/wtfe/")).toBe("/wtfe/ja/");
    expect(localePath("en", "/countries/jp/", "/wtfe/")).toBe("/wtfe/countries/jp/");
    expect(localePath("ja", "countries/jp", "/wtfe")).toBe("/wtfe/ja/countries/jp/");
  });
  it("keeps fragments untouched", () => {
    expect(localePath("en", "/countries/jp/#oss", "/wtfe/")).toBe("/wtfe/countries/jp/#oss");
  });
  it("works at the domain root", () => {
    expect(localePath("ja", "/compare/", "/")).toBe("/ja/compare/");
  });
});

describe("stripLocale / langFromPath", () => {
  it("round-trips with localePath", () => {
    for (const p of ["/", "/countries/de/", "/compare/jp-vs-de/"]) {
      for (const lang of ["en", "ja"] as const) {
        const full = localePath(lang, p, "/wtfe/");
        expect(stripLocale(full, "/wtfe/")).toBe(p);
        expect(langFromPath(full, "/wtfe/")).toBe(lang);
      }
    }
  });
  it("does not mistake a page starting with 'ja' for Japanese", () => {
    expect(langFromPath("/wtfe/japan-notes/", "/wtfe/")).toBe("en");
  });
});

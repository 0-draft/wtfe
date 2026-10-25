import { describe, expect, it } from "vitest";
import type { CountryContent } from "../../src/data/schema.ts";
import { countries } from "../../src/lib/content.ts";
import {
  buildCatalogue,
  claimsByCountry,
  filterCatalogue,
  isDated,
  normalizeUrl,
  shortHash,
  titleKey,
} from "../../src/lib/sources.ts";

describe("normalizeUrl", () => {
  it("ignores scheme, www, case of host, fragment, tracking and trailing slash", () => {
    const k = "example.com/a/b";
    for (const u of [
      "https://example.com/a/b",
      "https://www.example.com/a/b/",
      "http://EXAMPLE.com/a/b#part",
      "https://example.com/a/b?utm_source=x&fbclid=1",
    ]) {
      expect(normalizeUrl(u)).toBe(k);
    }
  });
  it("keeps meaningful query parameters and path case", () => {
    expect(normalizeUrl("https://x.org/Tool?countries=japan")).toBe("x.org/Tool?countries=japan");
    expect(normalizeUrl("https://x.org/tool?countries=japan")).not.toBe(
      normalizeUrl("https://x.org/tool?countries=india"),
    );
  });
});

describe("helpers", () => {
  it("titleKey ignores punctuation and case", () => {
    expect(titleKey("Mindli: The Culture Map study guide")).toBe(titleKey("Mindli — The Culture Map Study Guide"));
  });
  it("isDated uses the 2016 threshold and never flags unknown years", () => {
    expect(isDated(2015)).toBe(true);
    expect(isDated(2016)).toBe(false);
    expect(isDated(undefined)).toBe(false);
  });
  it("shortHash is stable", () => {
    expect(shortHash("example.com/a")).toBe(shortHash("example.com/a"));
    expect(shortHash("example.com/a")).not.toBe(shortHash("example.com/b"));
  });
});

const s = (title: string, url: string, year?: number) => ({ title, url, ...(year ? { year } : {}) });
function country(id: "jp" | "de", claims: CountryContent["themes"]["design"]): CountryContent {
  const empty = [
    {
      id: `${id}-x-1`,
      text: "filler claim",
      confidence: "medium" as const,
      sources: [s("Filler", "https://filler.org/")],
    },
  ];
  return {
    id,
    name: id,
    oneLiner: "x",
    intro: "x",
    variance: ["x"],
    themes: {
      design: claims,
      failure: empty,
      feedback: empty,
      hierarchy: empty,
      communication: empty,
      work: empty,
      oss: empty,
    },
  };
}

describe("buildCatalogue", () => {
  const jp = country("jp", [
    {
      id: "jp-design-1",
      text: "first claim",
      confidence: "strong",
      sources: [s("Report A", "https://www.a.org/r/", 2012), s("Tool — Compare", "https://t.com/c?countries=japan")],
    },
    { id: "jp-design-2", text: "second claim", confidence: "weak", sources: [s("Report A", "https://a.org/r", 2012)] },
  ]);
  const de = country("de", [
    {
      id: "de-design-1",
      text: "third claim",
      confidence: "medium",
      sources: [s("Tool: compare", "https://t.com/c?countries=germany"), s("Report B", "https://b.org/", 2024)],
    },
  ]);
  const cat = buildCatalogue([jp, de]);

  it("lists each source once and merges URL variants", () => {
    const a = cat.find((e) => e.title === "Report A")!;
    expect(a.claims.map((c) => c.id)).toEqual(["jp-design-1", "jp-design-2"]);
    expect(a.urls).toEqual(["https://www.a.org/r/", "https://a.org/r"]);
    expect(a.dated).toBe(true);
    expect(a.year).toBe(2012);
    expect(a.host).toBe("a.org");
  });
  it("groups pages of one tool sharing host, title and year", () => {
    const tool = cat.filter((e) => e.host === "t.com");
    expect(tool).toHaveLength(1);
    expect(tool[0]!.urls).toHaveLength(2);
    expect(tool[0]!.countries).toEqual(["jp", "de"]);
    expect(tool[0]!.year).toBeUndefined();
    expect(tool[0]!.dated).toBe(false);
  });
  it("records every citing claim, across themes and countries", () => {
    const filler = cat.find((e) => e.title === "Filler")!;
    expect(filler.claims).toHaveLength(12);
    expect(filler.countries).toEqual(["jp", "de"]);
  });
  it("sorts by title", () => {
    expect(cat.map((e) => e.title)).toEqual(["Filler", "Report A", "Report B", expect.stringMatching(/^Tool/)]);
  });
  it("filters by country and confidence on the same claim", () => {
    expect(filterCatalogue(cat, { country: "de" }).map((e) => e.title)).toEqual(
      ["Filler", "Report B", "Tool: compare"].map((t) => cat.find((e) => titleKey(e.title) === titleKey(t))!.title),
    );
    expect(filterCatalogue(cat, { confidence: "weak" }).map((e) => e.title)).toEqual(["Report A"]);
    expect(filterCatalogue(cat, { country: "de", confidence: "strong" })).toEqual([]);
    expect(filterCatalogue(cat, {})).toHaveLength(cat.length);
  });
  it("groups citing claims by country", () => {
    const tool = cat.find((e) => e.host === "t.com")!;
    expect(claimsByCountry(tool).map((g) => [g.country, g.claims.length])).toEqual([
      ["jp", 1],
      ["de", 1],
    ]);
  });
});

describe("buildCatalogue on the real data", () => {
  for (const lang of ["en", "ja"] as const) {
    it(`${lang}: every cited URL appears in exactly one entry and slugs are unique`, () => {
      const list = countries(lang);
      const cat = buildCatalogue(list, lang);
      const urls = new Set(
        list.flatMap((c) => Object.values(c.themes).flatMap((cl) => cl.flatMap((x) => x.sources.map((s) => s.url)))),
      );
      const listed = cat.flatMap((e) => e.urls);
      expect(new Set(listed)).toEqual(urls);
      expect(listed).toHaveLength(new Set(listed).size);
      expect(new Set(cat.map((e) => e.slug)).size).toBe(cat.length);
      expect(cat.length).toBeLessThan(urls.size + 1);
    });
  }
});

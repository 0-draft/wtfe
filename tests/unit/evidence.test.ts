import { describe, expect, it } from "vitest";
import { COUNTRY_IDS, type CountryContent, THEME_IDS } from "../../src/data/schema.ts";
import { countries } from "../../src/lib/content.ts";
import { byStrength, countConfidence, countryCounts, evidenceMap, thinCells } from "../../src/lib/evidence.ts";

const src = [{ title: "t", url: "https://example.com/" }];
const claim = (id: string, confidence: "strong" | "medium" | "weak") => ({
  id,
  text: "a claim text",
  confidence,
  sources: src,
});

function fixture(): CountryContent {
  return {
    id: "jp",
    name: "Japan",
    oneLiner: "x",
    intro: "x",
    variance: ["x"],
    themes: {
      design: [claim("jp-design-1", "weak"), claim("jp-design-2", "strong"), claim("jp-design-3", "medium")],
      failure: [claim("jp-failure-1", "weak"), claim("jp-failure-2", "weak")],
      feedback: [claim("jp-feedback-1", "medium")],
      hierarchy: [claim("jp-hierarchy-1", "strong")],
      communication: [claim("jp-communication-1", "medium")],
      work: [claim("jp-work-1", "medium")],
      oss: [claim("jp-oss-1", "strong")],
    },
  };
}

describe("countConfidence / byStrength", () => {
  it("counts each level and the total", () => {
    expect(countConfidence(fixture().themes.design)).toEqual({ strong: 1, medium: 1, weak: 1, total: 3 });
    expect(countConfidence([])).toEqual({ strong: 0, medium: 0, weak: 0, total: 0 });
  });
  it("puts well attested first and keeps data order within a level", () => {
    const sorted = byStrength([claim("a", "weak"), claim("b", "strong"), claim("c", "weak"), claim("d", "medium")]);
    expect(sorted.map((c) => c.id)).toEqual(["b", "d", "a", "c"]);
  });
});

describe("evidenceMap", () => {
  it("builds one cell per theme with sorted claims and totals", () => {
    const map = evidenceMap([fixture()]);
    expect(map.rows).toHaveLength(1);
    expect(map.rows[0]!.cells.map((c) => c.theme)).toEqual([...THEME_IDS]);
    expect(map.rows[0]!.cells[0]!.claims.map((c) => c.id)).toEqual(["jp-design-2", "jp-design-3", "jp-design-1"]);
    expect(map.counts).toEqual({ strong: 3, medium: 4, weak: 3, total: 10 });
    expect(map.themes.failure).toEqual({ strong: 0, medium: 0, weak: 2, total: 2 });
    expect(map.rows[0]!.counts).toEqual(countryCounts(fixture()));
  });
  it("finds cells that rest on thin claims alone", () => {
    expect(thinCells(evidenceMap([fixture()])).map((c) => c.theme)).toEqual(["failure"]);
  });
  it("covers all 14 rows x 7 themes of the real data, in both languages, with matching totals", () => {
    const en = evidenceMap(countries("en"));
    const ja = evidenceMap(countries("ja"));
    expect(en.rows.map((r) => r.country.id)).toEqual([...COUNTRY_IDS]);
    expect(en.rows.every((r) => r.cells.length === 7)).toBe(true);
    // Claim ids are shared across languages, so the evidence weight must be identical.
    expect(ja.counts).toEqual(en.counts);
    expect(en.counts.total).toBe(en.counts.strong + en.counts.medium + en.counts.weak);
  });
});

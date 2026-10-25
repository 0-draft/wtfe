import { describe, expect, it } from "vitest";
import { COUNTRY_IDS, type CountryMeta, CULTURE_MAP_SCALES, HOFSTEDE_DIMENSIONS } from "../../src/data/schema.ts";
import { countryMeta } from "../../src/lib/content.ts";
import {
  formatSigned,
  layoutStrip,
  noSource,
  offsetSentence,
  offsetsFrom,
  parseVantage,
  positionsText,
  regionSpan,
  scaleKind,
  spreadDomain,
  stackLevels,
} from "../../src/lib/strip.ts";
import { isStripKey, parseMemberSteps, stripItems } from "../../src/lib/strip-items.ts";

const metas = COUNTRY_IDS.map((id) => countryMeta(id)).filter((m): m is CountryMeta => Boolean(m));

describe("parseMemberSteps", () => {
  it("reads the Nordic note format", () => {
    expect(parseMemberSteps("DK -3 / SE -3 / FI -2")).toEqual([
      { code: "DK", value: -3 },
      { code: "SE", value: -3 },
      { code: "FI", value: -2 },
    ]);
  });
  it("accepts +, unicode minus, en dash, colons, commas and no spaces", () => {
    expect(parseMemberSteps("DK+1, NO: +1")).toEqual([
      { code: "DK", value: 1 },
      { code: "NO", value: 1 },
    ]);
    expect(parseMemberSteps("SE −2 · FI –1 · DK 0")).toEqual([
      { code: "SE", value: -2 },
      { code: "FI", value: -1 },
      { code: "DK", value: 0 },
    ]);
  });
  it("sorts by value, then DK SE FI NO", () => {
    expect(parseMemberSteps("NO -1 / DK -1 / SE -2").map((m) => m.code)).toEqual(["SE", "DK", "NO"]);
  });
  it("drops out-of-range steps, duplicates and codes outside the allowed list", () => {
    expect(parseMemberSteps("DK -5 / SE -2 / SE -1 / XX 1", ["DK", "SE", "FI", "NO"])).toEqual([
      { code: "SE", value: -2 },
    ]);
  });
  it("returns nothing for free text, decimals or no note", () => {
    expect(parseMemberSteps("holistic — outside the principles/applications axis")).toEqual([]);
    expect(parseMemberSteps("中〜トップダウン寄り")).toEqual([]);
    expect(parseMemberSteps("DK 1.5")).toEqual([]);
    expect(parseMemberSteps(undefined)).toEqual([]);
  });
});

describe("stripItems from the real data", () => {
  it("has one item per country in canonical order, for every scale", () => {
    for (const key of [...CULTURE_MAP_SCALES, ...HOFSTEDE_DIMENSIONS]) {
      expect(stripItems(key, metas).map((i) => i.id)).toEqual([...COUNTRY_IDS]);
    }
  });
  it("draws the Nordics as a span from member data on Meyer scales", () => {
    const nord = stripItems("leading", metas).find((i) => i.id === "nordics")!;
    expect(nord.value).toBe(-3);
    expect(nord.members.map((m) => `${m.code}${m.value}`)).toEqual(["DK-3", "SE-3", "FI-2"]);
    expect(regionSpan(nord)).toEqual({ min: -3, max: -2 });
  });
  it("draws the Nordics from four national Hofstede entries, mean as the region value", () => {
    const nord = stripItems("pdi", metas).find((i) => i.id === "nordics")!;
    expect(nord.members.map((m) => m.code).sort()).toEqual(["DK", "FI", "NO", "SE"]);
    expect(regionSpan(nord)).toEqual({ min: 18, max: 33 });
    expect(nord.value).toBe(Math.round((31 + 33 + 18 + 31) / 4));
  });
  it("single countries have no members and no span", () => {
    const jp = stripItems("evaluating", metas).find((i) => i.id === "jp")!;
    expect(jp.members).toEqual([]);
    expect(regionSpan(jp)).toBeNull();
  });
  it("lists countries with no source instead of placing them", () => {
    expect(noSource(stripItems("evaluating", metas))).toEqual(["ua"]);
    expect(noSource(stripItems("persuading", metas))).toEqual(expect.arrayContaining(["jp", "cn", "kr", "ua"]));
    expect(noSource(stripItems("ivr", metas))).toEqual(["il"]);
  });
  it("flags secondary basis", () => {
    const trusting = stripItems("trusting", metas);
    expect(trusting.filter((i) => i.secondary).map((i) => i.id)).toEqual(["kr", "il"]);
  });
});

describe("scale helpers", () => {
  it("knows the kind of every key", () => {
    expect(scaleKind("evaluating")).toBe("meyer");
    expect(scaleKind("pdi")).toBe("hofstede");
    expect(isStripKey("uai")).toBe(true);
    expect(isStripKey("nope")).toBe(false);
  });
  it("extends the Hofstede line past 100 only when needed", () => {
    const item = (value: number) => ({ id: "jp" as const, code: "JP", value, secondary: false, members: [] });
    expect(spreadDomain("hofstede", [item(95)])).toEqual({ lo: 0, hi: 100, extended: false });
    expect(spreadDomain("hofstede", [item(112)])).toEqual({ lo: 0, hi: 120, extended: true });
    expect(spreadDomain("meyer", [item(3)])).toEqual({ lo: -3, hi: 3, extended: false });
  });
});

describe("stackLevels", () => {
  it("stacks marks that share a position and keeps input order among ties", () => {
    expect(
      stackLevels([
        { x: 100, w: 20 },
        { x: 100, w: 20 },
        { x: 100, w: 20 },
      ]),
    ).toEqual([0, 1, 2]);
  });
  it("reuses the lowest free level", () => {
    expect(
      stackLevels([
        { x: 0, w: 20 },
        { x: 10, w: 20 },
        { x: 40, w: 20 },
      ]),
    ).toEqual([0, 1, 0]);
  });
  it("is independent of input order for distinct positions", () => {
    const a = stackLevels([
      { x: 0, w: 20 },
      { x: 10, w: 20 },
      { x: 40, w: 20 },
    ]);
    const b = stackLevels([
      { x: 40, w: 20 },
      { x: 0, w: 20 },
      { x: 10, w: 20 },
    ]);
    expect([b[1], b[2], b[0]]).toEqual(a);
  });
});

/** Labels on the same level never overlap; every label stays inside the figure. */
function assertNoOverlap(g: ReturnType<typeof layoutStrip>) {
  const byLevel = new Map<number, [number, number][]>();
  for (const t of g.ticks) {
    const w = t.label.length * 0.6 * 14;
    const c = t.x + t.labelDx;
    expect(c - w / 2).toBeGreaterThanOrEqual(0);
    expect(c + w / 2).toBeLessThanOrEqual(g.width);
    const list = byLevel.get(t.level) ?? [];
    for (const [l, r] of list) expect(c + w / 2 <= l || c - w / 2 >= r).toBe(true);
    list.push([c - w / 2, c + w / 2]);
    byLevel.set(t.level, list);
  }
}

describe("layoutStrip", () => {
  it("puts Meyer steps on an even 7-step grid, never between steps", () => {
    const g = layoutStrip("meyer", stripItems("evaluating", metas), { width: 360 });
    expect(g.grid.map((m) => m.value)).toEqual([-3, -2, -1, 0, 1, 2, 3]);
    const xs = new Set(g.grid.map((m) => m.x));
    for (const t of g.ticks) expect(xs.has(t.x)).toBe(true);
  });
  it("never overlaps labels at either width, on any scale", () => {
    for (const key of [...CULTURE_MAP_SCALES, ...HOFSTEDE_DIMENSIONS]) {
      for (const width of [360, 760]) assertNoOverlap(layoutStrip(scaleKind(key), stripItems(key, metas), { width }));
    }
  });
  it("leaves the region and unsourced countries out of the stacks", () => {
    const g = layoutStrip("meyer", stripItems("evaluating", metas), { width: 760 });
    expect(g.ticks.map((t) => t.id)).not.toContain("nordics");
    expect(g.ticks.map((t) => t.id)).not.toContain("ua");
    expect(g.region?.members.map((m) => m.code)).toEqual(["DK", "FI"]);
  });
  it("marks the focus country and writes its name under the line", () => {
    const g = layoutStrip("meyer", stripItems("evaluating", metas), { width: 760, focus: "jp", centreLabel: "Japan" });
    expect(g.ticks.filter((t) => t.focus).map((t) => t.id)).toEqual(["jp"]);
    expect(g.centre?.text).toBe("Japan");
  });
  it("re-centres on the vantage in from mode", () => {
    const g = layoutStrip("meyer", stripItems("evaluating", metas), { width: 760, vantage: "jp", centreLabel: "you" });
    expect(g.mode).toBe("from");
    const jp = g.ticks.find((t) => t.id === "jp")!;
    expect(jp.pos).toBe(0);
    expect(jp.x).toBeCloseTo((g.x0 + g.x1) / 2);
    expect(g.ticks.find((t) => t.id === "nl")!.pos).toBe(-6);
    expect(g.grid[0]!.value).toBe(-6);
  });
  it("falls back to spread mode when the vantage has no value", () => {
    expect(layoutStrip("meyer", stripItems("evaluating", metas), { width: 760, vantage: "ua" }).mode).toBe("spread");
  });
  it("sizes the line by member values on Hofstede", () => {
    const g = layoutStrip("hofstede", stripItems("pdi", metas), { width: 760 });
    expect(g.grid.map((m) => m.value)).toEqual([0, 25, 50, 75, 100]);
    expect(g.region!.x1).toBeLessThan(g.region!.x2);
  });
});

describe("from mode offsets", () => {
  it("gives signed differences, furthest first, with ties in canonical order", () => {
    const view = offsetsFrom(stripItems("evaluating", metas), "jp")!;
    expect(view.vantage.value).toBe(3);
    expect(view.rows[0]).toMatchObject({ id: "nl", delta: -6, distance: 6 });
    expect(view.rows[1]).toMatchObject({ id: "il", delta: -6 });
    const d = view.rows.map((r) => r.distance);
    expect([...d].sort((a, b) => b - a)).toEqual(d);
    expect(view.rows.map((r) => r.id)).not.toContain("jp");
    expect(view.noSource).toEqual(["ua"]);
  });
  it("shifts region members too", () => {
    const view = offsetsFrom(stripItems("leading", metas), "jp")!;
    const nord = view.rows.find((r) => r.id === "nordics")!;
    expect(nord.members).toEqual([
      { code: "DK", delta: -6 },
      { code: "SE", delta: -6 },
      { code: "FI", delta: -5 },
    ]);
  });
  it("returns null when the vantage has no source", () => {
    expect(offsetsFrom(stripItems("evaluating", metas), "ua")).toBeNull();
  });
  it("shows Meyer's relativity: China is direct from Japan and indirect from the Netherlands", () => {
    const items = stripItems("evaluating", metas);
    expect(offsetsFrom(items, "jp")!.rows.find((r) => r.id === "cn")!.delta).toBeLessThan(0);
    expect(offsetsFrom(items, "nl")!.rows.find((r) => r.id === "cn")!.delta).toBeGreaterThan(0);
  });
});

describe("sentences", () => {
  it("writes Meyer offsets in both languages", () => {
    expect(offsetSentence("en", "evaluating", -2, "Japan")).toBe("2 steps more direct than Japan");
    expect(offsetSentence("en", "evaluating", 1, "the Netherlands")).toBe("1 step more indirect than the Netherlands");
    expect(offsetSentence("en", "leading", 0, "Japan")).toBe("Same step as Japan");
    expect(offsetSentence("ja", "evaluating", -2, "日本")).toBe("日本より否定的フィードバックが直接的（2 段階）");
    expect(offsetSentence("ja", "leading", 0, "日本")).toBe("日本と同じ段階");
  });
  it("writes Hofstede offsets in points", () => {
    expect(offsetSentence("en", "pdi", 18, "Japan")).toBe("18 points higher than Japan");
    expect(offsetSentence("en", "pdi", -1, "Japan")).toBe("1 point lower than Japan");
    expect(offsetSentence("ja", "uai", -40, "日本")).toBe("日本より 40 ポイント低い");
    expect(offsetSentence("ja", "uai", 0, "日本")).toBe("日本と同じスコア");
  });
  it("formats signed steps with a typographic minus", () => {
    expect(formatSigned(-3, "en")).toBe("−3");
    expect(formatSigned(2, "ja")).toBe("+2");
    expect(formatSigned(0, "en")).toBe("0");
  });
  it("lists positions lowest first, with region members", () => {
    const text = positionsText("meyer", stripItems("leading", metas), "en");
    expect(text.startsWith("NORD −3 (DK −3, SE −3, FI −2)")).toBe(true);
    expect(text).toContain("JP +3");
    expect(text).not.toContain("UA");
  });
});

describe("parseVantage", () => {
  it("accepts ids and display codes", () => {
    expect(parseVantage("jp")).toBe("jp");
    expect(parseVantage("UK")).toBe("gb");
    expect(parseVantage("nord")).toBe("nordics");
    expect(parseVantage("xx")).toBeUndefined();
    expect(parseVantage(null)).toBeUndefined();
  });
});

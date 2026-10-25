import { describe, expect, it } from "vitest";
import type { CountryMeta } from "../../src/data/schema.ts";
import {
  allPairs,
  biggestGaps,
  cultureMapDeltas,
  hofstedeDeltas,
  hofstedeMembers,
  hofstedeProfile,
  mirror,
  pairSlug,
  parsePairSlug,
} from "../../src/lib/compare.ts";

const src = { title: "t", url: "https://example.com/" };
const pos = (step: number | null) => ({ step, basis: step === null ? null : ("primary" as const) });
const map = (steps: (number | null)[]) =>
  Object.fromEntries(
    ["communicating", "evaluating", "persuading", "leading", "deciding", "trusting", "disagreeing", "scheduling"].map(
      (k, i) => [k, pos(steps[i] ?? null)],
    ),
  ) as CountryMeta["cultureMap"];
const scores = (v: (number | null)[]) => ({ pdi: v[0]!, idv: v[1]!, mas: v[2]!, uai: v[3]!, lto: v[4]!, ivr: v[5]! });

const jp: CountryMeta = {
  id: "jp",
  iso: ["JP"],
  hofstede: [{ country: "Japan", scores: scores([54, 62, 95, 92, 100, 42]), source: src }],
  cultureMap: map([3, 3, null, 3, -3, 1, 3, -2]),
};
const de: CountryMeta = {
  id: "de",
  iso: ["DE"],
  hofstede: [{ country: "Germany", scores: scores([35, 79, 66, 65, 57, 40]), source: src }],
  cultureMap: map([-2, -2, -1, 0, -1, -2, -2, -3]),
};
const nordics: CountryMeta = {
  id: "nordics",
  iso: ["SE", "DK"],
  hofstede: [
    { country: "Sweden", scores: scores([31, 87, 5, 29, 52, 78]), source: src },
    { country: "Denmark", scores: scores([18, 89, 16, 23, 59, null]), source: src },
  ],
  cultureMap: map([]),
};

describe("pairs", () => {
  it("lists every ordered pair once", () => {
    const pairs = allPairs();
    expect(pairs).toHaveLength(14 * 13);
    expect(new Set(pairs.map(pairSlug)).size).toBe(pairs.length);
    expect(pairs[0]).toEqual(["jp", "kr"]);
    expect(pairs.map(pairSlug)).toContain("de-vs-jp");
  });
  it("parses slugs of two distinct known ids", () => {
    expect(parsePairSlug("jp-vs-de")).toEqual(["jp", "de"]);
    expect(parsePairSlug("de-vs-jp")).toEqual(["de", "jp"]);
    expect(parsePairSlug("jp-vs-jp")).toBeUndefined();
    expect(parsePairSlug("xx-vs-jp")).toBeUndefined();
    expect(parsePairSlug("jp-de")).toBeUndefined();
  });
  it("mirrors a pair", () => {
    expect(mirror(["jp", "de"])).toEqual(["de", "jp"]);
  });
});

describe("hofstede", () => {
  it("averages a region and skips nulls", () => {
    const p = hofstedeProfile(nordics);
    expect(p.aggregated).toBe(true);
    expect(p.scores.pdi).toBe(25); // (31 + 18) / 2 = 24.5 → 25
    expect(p.scores.ivr).toBe(78);
  });
  it("lists the members behind each averaged dimension", () => {
    const m = hofstedeMembers(nordics);
    expect(m.pdi).toEqual([
      { country: "Sweden", score: 31 },
      { country: "Denmark", score: 18 },
    ]);
    expect(m.ivr).toEqual([{ country: "Sweden", score: 78 }]);
    expect(hofstedeMembers(jp).mas).toEqual([{ country: "Japan", score: 95 }]);
  });
  it("computes b - a per dimension", () => {
    const d = hofstedeDeltas(jp, de);
    expect(d.find((r) => r.key === "mas")?.delta).toBe(-29);
    expect(d.find((r) => r.key === "lto")?.delta).toBe(-43);
  });
});

describe("culture map", () => {
  it("keeps unknown positions as null deltas", () => {
    const d = cultureMapDeltas(jp, de);
    expect(d.find((r) => r.key === "persuading")?.delta).toBeNull();
    expect(d.find((r) => r.key === "communicating")?.delta).toBe(-5);
  });
  it("ranks the biggest gaps and drops unknowns and ties at zero", () => {
    const top = biggestGaps(cultureMapDeltas(jp, de), 3).map((r) => r.key);
    expect(top).toEqual(["communicating", "evaluating", "disagreeing"]);
    expect(biggestGaps(cultureMapDeltas(jp, nordics))).toEqual([]);
  });
});

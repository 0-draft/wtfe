import { describe, expect, it } from "vitest";
import { COUNTRY_IDS, type CountryId, type CountryMeta } from "../../src/data/schema.ts";
import type { Lang } from "../../src/i18n/ui.ts";
import { allPairs } from "../../src/lib/compare.ts";
import {
  groupLines,
  hofstedeLines,
  memberBreakdown,
  meyerLines,
  noun,
  positionsText,
  regionNote,
  type Side,
  signedStep,
  stepsLabel,
} from "../../src/lib/compare-text.ts";
import { country, countryMeta } from "../../src/lib/content.ts";

const src = { title: "t", url: "https://example.com/" };
const pos = (step: number | null, note?: string) => ({
  step,
  basis: step === null ? null : ("primary" as const),
  ...(note ? { note } : {}),
});
const KEYS = [
  "communicating",
  "evaluating",
  "persuading",
  "leading",
  "deciding",
  "trusting",
  "disagreeing",
  "scheduling",
];
const map = (steps: (number | null)[], notes: Record<string, string> = {}) =>
  Object.fromEntries(KEYS.map((k, i) => [k, pos(steps[i] ?? null, notes[k])])) as CountryMeta["cultureMap"];
const scores = (v: (number | null)[]) => ({ pdi: v[0]!, idv: v[1]!, mas: v[2]!, uai: v[3]!, lto: v[4]!, ivr: v[5]! });

const jpMeta: CountryMeta = {
  id: "jp",
  iso: ["JP"],
  hofstede: [{ country: "Japan", scores: scores([54, 62, 95, 92, 100, 42]), source: src }],
  cultureMap: map([3, 3, null, 3, -3, 1, 3, -2], { persuading: "holistic — outside the principles/applications axis" }),
};
const deMeta: CountryMeta = {
  id: "de",
  iso: ["DE"],
  hofstede: [{ country: "Germany", scores: scores([35, 79, 66, 65, 57, 40]), source: src }],
  cultureMap: map([-2, -2, -1, 0, -1, -2, -2, -3]),
};
const nlMeta: CountryMeta = {
  id: "nl",
  iso: ["NL"],
  hofstede: [{ country: "Netherlands", scores: scores([38, 100, 14, 53, 67, 68]), source: src }],
  cultureMap: map([-2, -3, 1, -3, -2, -2, -2, -2]),
};
const nordicsMeta: CountryMeta = {
  id: "nordics",
  iso: ["SE", "FI", "DK", "NO"],
  hofstede: [
    { country: "Sweden", scores: scores([31, 87, 5, 29, 52, 78]), source: src },
    { country: "Finland", scores: scores([33, 75, 26, 59, 63, 57]), source: src },
    { country: "Denmark", scores: scores([18, 89, 16, 23, 59, 70]), source: src },
    { country: "Norway", scores: scores([31, 81, 8, 50, 55, 55]), source: src },
  ],
  cultureMap: map([-2, -1, 1, -3, -2, -2, -1, -2]),
};
const uaMeta: CountryMeta = {
  id: "ua",
  iso: ["UA"],
  hofstede: [{ country: "Ukraine", scores: scores([92, 55, 27, 95, 51, 14]), source: src }],
  cultureMap: map([]),
};

const NAMES: Record<Lang, Partial<Record<CountryId, string>>> = {
  en: { jp: "Japan", de: "Germany", nl: "Netherlands", nordics: "The Nordics", ua: "Ukraine" },
  ja: { jp: "日本", de: "ドイツ", nl: "オランダ", nordics: "北欧", ua: "ウクライナ" },
};
const METAS = { jp: jpMeta, de: deMeta, nl: nlMeta, nordics: nordicsMeta, ua: uaMeta } as const;
const side = (lang: Lang, id: keyof typeof METAS): Side => ({
  id,
  meta: METAS[id],
  noun: noun(lang, id, NAMES[lang][id]!),
});

describe("noun", () => {
  it("adds the article where English needs it and keeps verb agreement", () => {
    expect(noun("en", "nl", "Netherlands")).toEqual({
      subject: "The Netherlands",
      object: "the Netherlands",
      plural: false,
    });
    expect(noun("en", "nordics", "The Nordics")).toEqual({
      subject: "The Nordics",
      object: "the Nordics",
      plural: true,
    });
    expect(noun("en", "jp", "Japan")).toEqual({ subject: "Japan", object: "Japan", plural: false });
    expect(noun("ja", "nl", "オランダ")).toEqual({ subject: "オランダ", object: "オランダ", plural: false });
  });
});

describe("meyer sentences", () => {
  it("says how B differs from the vantage A, in both languages", () => {
    const en = meyerLines("en", side("en", "jp"), side("en", "de"));
    const ja = meyerLines("ja", side("ja", "jp"), side("ja", "de"));
    expect(en.find((l) => l.key === "evaluating")?.sentence).toBe(
      "Germany gives negative feedback more directly than Japan (5 steps)",
    );
    expect(ja.find((l) => l.key === "evaluating")?.sentence).toBe(
      "ドイツは日本より否定的なフィードバックを直接的に伝える（5 段階）",
    );
    expect(en.find((l) => l.key === "deciding")?.sentence).toBe(
      "Germany leaves decisions to the person in charge more than Japan (2 steps)",
    );
  });
  it("flips direction for the mirror pair", () => {
    const en = meyerLines("en", side("en", "de"), side("en", "jp"));
    expect(en.find((l) => l.key === "evaluating")?.sentence).toBe(
      "Japan gives negative feedback more indirectly than Germany (5 steps)",
    );
  });
  it("uses the singular for one step and agrees the verb with a plural region", () => {
    const en = meyerLines("en", side("en", "nl"), side("en", "nordics"));
    expect(en.find((l) => l.key === "evaluating")?.sentence).toBe(
      "The Nordics give negative feedback more indirectly than the Netherlands (2 steps)",
    );
    expect(en.find((l) => l.key === "disagreeing")?.sentence).toBe(
      "The Nordics avoid open disagreement more than the Netherlands (1 step)",
    );
    expect(stepsLabel("en", 1)).toBe("1 step");
    expect(stepsLabel("ja", 1)).toBe("1 段階");
  });
  it("describes a tie without a step count", () => {
    const en = meyerLines("en", side("en", "nl"), side("en", "de"));
    expect(en.find((l) => l.key === "communicating")?.sentence).toBe(
      "The Netherlands and Germany sit on the same step",
    );
    const ja = meyerLines("ja", side("ja", "nl"), side("ja", "de"));
    expect(ja.find((l) => l.key === "communicating")?.sentence).toBe("オランダとドイツは同じ段階にある");
  });
  it("tells 'outside the axis' apart from 'no source'", () => {
    const en = meyerLines("en", side("en", "jp"), side("en", "ua"));
    expect(en.find((l) => l.key === "persuading")?.sentence).toBe(
      "Meyer places Japan outside this scale, as holistic thinking; no source places Ukraine on this scale",
    );
    expect(en.find((l) => l.key === "leading")?.sentence).toBe("No source places Ukraine on this scale");
    const ja = meyerLines("ja", side("ja", "de"), side("ja", "jp"));
    expect(ja.find((l) => l.key === "persuading")?.sentence).toBe(
      "Meyer は日本を全体論的な思考としてこの尺度の外に置いている",
    );
  });
});

describe("grouping", () => {
  it("sorts by gap, largest first, and splits close and unknown rows", () => {
    const g = groupLines(meyerLines("en", side("en", "jp"), side("en", "de")));
    expect(g.different.map((l) => l.gap)).toEqual([5, 5, 5, 3, 3, 2, 1]);
    expect(g.different.map((l) => l.key).slice(0, 2)).toEqual(["communicating", "evaluating"]);
    expect(g.close).toEqual([]);
    expect(g.none.map((l) => l.key)).toEqual(["persuading"]);
  });
  it("puts gap 0 under 'close'", () => {
    const g = groupLines(meyerLines("en", side("en", "nl"), side("en", "de")));
    expect(g.close.map((l) => l.key)).toContain("communicating");
    expect(g.close.every((l) => l.delta === 0)).toBe(true);
  });
  it("sends every scale to 'none' when one side has no Meyer data", () => {
    const g = groupLines(meyerLines("ja", side("ja", "ua"), side("ja", "jp")));
    expect(g.none).toHaveLength(8);
    expect(g.different).toEqual([]);
  });
});

describe("hofstede sentences", () => {
  it("names the dimension and both scores, never a 'more X culture'", () => {
    const en = hofstedeLines("en", side("en", "jp"), side("en", "de"));
    expect(en[0]?.key).toBe("lto");
    expect(en.find((l) => l.key === "pdi")?.sentence).toBe(
      "Germany scores 19 points lower than Japan on power distance (35 against 54)",
    );
    const ja = hofstedeLines("ja", side("ja", "jp"), side("ja", "de"));
    expect(ja.find((l) => l.key === "pdi")?.sentence).toBe(
      "権力格差のスコアはドイツ 35、日本 54 で、ドイツが 19 ポイント低い",
    );
    for (const l of [...en, ...ja]) expect(l.sentence).not.toMatch(/culture|文化/);
  });
  it("handles ties and plural regions", () => {
    const en = hofstedeLines("en", side("en", "de"), side("en", "nordics"));
    expect(en.find((l) => l.key === "pdi")?.sentence).toBe(
      "The Nordics score 7 points lower than Germany on power distance (28 against 35)",
    );
    const tie = { ...deMeta, hofstede: [{ ...deMeta.hofstede[0]!, scores: scores([54, 1, 1, 1, 1, 1]) }] };
    const t = hofstedeLines("ja", side("ja", "jp"), { ...side("ja", "de"), meta: tie });
    expect(t.find((l) => l.key === "pdi")?.sentence).toBe("権力格差のスコアはドイツも日本も 54");
  });
  it("notes when the Nordics are an average of four countries", () => {
    expect(regionNote("en", side("en", "nordics"))).toBe(
      "The Nordics are not one country: their scores are the average of four (Sweden, Finland, Denmark and Norway).",
    );
    expect(regionNote("ja", side("ja", "nordics"))).toBe(
      "北欧は 1 つの国ではありません。スコアはスウェーデン、フィンランド、デンマーク、ノルウェーの 4 か国の平均です。",
    );
    expect(regionNote("en", side("en", "jp"))).toBeNull();
    expect(memberBreakdown("en", side("en", "nordics"), "pdi")).toBe(
      "The Nordics: average of Sweden 31, Finland 33, Denmark 18, Norway 31",
    );
    expect(memberBreakdown("ja", side("ja", "jp"), "pdi")).toBeNull();
  });
  it("reports a missing score", () => {
    const il = {
      ...deMeta,
      id: "il" as const,
      hofstede: [{ country: "Israel", scores: scores([13, 56, 47, 81, 47, null]), source: src }],
    };
    const s: Side = { id: "il", meta: il, noun: noun("en", "il", "Israel") };
    const en = hofstedeLines("en", side("en", "jp"), s);
    expect(en.at(-1)).toMatchObject({ key: "ivr", group: "none", sentence: "No indulgence score for Israel" });
  });
});

describe("real data", () => {
  it("writes a sentence for every scale of all 182 pairs in both languages", () => {
    for (const lang of ["en", "ja"] as const) {
      const sides = Object.fromEntries(
        COUNTRY_IDS.map((id) => [id, { id, meta: countryMeta(id)!, noun: noun(lang, id, country(lang, id)!.name) }]),
      ) as Record<CountryId, Side>;
      for (const [a, b] of allPairs()) {
        const lines = [...meyerLines(lang, sides[a], sides[b]), ...hofstedeLines(lang, sides[a], sides[b])];
        expect(lines).toHaveLength(14);
        for (const l of lines) {
          expect(l.sentence).not.toMatch(/undefined|null|NaN/);
          expect(l.sentence.length).toBeGreaterThan(10);
        }
      }
    }
  });
});

describe("text equivalent", () => {
  it("lists both positions and the poles", () => {
    const row = { key: "evaluating", a: 3, b: -2, delta: -5 };
    expect(
      positionsText("en", "meyer", row, side("en", "jp"), side("en", "de"), { left: "Direct", right: "Indirect" }),
    ).toBe("Japan +3, Germany −2, on a line from −3 (Direct) to +3 (Indirect).");
    expect(
      positionsText("ja", "hofstede", { key: "pdi", a: 54, b: null, delta: null }, side("ja", "jp"), side("ja", "ua"), {
        left: "小さい",
        right: "大きい",
      }),
    ).toBe("日本 54、ウクライナ 出典なし（0＝小さい、100＝大きい）。");
    expect(signedStep(0)).toBe("0");
  });
});

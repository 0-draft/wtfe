import { describe, expect, it } from "vitest";
import { readings } from "../../src/i18n/browse.ts";
import { countries } from "../../src/lib/content.ts";
import { groupByHead, indexHead, sortCountries } from "../../src/lib/indexes.ts";

describe("countries index order", () => {
  it("sorts English alphabetically, ignoring a leading 'The'", () => {
    const names = sortCountries("en", countries("en"), readings).map((c) => c.name);
    expect(names).toEqual([
      "Brazil",
      "China",
      "France",
      "Germany",
      "India",
      "Israel",
      "Japan",
      "Netherlands",
      "The Nordics",
      "Poland",
      "South Korea",
      "Ukraine",
      "United Kingdom",
      "United States",
    ]);
  });
  it("sorts Japanese in 五十音 order by reading", () => {
    const names = sortCountries("ja", countries("ja"), readings).map((c) => c.name);
    expect(names).toEqual([
      "アメリカ",
      "イギリス",
      "イスラエル",
      "インド",
      "ウクライナ",
      "オランダ",
      "韓国",
      "中国",
      "ドイツ",
      "日本",
      "ブラジル",
      "フランス",
      // 長音は直前の母音として読む (ぽおらんど) ので、ほくおう より前に来る。
      "ポーランド",
      "北欧",
    ]);
  });
  it("groups under letters and kana rows", () => {
    expect(indexHead("en", "The Nordics")).toBe("N");
    expect(indexHead("ja", "ドイツ", "どいつ")).toBe("た");
    expect(indexHead("ja", "ポーランド", "ぽーらんど")).toBe("は");
    expect(groupByHead("ja", countries("ja"), readings).map((g) => g.head)).toEqual(["あ", "か", "た", "な", "は"]);
    const en = groupByHead("en", countries("en"), readings);
    expect(en.flatMap((g) => g.items)).toHaveLength(14);
  });
});

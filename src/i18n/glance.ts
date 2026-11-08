import type { Lang } from "./ui.ts";

/** UI strings for the "at a glance" panel on country pages (Fingerprint + theme evidence overview). */
const en = {
  "glance.title": "At a glance",
  "glance.lead":
    "Grey dots are the other countries and regions. Positions are relative to each other, not traits of people. Each row opens its scale.",
  "glance.meyer": "Culture Map",
  "glance.hofstede": "Hofstede",
  "glance.themes": "What the claims cover",
  "glance.themesLead": "One square per claim: filled = well attested, half = attested, outline = thin.",
  "glance.noSource": "no source",
  "glance.rowLabel": (scale: string, name: string, pos: string) => `${scale}: ${name} at ${pos}`,
  "glance.taras": "Country averages. About 80% of variation in values is within countries (Taras et al. 2016).",
  "glance.about": "About this page",
};

const ja: typeof en = {
  "glance.title": "ひと目で",
  "glance.lead": "灰色の点はほかの国と地域。位置は互いの相対関係で、人の性質ではありません。行を押すと尺度のページへ。",
  "glance.meyer": "Culture Map",
  "glance.hofstede": "Hofstede",
  "glance.themes": "記述の量と裏付け",
  "glance.themesLead": "記述 1 件につき四角 1 つ。塗り＝裏付け十分、半分＝裏付けあり、枠だけ＝裏付け薄。",
  "glance.noSource": "出典なし",
  "glance.rowLabel": (scale: string, name: string, pos: string) => `${scale}：${name}は ${pos}`,
  "glance.taras": "国の平均値です。価値観のばらつきの約 8 割は国の内側にあります（Taras ほか 2016）。",
  "glance.about": "このページについて",
};

export const glance: Record<Lang, typeof en> = { en, ja };

/** Shorter pole words for compact figures, where the full pole would wrap. Falls back to the scale's own poles. */
export const shortPoles: Record<Lang, Partial<Record<string, [string, string]>>> = {
  en: { evaluating: ["Direct", "Indirect"] },
  ja: { evaluating: ["直接的", "間接的"] },
};

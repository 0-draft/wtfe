import type { Lang } from "./ui.ts";

/**
 * UI strings for the compact figures: the country page's "at a glance" panel (Fingerprint + claims by theme),
 * the scale grid (home and theme pages) and the confidence pip legend.
 */
const en = {
  "glance.title": "At a glance",
  "glance.lead":
    "Gray dots are the other countries and regions. Positions are relative to one another and are not traits of people. Each row opens its scale.",
  "glance.meyer": "Culture Map",
  "glance.hofstede": "Hofstede",
  "glance.themes": "Claims by theme",
  "glance.pips": "One square per claim: filled is well attested, half-filled is attested, outline only is thin.",
  "glance.noSource": "no source",
  "glance.secondary": "† Placed from reviews and summaries, not from Meyer's own chart.",
  "glance.rowLabel": (scale: string, left: string, right: string, name: string, pos: string) =>
    `${scale} (${left} to ${right}): ${name} ${pos}`,
  "glance.rowNone": (scale: string, name: string) => `${scale}: no source places ${name}`,
  "glance.taras": "Country averages. About 80% of variation in values is within countries (Taras et al. 2016).",
  "glance.about": "About this page",
  "grid.homeTitle": "Where each country sits on eight scales",
  "grid.claims": "Claims",
  "grid.meyer":
    "Culture Map cells are Erin Meyer's seven-step line, with the scale's two ends at left and right. A hollow dot is placed from reviews, not her own chart; a bar spans a region's members. Positions are approximate and relative.",
  "grid.hofstede": (max: number) =>
    `Hofstede cells run from 0 to ${max} and are country averages; most variation in values is within countries.`,
  "grid.cell": (country: string, scale: string, pos: string) => `${country}, ${scale}: ${pos}`,
};

const ja: typeof en = {
  "glance.title": "概観",
  "glance.lead":
    "灰色の点はほかの国と地域です。位置は互いの相対的な関係で、人の性質ではありません。行を押すと、その尺度のページに移ります。",
  "glance.meyer": "Culture Map",
  "glance.hofstede": "Hofstede",
  "glance.themes": "テーマ別の記述",
  "glance.pips": "記述 1 件につき四角 1 つです。塗りつぶしは裏付け十分、半分は裏付けあり、枠だけは裏付け薄です。",
  "glance.noSource": "出典なし",
  "glance.secondary": "† は Meyer 本人の図ではなく、書評や要約をもとに置いた位置です。",
  "glance.rowLabel": (scale: string, left: string, right: string, name: string, pos: string) =>
    `${scale}（${left}〜${right}）：${name}は ${pos}`,
  "glance.rowNone": (scale: string, name: string) => `${scale}：${name}の位置を示す出典なし`,
  "glance.taras": "国の平均値です。価値観のばらつきの約 8 割は国の内側にあります（Taras ほか 2016）。",
  "glance.about": "このページについて",
  "grid.homeTitle": "8 つの尺度での位置",
  "grid.claims": "記述",
  "grid.meyer":
    "Culture Map のマスは Erin Meyer の 7 段階の線で、左右の端が尺度の両極です。白抜きの点は Meyer 本人の図ではなく書評などから置いた位置、横棒は地域内の国の幅です。位置はおおよそで、相対的なものです。",
  "grid.hofstede": (max: number) =>
    `Hofstede のマスは 0〜${max} の国の平均値です。価値観のばらつきの大半は国の内側にあります。`,
  "grid.cell": (country: string, scale: string, pos: string) => `${country}、${scale}：${pos}`,
};

export const glance: Record<Lang, typeof en> = { en, ja };

/** Shorter pole words for compact figures, where the full pole would wrap. Falls back to the scale's own poles. */
export const shortPoles: Record<Lang, Partial<Record<string, [string, string]>>> = {
  en: { evaluating: ["Direct", "Indirect"] },
  ja: { evaluating: ["直接的", "間接的"] },
};

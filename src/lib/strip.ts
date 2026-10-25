/**
 * Vantage strip (research/design.md, signature figure A): pure layout and text for one scale.
 * Meyer scales sit on a coarse 7-step grid (−3..+3), Hofstede dimensions on a 0-100 line. Everything here is
 * pixel geometry and strings; the Astro and React components only draw what this returns.
 */
// Client-safe: imported by the VantageStrip island, so no value imports from schema.ts (zod) or content.
import type { CountryId, CultureMapScale, HofstedeDimension } from "../data/schema.ts";
import { meyerComparatives, stripText } from "../i18n/strip.ts";
import type { Lang } from "../i18n/ui.ts";
import { DISPLAY_CODE } from "./codes.ts";
import { nameInSentence } from "./names.ts";

/** Country ids in canonical order (same order as COUNTRY_IDS), without importing zod into client code. */
export const COUNTRY_ORDER = Object.keys(DISPLAY_CODE) as readonly CountryId[];
const IDS = COUNTRY_ORDER;
const order = (id: CountryId) => IDS.indexOf(id);

export type StripKind = "meyer" | "hofstede";
export type StripKey = CultureMapScale | HofstedeDimension;

export interface StripMember {
  /** ISO code of the member country (DK, SE ...). */
  code: string;
  value: number;
}

/** One country or region on one scale. Plain data, so it can cross into a React island as a prop. */
export interface StripItem {
  id: CountryId;
  code: string;
  /** Step (Meyer) or score (Hofstede); for a region, the region's own step or the mean of its members. */
  value: number | null;
  /** Meyer `secondary` basis: placed from reviews or summaries, drawn hollow with †. */
  secondary: boolean;
  /** Member positions for a region; empty for a single country (or when the region's note cannot be parsed). */
  members: StripMember[];
}

export const MEYER_RANGE = 3;
export const HOFSTEDE_MAX = 100;

export function scaleKind(key: StripKey): StripKind {
  return Object.hasOwn(meyerComparatives.en, key) ? "meyer" : "hofstede";
}

/** Countries that no source places on this scale; listed in words under the strip, never drawn. */
export function noSource(items: readonly StripItem[]): CountryId[] {
  return items.filter((i) => i.value === null).map((i) => i.id);
}

/** Lowest and highest member value of a region, or null for a single country. */
export function regionSpan(item: StripItem): { min: number; max: number } | null {
  if (item.members.length === 0) return null;
  const vals = item.members.map((m) => m.value);
  return { min: Math.min(...vals), max: Math.max(...vals) };
}

/** Spread-mode domain. Hofstede extends past 100 (in steps of 10) when a score does. */
export function spreadDomain(
  kind: StripKind,
  items: readonly StripItem[],
): { lo: number; hi: number; extended: boolean } {
  if (kind === "meyer") return { lo: -MEYER_RANGE, hi: MEYER_RANGE, extended: false };
  const vals = items.flatMap((i) => [...(i.value === null ? [] : [i.value]), ...i.members.map((m) => m.value)]);
  const top = Math.max(HOFSTEDE_MAX, ...vals);
  const hi = top > HOFSTEDE_MAX ? Math.ceil(top / 10) * 10 : HOFSTEDE_MAX;
  return { lo: 0, hi, extended: hi > HOFSTEDE_MAX };
}

// ---------- label stacking ----------

export interface Mark {
  /** Where the label wants to be centred. */
  x: number;
  /** Label width in px. */
  w: number;
}

/**
 * Stack labels so none overlap: each label takes the lowest level whose last label ends before it starts.
 * Marks are processed left to right; ties keep input order, so the result is stable for a given input.
 * Returns the level of each mark in input order.
 */
export function stackLevels(marks: readonly Mark[], gap = 6): number[] {
  const order = marks.map((m, i) => ({ ...m, i })).sort((a, b) => a.x - b.x || a.i - b.i);
  const rightEdge: number[] = [];
  const levels = new Array<number>(marks.length).fill(0);
  for (const m of order) {
    const left = m.x - m.w / 2;
    let level = rightEdge.findIndex((r) => r + gap <= left);
    if (level === -1) level = rightEdge.length;
    rightEdge[level] = m.x + m.w / 2;
    levels[m.i] = level;
  }
  return levels;
}

/** Rough advance width of a label: 0.6em for Latin (Plex Mono and Sans are close), 1em for CJK. */
export function textWidth(s: string, px: number): number {
  let em = 0;
  for (const ch of s) em += (ch.codePointAt(0) ?? 0) >= 0x2e80 ? 1 : 0.6;
  return em * px;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

// ---------- geometry ----------

export const GEOM = {
  pad: 28,
  top: 6,
  /** Height of one stacked unit: code label plus tick. */
  unit: 30,
  labelPx: 14,
  namePx: 15,
  /** Height of a member code row in the region lane. */
  memberRow: 20,
} as const;

export interface TickGeom {
  id: CountryId;
  code: string;
  /** Code plus "†" for a secondary basis. */
  label: string;
  value: number;
  /** Position used on the line: the value in spread mode, value − vantage in from mode. */
  pos: number;
  x: number;
  /** Label centre relative to `x` (non-zero only when clamped at an end of the line). */
  labelDx: number;
  level: number;
  focus: boolean;
  secondary: boolean;
}

export interface RegionGeom {
  id: CountryId;
  code: string;
  label: string;
  focus: boolean;
  secondary: boolean;
  x1: number;
  x2: number;
  labelX: number;
  labelY: number;
  lineY: number;
  members: { code: string; value: number; pos: number; x: number; labelDx: number; level: number }[];
  memberLabelY: number;
}

export interface StripGeometry {
  width: number;
  height: number;
  x0: number;
  x1: number;
  axisY: number;
  gridLabelY: number;
  grid: { x: number; value: number }[];
  ticks: TickGeom[];
  region: RegionGeom | null;
  /** Name under the focus tick (spread) or "you (…)" under the centre (from mode). */
  centre: { x: number; y: number; text: string } | null;
  mode: "spread" | "from";
  extended: boolean;
  hi: number;
}

export interface LayoutOptions {
  width: number;
  focus?: CountryId | undefined;
  /** Name drawn under the focus tick, or under the centre in from mode. */
  centreLabel?: string | undefined;
  /** From mode: re-centre on this country. Ignored when it has no value on this scale. */
  vantage?: CountryId | undefined;
}

export function vantageValue(items: readonly StripItem[], vantage: CountryId | undefined): number | null {
  if (!vantage) return null;
  return items.find((i) => i.id === vantage)?.value ?? null;
}

function gridValues(kind: StripKind, mode: "spread" | "from", hi: number, width: number): number[] {
  const narrow = width < 520;
  if (kind === "meyer") {
    if (mode === "spread") return [-3, -2, -1, 0, 1, 2, 3];
    const step = narrow ? 2 : 1;
    return range(-2 * MEYER_RANGE, 2 * MEYER_RANGE, step);
  }
  if (mode === "spread") {
    const base = range(0, HOFSTEDE_MAX, narrow ? 50 : 25);
    return hi > HOFSTEDE_MAX ? [...base, hi] : base;
  }
  return range(-hi, hi, narrow ? hi : hi / 2);
}

function range(lo: number, hi: number, step: number): number[] {
  const out: number[] = [];
  for (let v = lo; v <= hi + 1e-9; v += step) out.push(Math.round(v * 1000) / 1000);
  return out;
}

export function layoutStrip(kind: StripKind, items: readonly StripItem[], opts: LayoutOptions): StripGeometry {
  const { width } = opts;
  const v = vantageValue(items, opts.vantage);
  const mode = v === null ? "spread" : "from";
  const dom = spreadDomain(kind, items);
  const [lo, hi] =
    mode === "spread"
      ? [dom.lo, dom.hi]
      : kind === "meyer"
        ? [-2 * MEYER_RANGE, 2 * MEYER_RANGE]
        : [-(dom.hi - dom.lo), dom.hi - dom.lo];
  const x0 = GEOM.pad;
  const x1 = width - GEOM.pad;
  const sx = (p: number) => x0 + ((p - lo) / (hi - lo)) * (x1 - x0);
  const shift = (val: number) => (mode === "spread" ? val : val - v!);
  const centreId = mode === "from" ? opts.vantage : opts.focus;

  // Single countries stack above the line.
  const placed = items.filter((i) => i.value !== null && i.members.length === 0);
  const raw = placed.map((i) => {
    const pos = shift(i.value!);
    const x = sx(pos);
    const label = i.secondary ? `${i.code}†` : i.code;
    const w = textWidth(label, GEOM.labelPx) + (i.id === centreId ? 2 : 0);
    const labelX = clamp(x, w / 2 + 2, width - w / 2 - 2);
    return { item: i, pos, x, label, w, labelX };
  });
  const levels = stackLevels(raw.map((r) => ({ x: r.labelX, w: r.w })));
  const maxLevel = levels.length ? Math.max(...levels) : 0;
  const axisY = GEOM.top + (maxLevel + 1) * GEOM.unit + 2;
  const ticks: TickGeom[] = raw.map((r, k) => ({
    id: r.item.id,
    code: r.item.code,
    label: r.label,
    value: r.item.value!,
    pos: r.pos,
    x: r.x,
    labelDx: r.labelX - r.x,
    level: levels[k]!,
    focus: r.item.id === centreId,
    secondary: r.item.secondary,
  }));

  const gridLabelY = axisY + 26;
  let y = gridLabelY + 8;
  let centre: StripGeometry["centre"] = null;
  if (centreId && opts.centreLabel) {
    const text = opts.centreLabel;
    const item = items.find((i) => i.id === centreId);
    if (item && item.value !== null) {
      const w = textWidth(text, GEOM.namePx);
      const cx = clamp(sx(shift(item.value)), w / 2 + 2, width - w / 2 - 2);
      centre = { x: cx, y: y + 18, text };
      y += 26;
    }
  }

  // A region (the Nordics) gets its own lane under the line: a span over its members, each member labelled.
  let region: RegionGeom | null = null;
  const reg = items.find((i) => i.value !== null && i.members.length > 0);
  if (reg) {
    const top = y + 10;
    const members = reg.members.map((m) => {
      const pos = shift(m.value);
      const x = sx(pos);
      const w = textWidth(m.code, GEOM.labelPx);
      const labelX = clamp(x, w / 2 + 2, width - w / 2 - 2);
      return { code: m.code, value: m.value, pos, x, w, labelX };
    });
    const mLevels = stackLevels(members.map((m) => ({ x: m.labelX, w: m.w })));
    const xs = members.map((m) => m.x);
    const [rx1, rx2] = [Math.min(...xs), Math.max(...xs)];
    const label = reg.secondary ? `${reg.code}†` : reg.code;
    const lw = textWidth(label, GEOM.labelPx);
    region = {
      id: reg.id,
      code: reg.code,
      label,
      focus: reg.id === centreId,
      secondary: reg.secondary,
      x1: rx1,
      x2: rx2,
      labelX: clamp((rx1 + rx2) / 2, lw / 2 + 2, width - lw / 2 - 2),
      labelY: top + 14,
      lineY: top + 26,
      members: members.map((m, k) => ({
        code: m.code,
        value: m.value,
        pos: m.pos,
        x: m.x,
        labelDx: m.labelX - m.x,
        level: mLevels[k]!,
      })),
      memberLabelY: top + 50,
    };
    y = top + 50 + Math.max(...mLevels) * GEOM.memberRow;
    if (centre && region.focus) {
      // The region's name sits with its lane rather than under the line.
      const w = textWidth(centre.text, GEOM.namePx);
      centre = { x: clamp((rx1 + rx2) / 2, w / 2 + 2, width - w / 2 - 2), y: y + 24, text: centre.text };
      y += 24;
    }
  }

  return {
    width,
    height: Math.ceil(y + 8),
    x0,
    x1,
    axisY,
    gridLabelY,
    grid: gridValues(kind, mode, hi, width).map((value) => ({ x: sx(value), value })),
    ticks,
    region,
    centre,
    mode,
    extended: dom.extended,
    hi: dom.hi,
  };
}

// ---------- from mode: offsets and sentences ----------

export interface Offset {
  id: CountryId;
  code: string;
  value: number;
  /** Other minus vantage: negative is towards the left pole. */
  delta: number;
  distance: number;
  secondary: boolean;
  members: { code: string; delta: number }[];
}

export interface FromView {
  vantage: StripItem & { value: number };
  /** Every other placed country, furthest first; equal distances keep canonical order (ties, not ranks). */
  rows: Offset[];
  noSource: CountryId[];
}

export function offsetsFrom(items: readonly StripItem[], vantage: CountryId): FromView | null {
  const me = items.find((i) => i.id === vantage);
  if (!me || me.value === null) return null;
  const v = me.value;
  const rows = items
    .filter((i): i is StripItem & { value: number } => i.id !== vantage && i.value !== null)
    .map((i) => ({
      id: i.id,
      code: i.code,
      value: i.value,
      delta: i.value - v,
      distance: Math.abs(i.value - v),
      secondary: i.secondary,
      members: i.members.map((m) => ({ code: m.code, delta: m.value - v })),
    }))
    .sort((a, b) => b.distance - a.distance || order(a.id) - order(b.id));
  return { vantage: { ...me, value: v }, rows, noSource: noSource(items) };
}

/** Accepts a country id or its display code, case-insensitive ("jp", "UK", "nord"). */
export function parseVantage(raw: string | null | undefined): CountryId | undefined {
  if (!raw) return undefined;
  const s = raw.trim().toLowerCase();
  if ((IDS as readonly string[]).includes(s)) return s as CountryId;
  return IDS.find((id) => DISPLAY_CODE[id].toLowerCase() === s);
}

/** A country name as it reads inside a sentence ("than the Netherlands", "日本より"). */
export function sentenceName(lang: Lang, id: CountryId, name: string): string {
  return nameInSentence(lang, id, name);
}

/** "2 steps more direct than Japan" / "日本より否定的フィードバックが直接的（2 段階）". */
export function offsetSentence(lang: Lang, key: StripKey, delta: number, vantageName: string): string {
  const t = stripText[lang];
  const n = Math.abs(delta);
  if (scaleKind(key) === "meyer") {
    if (delta === 0) return t["vantage.sameStep"](vantageName);
    const phrase = meyerComparatives[lang][key as CultureMapScale][delta < 0 ? 0 : 1];
    return t["vantage.steps"](n, phrase, vantageName);
  }
  if (delta === 0) return t["vantage.sameScore"](vantageName);
  return t["vantage.points"](n, delta > 0, vantageName);
}

// ---------- numbers and text equivalents ----------

const locale = (lang: Lang) => (lang === "ja" ? "ja-JP" : "en-US");

/** Signed step, typographic minus: "+3", "−2", "0". */
export function formatSigned(n: number, lang: Lang): string {
  return new Intl.NumberFormat(locale(lang), { signDisplay: "exceptZero" }).format(n).replace(/-/g, "−");
}

export function formatScore(n: number, lang: Lang): string {
  return new Intl.NumberFormat(locale(lang)).format(n).replace(/-/g, "−");
}

export function formatValue(kind: StripKind, n: number, lang: Lang): string {
  return kind === "meyer" ? formatSigned(n, lang) : formatScore(n, lang);
}

/**
 * Positions in words, lowest first: "NL −3, IL −3 … JP +3". A region lists its members in brackets.
 */
export function positionsText(kind: StripKind, items: readonly StripItem[], lang: Lang): string {
  const sep = lang === "ja" ? "、" : ", ";
  return items
    .filter((i): i is StripItem & { value: number } => i.value !== null)
    .sort((a, b) => a.value - b.value || order(a.id) - order(b.id))
    .map((i) => {
      const base = `${i.code}${i.secondary ? "†" : ""} ${formatValue(kind, i.value, lang)}`;
      if (i.members.length === 0) return base;
      const inner = i.members.map((m) => `${m.code} ${formatValue(kind, m.value, lang)}`).join(sep);
      return lang === "ja" ? `${base}（${inner}）` : `${base} (${inner})`;
    })
    .join(sep);
}

// Validates every content file against src/data/schema.ts and checks cross-file invariants:
// file name = id, claim ids belong to their country/theme, EN/JA structural parity, no Japanese in EN.
// REQUIRE_EN=1 (CI) additionally demands that every country exists in both languages with metadata.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import {
  COUNTRY_IDS,
  type CountryContent,
  countryContentSchema,
  countryMetaSchema,
  THEME_IDS,
} from "../src/data/schema.ts";

const root = new URL("../src/data/content/", import.meta.url).pathname;
const errors: string[] = [];
const fail = (file: string, msg: string) => errors.push(`${file}: ${msg}`);

const JAPANESE = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;

function readDir(dir: string): Map<string, unknown> {
  const out = new Map<string, unknown>();
  let names: string[] = [];
  try {
    names = readdirSync(join(root, dir)).filter((n) => n.endsWith(".json"));
  } catch {
    return out;
  }
  for (const name of names) {
    const file = join(dir, name);
    try {
      out.set(name.replace(/\.json$/, ""), JSON.parse(readFileSync(join(root, file), "utf8")));
    } catch (e) {
      fail(file, `invalid JSON: ${(e as Error).message}`);
    }
  }
  return out;
}

function loadContent(lang: "ja" | "en"): Map<string, CountryContent> {
  const parsed = new Map<string, CountryContent>();
  for (const [id, raw] of readDir(`${lang}/countries`)) {
    const file = `${lang}/countries/${id}.json`;
    const r = countryContentSchema.safeParse(raw);
    if (!r.success) {
      for (const issue of r.error.issues) fail(file, `${issue.path.join(".")}: ${issue.message}`);
      continue;
    }
    const c = r.data;
    if (c.id !== id) fail(file, `id "${c.id}" does not match file name`);
    const seen = new Set<string>();
    for (const theme of THEME_IDS) {
      for (const claim of c.themes[theme]) {
        if (!claim.id.startsWith(`${id}-${theme}-`)) fail(file, `claim ${claim.id} is filed under ${theme}`);
        if (seen.has(claim.id)) fail(file, `duplicate claim id ${claim.id}`);
        seen.add(claim.id);
      }
    }
    parsed.set(id, c);
  }
  return parsed;
}

const ja = loadContent("ja");
const en = loadContent("en");

const meta = readDir("meta");
for (const [id, raw] of meta) {
  const r = countryMetaSchema.safeParse(raw);
  if (!r.success) {
    for (const issue of r.error.issues) fail(`meta/${id}.json`, `${issue.path.join(".")}: ${issue.message}`);
  } else if (r.data.id !== id) fail(`meta/${id}.json`, `id "${r.data.id}" does not match file name`);
}

function shape(c: CountryContent) {
  return THEME_IDS.flatMap((t) =>
    c.themes[t].map((cl) => `${cl.id} ${cl.confidence} ${cl.sources.map((s) => s.url).join(",")}`),
  );
}

for (const [id, e] of en) {
  const file = `en/countries/${id}.json`;
  const j = ja.get(id);
  if (!j) {
    fail(file, "has no Japanese original");
    continue;
  }
  const [a, b] = [shape(j), shape(e)];
  const missing = a.filter((x) => !b.includes(x));
  const extra = b.filter((x) => !a.includes(x));
  for (const m of missing) fail(file, `differs from ja (claim id / confidence / source urls): ja has "${m}"`);
  for (const x of extra) fail(file, `differs from ja: en has "${x}"`);
  if (e.variance.length !== j.variance.length) fail(file, "variance list length differs from ja");
  const text = JSON.stringify(e);
  const hit = text.match(JAPANESE);
  if (hit) fail(file, `contains Japanese text near "${text.slice(Math.max(0, hit.index! - 30), hit.index! + 10)}"`);
}

if (process.env.REQUIRE_EN === "1") {
  for (const id of COUNTRY_IDS) {
    if (!ja.has(id)) fail(`ja/countries/${id}.json`, "missing");
    if (!en.has(id)) fail(`en/countries/${id}.json`, "missing");
    if (!meta.has(id)) fail(`meta/${id}.json`, "missing");
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`ok: ${ja.size} ja, ${en.size} en, ${meta.size} meta`);

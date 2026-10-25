// Screenshot pages at desktop (1280px) and mobile (412px) for visual review.
// Usage: node scripts/screenshot.ts <base-url> <out-dir> <path>... [--full]
import { mkdirSync } from "node:fs";
import { chromium } from "@playwright/test";

const args = process.argv.slice(2);
const full = args.includes("--full");
const [base, out, ...paths] = args.filter((a) => a !== "--full");
if (!base || !out || paths.length === 0) {
  console.error("usage: node scripts/screenshot.ts <base-url> <out-dir> <path>... [--full]");
  process.exit(2);
}
mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
for (const [width, tag] of [
  [1280, "desktop"],
  [412, "mobile"],
] as const) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  for (const path of paths) {
    await page.goto(new URL(path, base).href);
    const name = path.replace(/\W+/g, "_").replace(/^_|_$/g, "") || "home";
    await page.screenshot({ path: `${out}/${name}-${tag}.png`, fullPage: full });
  }
  await page.close();
}
await browser.close();

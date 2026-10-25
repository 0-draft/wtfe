import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const SECTIONS = [
  "what-this-is",
  "reading-a-claim",
  "frameworks",
  "software-evidence",
  "how-not-to-read",
  "data-limits",
  "corrections",
];
const SUBSECTIONS = ["culture-map", "hofstede", "globe", "rastogi-2018", "neumann-2024"];

for (const [path, lang] of [
  ["method/", "en"],
  ["ja/method/", "ja"],
] as const) {
  test.describe(`${path}`, () => {
    test("renders, has no horizontal scroll, and passes axe", async ({ page }) => {
      const res = await page.goto(path);
      expect(res?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("main h1")).toBeVisible();
      await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveAttribute("href", /\/method\/$/);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      expect(overflow).toBeLessThanOrEqual(0);
      const axe = await new AxeBuilder({ page }).exclude("astro-dev-toolbar").analyze();
      expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
    });

    test("has every section heading, and the table of contents links to each", async ({ page }) => {
      await page.goto(path);
      for (const id of SECTIONS) {
        await expect(page.locator(`section#${id} > h2`)).toBeVisible();
        await expect(page.locator(`.toc a[href="#${id}"]`)).toHaveCount(1);
      }
      for (const id of SUBSECTIONS) await expect(page.locator(`h3#${id}`)).toBeVisible();
      await page.locator('.toc a[href="#corrections"]').click();
      await expect(page).toHaveURL(/#corrections$/);
    });

    test("every external link is https", async ({ page }) => {
      await page.goto(path);
      const hrefs = await page.locator("main a[href]").evaluateAll((as) => as.map((a) => a.getAttribute("href") ?? ""));
      const external = hrefs.filter((h) => /^[a-z]+:/i.test(h) || h.startsWith("//"));
      expect(external.length).toBeGreaterThan(30);
      for (const h of external) expect(h, h).toMatch(/^https:\/\//);
    });

    test("shows a real claim entry with its usage label, citation and id", async ({ page }) => {
      await page.goto(path);
      const entry = page.locator(".example .entry");
      await expect(entry).toHaveCount(1);
      await expect(entry).toHaveAttribute("id", "de-feedback-1");
      await expect(entry.locator(".usage")).toBeVisible();
      await expect(entry.locator(".entry-dated")).toBeVisible();
      await expect(entry.locator(".citations a").first()).toHaveAttribute("href", /^https:\/\//);
    });

    test("lists the eight Culture Map scales and six Hofstede dimensions", async ({ page }) => {
      await page.goto(path);
      await expect(page.locator("#frameworks dl.scales").nth(0).locator("dt")).toHaveCount(8);
      await expect(page.locator("#frameworks dl.scales").nth(1).locator("dt")).toHaveCount(6);
      await expect(page.locator(".grid7 li")).toHaveCount(7);
    });
  });
}

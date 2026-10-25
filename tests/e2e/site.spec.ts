import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = ["./", "ja/", "countries/jp/", "ja/countries/de/", "themes/feedback/", "ja/themes/oss/", "method/"];

for (const path of pages) {
  test(`${path} renders, has no horizontal scroll, and passes axe`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);
    const axe = await new AxeBuilder({ page }).analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}

test("language switch keeps the current page", async ({ page }) => {
  await page.goto("countries/fr/");
  await page.getByRole("link", { name: "日本語", exact: true }).click();
  await expect(page).toHaveURL(/\/wtfe\/ja\/countries\/fr\/$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "ja");
  await page.getByRole("link", { name: "English", exact: true }).click();
  await expect(page).toHaveURL(/\/wtfe\/countries\/fr\/$/);
});

test("home lists all 14 countries in both languages", async ({ page }) => {
  for (const path of ["./", "ja/"]) {
    await page.goto(path);
    await expect(page.locator(".country-grid li")).toHaveCount(14);
  }
});

test("every claim cites at least one source link", async ({ page }) => {
  await page.goto("countries/us/");
  const claims = page.locator(".entry");
  const n = await claims.count();
  expect(n).toBeGreaterThan(10);
  for (let i = 0; i < n; i++) {
    await expect(claims.nth(i).locator(".citations a").first()).toHaveAttribute("href", /^https:\/\//);
  }
});

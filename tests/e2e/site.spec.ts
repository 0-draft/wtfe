import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const pages = ["./", "ja/", "countries/jp/", "ja/countries/de/", "themes/feedback/", "ja/themes/oss/", "method/"];

for (const path of pages) {
  test(`${path} renders, has no horizontal scroll, and passes axe`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
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

test("language switch keeps the claim anchor", async ({ page }) => {
  await page.goto("countries/jp/#jp-feedback-2");
  await page.getByRole("link", { name: "日本語", exact: true }).click();
  await expect(page).toHaveURL(/\/wtfe\/ja\/countries\/jp\/#jp-feedback-2$/);
});

test("display toggle cycles auto, light, dark and remembers the choice", async ({ page }) => {
  await page.goto("themes/");
  const toggle = page.locator("[data-theme-toggle]");
  await expect(toggle).toHaveText("Display: Auto");
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await toggle.click();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(toggle).toHaveText("Display: Dark");
  await toggle.click();
  await expect(page.locator("html")).not.toHaveAttribute("data-theme", /./);
});

test("header controls are at least 44px tall", async ({ page }) => {
  await page.goto("ja/");
  for (const el of await page.locator(".site-nav a, .tools a, .theme-toggle").all()) {
    const box = await el.boundingBox();
    expect(box?.height).toBeGreaterThanOrEqual(43.5);
    expect(box?.width).toBeGreaterThanOrEqual(43.5);
  }
});

test("thumb index marks the country being read on a theme page", async ({ page }) => {
  await page.goto("themes/feedback/");
  await page.evaluate(() => document.getElementById("de")?.scrollIntoView());
  await expect(page.locator(".thumb-index a[aria-current]")).toHaveText("DE");
  await expect(page.locator(".thumb-index a[aria-current]")).toHaveCount(1);
});

test("each country theme section links to the same theme in other countries", async ({ page }) => {
  await page.goto("ja/countries/kr/");
  await expect(page.locator("#feedback .xref a")).toHaveAttribute("href", /\/wtfe\/ja\/themes\/feedback\/#kr$/);
});

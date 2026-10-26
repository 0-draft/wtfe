import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

// Search reads the Pagefind index written by `postbuild`, so these tests need the built site (astro preview).

const dialog = (page: Page) => page.locator("dialog#search");
const input = (page: Page) => page.locator("[data-search-input]");
const options = (page: Page) => page.locator("#search-results [role=option]");

const query = async (page: Page, q: string) => {
  await input(page).fill(q);
  await expect(options(page).first()).toBeVisible();
};

test("the header button opens the palette and Escape closes it", async ({ page }) => {
  await page.goto("./");
  await expect(dialog(page)).toBeHidden();
  const button = page.getByRole("button", { name: "Search", exact: true });
  await button.click();
  await expect(dialog(page)).toBeVisible();
  await expect(input(page)).toBeFocused();
  await input(page).fill("japan");
  await page.keyboard.press("Escape");
  await expect(dialog(page)).toBeHidden();
  await expect(button).toBeFocused();
  // The query survives a close, so reopening shows the same results.
  await button.click();
  await expect(input(page)).toHaveValue("japan");
});

test("/ and Ctrl-K open the palette; / typed into a field does not", async ({ page }) => {
  await page.goto("countries/jp/");
  await page.keyboard.press("/");
  await expect(dialog(page)).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog(page)).toBeHidden();
  await page.keyboard.press("Control+k");
  await expect(dialog(page)).toBeVisible();
  await page.keyboard.press("Escape");
  await page.goto("compare/");
  const select = page.locator("[data-pair-picker] select").first();
  if (await select.isVisible()) {
    await select.focus();
    await page.keyboard.press("/");
    await expect(dialog(page)).toBeHidden();
  }
});

test("English search lists English pages, entries before compare pages", async ({ page }) => {
  await page.goto("themes/feedback/");
  await page.keyboard.press("/");
  await query(page, "japan");
  const first = options(page).first();
  await expect(first.locator(".s-word")).toHaveText("Japan");
  await expect(first.locator(".s-kind")).toHaveText("Country");
  await expect(first).toHaveAttribute("href", "/wtfe/countries/jp/");
  for (const href of await options(page).evaluateAll((os) => os.map((o) => o.getAttribute("href") ?? ""))) {
    expect(href).toMatch(/^\/wtfe\//);
    expect(href).not.toMatch(/^\/wtfe\/ja\//);
  }
  // Naming both countries still finds the pair.
  await query(page, "germany japan");
  await expect(options(page).locator(".s-kind", { hasText: "Compare" }).first()).toBeVisible();
  await expect(page.locator("[data-search-status]")).toContainText(/\d+ pages?/);
});

test("Japanese search on /ja/ lists Japanese pages only", async ({ page }) => {
  await page.goto("ja/");
  await page.getByRole("button", { name: "検索", exact: true }).click();
  await query(page, "日本");
  const first = options(page).first();
  await expect(first.locator(".s-word")).toHaveText("日本");
  await expect(first.locator(".s-kind")).toHaveText("国・地域");
  const hrefs = await options(page).evaluateAll((os) => os.map((o) => o.getAttribute("href") ?? ""));
  expect(hrefs.length).toBeGreaterThan(1);
  for (const href of hrefs) expect(href).toMatch(/^\/wtfe\/ja\//);
  await query(page, "コードレビュー");
  await expect(page.locator("[data-search-status]")).toContainText("件");
});

test("matches are underlined, not filled", async ({ page }) => {
  await page.goto("./");
  await page.keyboard.press("/");
  await query(page, "agile");
  const mark = page.locator("#search-results mark").first();
  await expect(mark).toBeVisible();
  const style = await mark.evaluate((m) => getComputedStyle(m));
  expect(style.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(style.boxShadow).toContain("inset");
});

test("arrow keys move the selection and Enter follows it", async ({ page }) => {
  await page.goto("./");
  await page.keyboard.press("/");
  await query(page, "evaluating");
  const opts = options(page);
  expect(await opts.count()).toBeGreaterThan(2);
  await expect(opts.nth(0)).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("ArrowDown");
  await expect(opts.nth(1)).toHaveAttribute("aria-selected", "true");
  await expect(opts.nth(0)).toHaveAttribute("aria-selected", "false");
  await expect(input(page)).toHaveAttribute("aria-activedescendant", (await opts.nth(1).getAttribute("id")) ?? "");
  await page.keyboard.press("ArrowUp");
  await page.keyboard.press("ArrowUp"); // wraps to the last row
  await expect(opts.last()).toHaveAttribute("aria-selected", "true");
  await page.keyboard.press("ArrowDown"); // and back to the first
  const href = (await opts.nth(0).getAttribute("href")) ?? "";
  expect(href).toBe("/wtfe/scales/evaluating/");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/wtfe\/scales\/evaluating\/$/);
  await expect(page.locator("main h1")).toBeVisible();
});

test("no results says so", async ({ page }) => {
  await page.goto("ja/");
  await page.keyboard.press("/");
  await input(page).fill("zzqxj");
  await expect(page.locator("[data-search-status]")).toHaveText("「zzqxj」に一致するページはありません。");
  await expect(options(page)).toHaveCount(0);
  await expect(input(page)).toHaveAttribute("aria-expanded", "false");
});

for (const path of ["./", "ja/"]) {
  test(`${path} passes axe with the palette open and showing results`, async ({ page }) => {
    await page.goto(path);
    await page.keyboard.press("/");
    await query(page, path === "ja/" ? "フィードバック" : "feedback");
    const axe = await new AxeBuilder({ page }).include("dialog#search").analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
    const whole = await new AxeBuilder({ page }).analyze();
    expect(whole.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}

test("the palette fits a phone screen", async ({ page }, info) => {
  test.skip(info.project.name !== "mobile", "phone layout");
  await page.goto("ja/countries/jp/");
  const button = page.getByRole("button", { name: "検索", exact: true });
  const box = await button.boundingBox();
  expect(box?.height).toBeGreaterThanOrEqual(44);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);
  await button.click();
  await query(page, "階層");
  const vw = page.viewportSize()?.width ?? 0;
  const d = await dialog(page).boundingBox();
  expect(Math.round(d?.width ?? 0)).toBe(vw);
  const overflow = await page.locator("#search-results").evaluate((el) => el.scrollWidth - el.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
  const close = page.getByRole("button", { name: "閉じる" });
  await expect(close).toBeVisible();
  expect((await close.boundingBox())?.height).toBeGreaterThanOrEqual(44);
  await close.click();
  await expect(dialog(page)).toBeHidden();
});

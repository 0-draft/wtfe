import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

const pages = [
  "scales/",
  "ja/scales/",
  "scales/evaluating/",
  "ja/scales/evaluating/",
  "scales/persuading/",
  "scales/hofstede-pdi/",
  "ja/scales/hofstede-ivr/",
  "scales/evaluating/?from=jp",
  "ja/scales/hofstede-uai/?from=nordics",
  "countries/nordics/",
  "ja/countries/jp/",
];

async function noHorizontalScroll(page: Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
}

for (const path of pages) {
  test(`${path} renders, has no horizontal scroll, and passes axe`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
    if (path.includes("?from=")) await expect(page.locator(".vs-from")).toBeVisible();
    await noHorizontalScroll(page);
    const axe = await new AxeBuilder({ page }).analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}

test("index shows all 14 strips with no focus, grouped by framework", async ({ page }) => {
  for (const path of ["scales/", "ja/scales/"]) {
    await page.goto(path);
    await expect(page.locator("#meyer .vs-fig")).toHaveCount(8);
    await expect(page.locator("#hofstede .vs-fig")).toHaveCount(6);
    await expect(page.locator(".vs-mark.is-focus")).toHaveCount(0);
    await expect(page.locator(`a[href$="/method/"]`).first()).toBeVisible();
  }
});

test("every scale page exists in both languages", async ({ request }) => {
  // 28 pages; the dev server renders each on demand.
  test.setTimeout(180_000);
  const slugs = [
    "communicating",
    "evaluating",
    "persuading",
    "leading",
    "deciding",
    "trusting",
    "disagreeing",
    "scheduling",
  ].concat(["pdi", "idv", "mas", "uai", "lto", "ivr"].map((d) => `hofstede-${d}`));
  for (const slug of slugs) {
    for (const prefix of ["", "ja/"]) {
      const res = await request.get(`${prefix}scales/${slug}/`);
      expect(res.status(), `${prefix}${slug}`).toBe(200);
    }
  }
});

test("country page draws 14 strips with the country in 朱 and links each to its scale page", async ({ page }) => {
  await page.goto("countries/jp/");
  const figs = page.locator("#scales .vs-fig");
  await expect(figs).toHaveCount(14);
  const visibleFocus = page.locator("#strip-evaluating .vs-svg:visible .vs-mark.is-focus");
  await expect(visibleFocus).toHaveAttribute("data-id", "jp");
  await expect(page.locator("#strip-evaluating .vs-svg:visible .vs-name")).toHaveText("Japan");
  await page.locator("#strip-evaluating .vs-title a").click();
  await expect(page).toHaveURL(/\/wtfe\/scales\/evaluating\/$/);
});

test("spread strip lists unsourced countries in words, marks secondary basis, and spans the Nordics", async ({
  page,
}) => {
  await page.goto("scales/trusting/");
  const fig = page.locator("#strip-trusting");
  await expect(fig.locator(".vs-nosrc")).toContainText("Ukraine");
  await expect(fig.locator(".vs-svg:visible .vs-mark.is-secondary")).toHaveCount(2);
  await expect(fig).toContainText("†");
  await page.goto("scales/leading/");
  const members = page.locator("#strip-leading .vs-svg:visible [data-member]");
  await expect(members).toHaveCount(3);
});

test("Hofstede strips carry the fixed Taras caption", async ({ page }) => {
  await page.goto("scales/hofstede-idv/");
  await expect(page.locator("#strip-idv")).toContainText(
    "About 80% of variation in values is between people inside a country",
  );
  await page.goto("ja/scales/hofstede-idv/");
  await expect(page.locator("#strip-idv")).toContainText("Taras ほか 2016");
});

test("text equivalent opens without JavaScript", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("scales/evaluating/");
  await expect(page.locator("#strip-evaluating")).toBeVisible();
  await expect(page.locator(".vs-picker")).toHaveCount(0);
  await page.locator("#strip-evaluating summary").click();
  await expect(page.locator("#strip-evaluating table tbody tr")).toHaveCount(13);
  await ctx.close();
});

test("vantage picker re-centres, updates the URL, and writes sentences", async ({ page }) => {
  await page.goto("scales/evaluating/");
  const select = page.getByLabel("Read from");
  await select.selectOption("jp");
  await expect(page).toHaveURL(/\?from=jp$/);
  await expect(page.locator("#strip-evaluating")).toBeHidden();
  const nl = page.locator('.vs-row[data-id="nl"]');
  await expect(nl).toContainText("6 steps more direct than Japan");
  await expect(page.locator(".vs-row.is-you")).toContainText("you (Japan)");
  // Relativity: from the Netherlands, China reads as more indirect.
  await select.selectOption("nl");
  await expect(page).toHaveURL(/\?from=nl$/);
  await expect(page.locator('.vs-row[data-id="cn"]')).toContainText("more indirect than the Netherlands");
  await select.selectOption("");
  await expect(page).not.toHaveURL(/from=/);
  await expect(page.locator("#strip-evaluating")).toBeVisible();
});

test("from mode in Japanese, sorted by distance", async ({ page }) => {
  await page.goto("ja/scales/leading/?from=jp");
  await expect(page.locator(".vs-row.is-you")).toContainText("あなた（日本）");
  await expect(page.locator('.vs-row[data-id="nl"]')).toContainText("日本より平等主義的（6 段階）");
  const texts = await page.locator(".vs-row:not(.is-you) .vs-row-text").allTextContents();
  const steps = texts.map((t) => Number(/（(\d+) 段階）/.exec(t)?.[1] ?? 0));
  expect([...steps].sort((a, b) => b - a)).toEqual(steps);
});

test("a vantage with no source on the scale falls back to the spread strip", async ({ page }) => {
  await page.goto("scales/evaluating/?from=ua");
  await expect(page.getByRole("status")).toContainText("Ukraine has no source on this scale");
  await expect(page.locator("#strip-evaluating")).toBeVisible();
});

test("ticks slide to their new offsets with a 200ms transition", async ({ page }) => {
  await page.goto("scales/evaluating/?from=jp");
  const duration = await page
    .locator(".vs-from .vs-mark")
    .first()
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  expect(duration).toBe("0.2s");
});

test("re-centre is instant under reduced motion", async ({ browser }) => {
  const ctx = await browser.newContext({ reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto("scales/evaluating/?from=jp");
  const duration = await page
    .locator(".vs-from .vs-mark")
    .first()
    .evaluate((el) => getComputedStyle(el).transitionDuration);
  expect(duration).toBe("0s");
  await ctx.close();
});

import { expect, test } from "@playwright/test";

// Compact figures: country-page fingerprint, scale grid (home and theme pages), confidence pips, folded sources.

test("fingerprint marks a secondary basis, spans a region, and names rows with their poles", async ({ page }) => {
  await page.goto("countries/il/");
  const trusting = page.locator('#glance .fp-row[data-scale="trusting"]');
  await expect(trusting.locator(".fp-me.is-secondary")).toHaveCount(1);
  await expect(trusting.locator(".fp-val")).toHaveText(/†$/);
  await expect(page.locator("#glance .fp-note").first()).toContainText("†");

  await page.goto("countries/nordics/");
  await expect(page.locator('#glance .fp-row[data-scale="leading"] .fp-span')).toHaveCount(1);

  await page.goto("ja/countries/jp/");
  const ev = page.getByRole("link", {
    name: /^評価（直接的な否定的フィードバック〜間接的な否定的フィードバック）：日本は \+3$/,
  });
  await expect(ev).toHaveCount(1);
  await expect(page.getByRole("link", { name: "説得：日本の位置を示す出典なし" })).toHaveCount(1);
  // No source: no 朱 dot, and the row links to the plain scale page.
  await expect(page.locator('#glance .fp-row[data-scale="persuading"]')).toHaveAttribute(
    "href",
    /\/scales\/persuading\/$/,
  );
});

test("other-country dots are not covered by any label", async ({ page }) => {
  await page.goto("countries/ua/");
  const row = page.locator('#glance .fp-row[data-scale="evaluating"]');
  await expect(row.locator(".fp-dot")).not.toHaveCount(0);
  await expect(row.locator(".fp-me")).toHaveCount(0);
  await expect(row.locator(".fp-val")).toHaveText("no source");
});

for (const path of ["./", "ja/"]) {
  test(`${path}: scale grid draws 14 × 8 cells with secondary, region and no-source marks`, async ({ page }) => {
    await page.goto(path);
    const grid = page.locator("#positions .mg-table");
    await expect(grid.locator("tbody tr")).toHaveCount(14);
    await expect(grid.locator("thead th[scope=col]")).toHaveCount(8);
    await expect(grid.locator("a.mg-cell")).toHaveCount(14 * 8);
    await expect(grid.locator(".mg-dot.is-secondary").first()).toBeVisible();
    await expect(grid.locator(".mg-span").first()).toBeVisible();
    await expect(grid.locator(".mg-none").first()).toBeVisible();
    // Every cell link names its country, so no two cells share a name.
    const names = await grid.locator("a.mg-cell").evaluateAll((els) => els.map((e) => e.getAttribute("aria-label")));
    expect(new Set(names).size).toBe(names.length);
  });
}

test("grid cells read from their country, except where it has no source", async ({ page }) => {
  await page.goto("./");
  const grid = page.locator("#positions .mg-table");
  await expect(grid.locator('a.mg-cell[aria-label="Japan, Evaluating: +3"]')).toHaveAttribute(
    "href",
    /\/scales\/evaluating\/\?from=jp$/,
  );
  await expect(grid.locator('a.mg-cell[aria-label="Japan, Persuading: no source"]')).toHaveAttribute(
    "href",
    /\/scales\/persuading\/$/,
  );
  await expect(grid.locator('a.mg-cell[aria-label="Israel, Trusting: +1†"]')).toHaveCount(1);
});

test("theme grid has a pips column, only the theme's scales, and rows jump to the country", async ({ page }) => {
  await page.goto("themes/hierarchy/");
  const grid = page.locator("#scales .mg-table");
  await expect(grid.locator("thead th[scope=col]")).toHaveCount(5); // Claims + 3 Meyer + PDI
  await expect(grid.locator("tbody tr")).toHaveCount(14);
  await expect(grid.locator(".mg-claims .pip").first()).toBeVisible();
  await grid.locator('tbody th a[href="#de"]').click();
  await expect(page).toHaveURL(/#de$/);
  await page.goto("themes/oss/");
  await expect(page.locator("#scales .mg-table thead th[scope=col]")).toHaveCount(1);
});

test("countries index shows one pip per claim with a legend", async ({ page }) => {
  await page.goto("countries/");
  const jp = page.locator("#jp");
  const count = Number((await jp.locator(".counts").textContent())?.match(/(\d+) claims/)?.[1]);
  await expect(jp.locator(".pip")).toHaveCount(count);
  await expect(page.locator(".pip-key")).toContainText("well attested");
});

test("evidence map pips stay inside their cells on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 412, height: 900 });
  await page.goto("./");
  const overflow = await page.locator("a.em-cell").evaluateAll((cells) =>
    cells
      .map((c) => {
        const box = c.getBoundingClientRect();
        const last = c.querySelector(".em-rule:last-child")?.getBoundingClientRect();
        return last ? last.bottom - box.bottom : 0;
      })
      .filter((d) => d > 0.5),
  );
  expect(overflow).toEqual([]);
});

test("claim sources are folded, open on click, and open when the claim is the target", async ({ page }) => {
  await page.goto("countries/jp/");
  const entry = page.locator("#jp-design-4");
  await expect(entry.locator("details.entry-src")).not.toHaveAttribute("open");
  await expect(entry.locator(".citations a")).toBeHidden();
  await entry.locator("summary").click();
  await expect(entry.locator(".citations a").first()).toBeVisible();
  await page.goto("countries/jp/#jp-failure-2");
  await expect(page.locator("#jp-failure-2 .citations a").first()).toBeVisible();
});

test("claim sources open without JavaScript", async ({ browser }) => {
  const ctx = await browser.newContext({ javaScriptEnabled: false });
  const page = await ctx.newPage();
  await page.goto("countries/jp/");
  const entry = page.locator("#jp-design-4");
  await entry.locator("summary").click();
  await expect(entry.locator(".citations a").first()).toBeVisible();
  await ctx.close();
});

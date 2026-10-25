import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

const pages = [
  "./",
  "ja/",
  "countries/",
  "ja/countries/",
  "themes/",
  "ja/themes/",
  "themes/hierarchy/",
  "ja/themes/feedback/",
  "sources/",
  "ja/sources/",
];

async function noHorizontalScroll(page: Page) {
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(0);
}

for (const path of pages) {
  test(`${path} renders, has no horizontal scroll, and passes axe`, async ({ page }) => {
    test.slow(); // the sources page carries several hundred entries; axe takes a while under parallel load
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
    await noHorizontalScroll(page);
    const axe = await new AxeBuilder({ page }).exclude("astro-dev-toolbar").analyze();
    expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
  });
}

test.describe("evidence map", () => {
  for (const path of ["./", "ja/"]) {
    test(`${path}: 14 x 7 table with counts in text`, async ({ page }) => {
      await page.goto(path);
      const table = page.locator(".em-table");
      await expect(table.locator("tbody tr")).toHaveCount(14);
      await expect(table.locator("thead th[scope=col]")).toHaveCount(7);
      await expect(table.locator("tbody th[scope=row]")).toHaveCount(14);
      const cells = table.locator("a.em-cell");
      await expect(cells).toHaveCount(98);
      // Every cell's accessible name carries its counts in words.
      const label = await cells.first().textContent();
      expect(label).toMatch(lang(path) === "ja" ? /件/ : /(well attested|attested|thin)/);
      // Rules: one per claim, matching the visible count.
      const n = Number(await cells.first().locator(".em-n").textContent());
      await expect(cells.first().locator(".em-rule")).toHaveCount(n);
      // Nothing in the map is coloured by hue: rules use ink tokens only.
      const colors = await table
        .locator(".em-rule")
        .evaluateAll((els) => [...new Set(els.map((e) => getComputedStyle(e).borderTopColor))]);
      expect(colors.length).toBeLessThanOrEqual(3);
    });
  }

  test("a cell opens its claim list and links on", async ({ page }) => {
    await page.goto("./");
    const cell = page.locator("a[data-pop='em-jp-feedback']");
    await expect(cell).toHaveAttribute("role", "button");
    await cell.click();
    const pop = page.locator("#em-jp-feedback");
    await expect(pop).toBeVisible();
    await expect(cell).toHaveAttribute("aria-expanded", "true");
    await expect(pop.locator(".em-pop-list li").first()).toBeVisible();
    await noHorizontalScroll(page);
    await page.keyboard.press("Escape");
    await expect(pop).toBeHidden();
    await expect(cell).toHaveAttribute("aria-expanded", "false");
    await cell.click();
    await pop.locator(".em-pop-more a").click();
    await expect(page).toHaveURL(/\/wtfe\/countries\/jp\/#feedback$/);
  });

  test("clicking an open cell closes it; keyboard opens it and Escape returns focus", async ({ page }) => {
    await page.goto("./");
    const cell = page.locator("a[data-pop='em-kr-work']");
    const pop = page.locator("#em-kr-work");
    await cell.click();
    await expect(pop).toBeVisible();
    // Press the cell again, as a user would: it must close, not close and reopen. On a phone the bottom sheet can
    // cover the cell, so there the press goes to the backdrop above the sheet.
    const box = await cell.boundingBox();
    const sheet = await pop.boundingBox();
    if (!box || !sheet) throw new Error("no box");
    const [x, y] = [box.x + box.width / 2, box.y + box.height / 2];
    const covered = x >= sheet.x && x <= sheet.x + sheet.width && y >= sheet.y && y <= sheet.y + sheet.height;
    await page.mouse.click(x, covered ? Math.max(4, sheet.y - 20) : y);
    await expect(pop).toBeHidden();
    await expect(cell).toHaveAttribute("aria-expanded", "false");
    await cell.focus();
    await page.keyboard.press("Enter");
    await expect(pop).toBeVisible();
    await expect(pop).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(pop).toBeHidden();
    await expect(cell).toBeFocused();
    await page.keyboard.press(" ");
    await expect(pop).toBeVisible();
  });

  test("popovers sit outside the figure so the caption stays its last child", async ({ page }) => {
    await page.goto("./");
    const last = await page.locator("figure.em").evaluate((f) => f.lastElementChild?.tagName);
    expect(last).toBe("FIGCAPTION");
  });

  test("without JavaScript a cell is a plain link to the country section", async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto("ja/");
    const cell = page.locator("a[data-pop='em-de-oss']");
    await expect(cell).not.toHaveAttribute("role", "button");
    await cell.click();
    await expect(page).toHaveURL(/\/wtfe\/ja\/countries\/de\/#oss$/);
    await ctx.close();
  });

  test("column headers are short codes on a phone", async ({ page }) => {
    await page.setViewportSize({ width: 412, height: 900 });
    await page.goto("ja/");
    const head = page.locator(".em-table thead th").first();
    await expect(head.locator(".em-short")).toBeVisible();
    await expect(head.locator(".em-short")).toHaveText("設計");
    await expect(page.locator(".em-codes")).toBeVisible();
    // Touch targets stay at least 44px wide.
    const w = await page
      .locator("a.em-cell")
      .first()
      .evaluate((e) => e.getBoundingClientRect().width);
    expect(w).toBeGreaterThanOrEqual(43.5);
  });
});

function lang(path: string) {
  return path.startsWith("ja") ? "ja" : "en";
}

test("home keeps the countries and themes anchors and teaser links", async ({ page }) => {
  await page.goto("./");
  await expect(page.locator("#countries .country-grid li")).toHaveCount(14);
  await expect(page.locator("#themes .theme-list li")).toHaveCount(7);
  await expect(page.locator('a[href$="/scales/evaluating/"]')).toBeVisible();
  await expect(page.locator('a[href$="/compare/"]').last()).toBeVisible();
});

test("countries index is alphabetical in English and 五十音 in Japanese", async ({ page }) => {
  await page.goto("countries/");
  const en = await page.locator(".hw a").allTextContents();
  expect(en).toHaveLength(14);
  expect(en[0]).toBe("Brazil");
  expect(en.indexOf("The Nordics")).toBe(en.indexOf("Netherlands") + 1);
  await page.goto("ja/countries/");
  const ja = await page.locator(".hw a").allTextContents();
  expect(ja).toHaveLength(14);
  expect(ja.slice(0, 3)).toEqual(["アメリカ", "イギリス", "イスラエル"]);
  expect(ja.at(-1)).toBe("北欧");
  await expect(page.locator(".group-head")).toHaveText(["あ", "か", "た", "な", "は"]);
});

test("themes index lists 7 themes with definitions", async ({ page }) => {
  for (const path of ["themes/", "ja/themes/"]) {
    await page.goto(path);
    await expect(page.locator(".theme")).toHaveCount(7);
    await expect(page.locator(".theme .def")).toHaveCount(7);
    await expect(page.locator('nav a[aria-current="page"]')).toHaveCount(1);
  }
});

test("a theme page has every country as a sub-headword and links to scales", async ({ page }) => {
  await page.goto("themes/feedback/");
  await expect(page.locator("section.sub")).toHaveCount(14);
  await expect(page.locator("#jp .entry").first()).toBeVisible();
  await expect(page.locator('#scales a[href$="/scales/evaluating/"]')).toBeVisible();
  await expect(page.locator('#scales a[href$="/scales/disagreeing/"]')).toBeVisible();
  await page.goto("ja/themes/hierarchy/");
  await expect(page.locator('#scales a[href$="/ja/scales/hofstede-pdi/"]')).toBeVisible();
});

test.describe("sources", () => {
  test("lists each source once and links claims to their anchors", async ({ page }) => {
    await page.goto("sources/");
    const items = page.locator(".catalogue > li");
    const n = await items.count();
    expect(n).toBeGreaterThan(200);
    const hrefs = await items.evaluateAll((els) =>
      els.map((e) => e.querySelector(".src-title a")?.getAttribute("href")),
    );
    expect(new Set(hrefs).size).toBe(hrefs.length);
    await expect(items.first().locator(".cited-claim").first()).toHaveAttribute(
      "href",
      /\/wtfe\/countries\/[a-z]+\/#[a-z]+-[a-z]+-\d+$/,
    );
    await expect(page.locator(".dated").first()).toBeVisible();
  });

  test("filters by country and confidence, and keeps the filter in the URL", async ({ page }) => {
    await page.goto("sources/");
    const visible = page.locator(".catalogue > li:not([hidden])");
    const total = await visible.count();
    await page.locator("select[name=country]").selectOption("jp");
    const jp = await visible.count();
    expect(jp).toBeLessThan(total);
    expect(jp).toBeGreaterThan(0);
    await page.locator("input[name=confidence][value=weak]").check();
    const jpWeak = await visible.count();
    expect(jpWeak).toBeLessThanOrEqual(jp);
    await expect(page).toHaveURL(/country=jp/);
    await expect(page).toHaveURL(/confidence=weak/);
    await expect(page.locator(".f-count")).toContainText(String(jpWeak));
    for (const pairs of await visible.evaluateAll((els) => els.map((e) => (e as HTMLElement).dataset.pairs ?? ""))) {
      expect(pairs.split(" ")).toContain("jp:weak");
    }
    await page.reload();
    await expect(page.locator("select[name=country]")).toHaveValue("jp");
    expect(await visible.count()).toBe(jpWeak);
  });

  test("without JavaScript the filter is hidden and the by-country groups work", async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    await page.goto("ja/sources/");
    await expect(page.locator("[data-source-filter]")).toBeHidden();
    await expect(page.locator("details.bc")).toHaveCount(14);
    await page.locator("#by-jp summary").click();
    await expect(page.locator("#by-jp li").first()).toBeVisible();
    await ctx.close();
  });
});

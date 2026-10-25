import AxeBuilder from "@axe-core/playwright";
import { expect, type Page, test } from "@playwright/test";

const noHorizontalScroll = async (page: Page) =>
  expect(await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(0);

const axeClean = async (page: Page) => {
  const axe = await new AxeBuilder({ page }).analyze();
  expect(axe.violations.map((v) => `${v.id}: ${v.nodes[0]?.target}`)).toEqual([]);
};

const pages: { path: string; h1: string | RegExp }[] = [
  { path: "compare/", h1: "Compare" },
  { path: "ja/compare/", h1: "比較" },
  { path: "compare/jp-vs-de/", h1: "Japan vs Germany" },
  { path: "ja/compare/jp-vs-de/", h1: "日本とドイツ" },
  { path: "compare/ua-vs-nordics/", h1: /^Ukraine vs the Nordics$/i },
  { path: "ja/compare/nl-vs-us/", h1: "オランダとアメリカ" },
  { path: "compare/gb-vs-il/", h1: "The United Kingdom vs Israel" },
];

for (const { path, h1 } of pages) {
  test(`${path} renders, has no horizontal scroll, and passes axe`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.locator("main h1")).toHaveAccessibleName(h1);
    await expect(page.locator('.site-nav a[aria-current="page"]')).toHaveAttribute("href", /\/compare\/$/);
    await noHorizontalScroll(page);
    await axeClean(page);
  });
}

test("the gap ruler sorts by gap and groups close and unsourced scales", async ({ page }) => {
  await page.goto("compare/jp-vs-de/");
  const different = page.locator('[data-group="different"] .row-sentence');
  await expect(different).toHaveCount(7);
  await expect(different.nth(1)).toHaveText("Germany gives negative feedback more directly than Japan (5 steps)");
  await expect(page.locator('[data-group="none"]')).toContainText("Persuading");
  await expect(page.locator('[data-group="close"]')).toHaveCount(0);
  await expect(page.getByText(/About 80% of variation in values/)).toBeVisible();

  await page.goto("ja/compare/jp-vs-de/");
  await expect(page.locator('[data-group="different"] .row-sentence').nth(1)).toHaveText(
    "ドイツは日本より否定的なフィードバックを直接的に伝える（5 段階）",
  );
});

test("a pair with no Meyer data lists every scale under no source, and the Nordics note their average", async ({
  page,
}) => {
  await page.goto("compare/ua-vs-nordics/");
  // Eight scales, one shared reason: one merged row, not eight copies of the same sentence.
  const none = page.locator('[data-group="none"] li');
  await expect(none).toHaveCount(1);
  await expect(none.locator("a")).toHaveCount(8);
  await expect(none).toContainText("No source places Ukraine on these scales");
  await expect(page.locator('[data-group="different"]')).toHaveCount(0);
  await expect(page.getByText(/average of four national scores \(Sweden, Finland, Denmark and Norway\)/)).toBeVisible();
});

test("every strip has a text equivalent", async ({ page }) => {
  await page.goto("compare/nl-vs-de/");
  const rows = page.locator(".ruler .row");
  const n = await rows.count();
  expect(n).toBe(14); // 8 Meyer + 6 Hofstede, all sourced for this pair
  for (let i = 0; i < n; i++) {
    await expect(rows.nth(i).locator("svg")).toHaveAttribute("aria-hidden", "true");
    await expect(rows.nth(i).locator(".sr-only")).toHaveText(/Netherlands .+, Germany .+, on a line from/);
  }
  await expect(page.locator('[data-group="close"] .row')).not.toHaveCount(0);
});

test("swap link goes to the mirror page in both languages", async ({ page }) => {
  await page.goto("compare/jp-vs-de/");
  await page.locator("[data-swap]").click();
  await expect(page).toHaveURL(/\/wtfe\/compare\/de-vs-jp\/$/);
  await expect(page.locator("main h1")).toHaveAccessibleName("Germany vs Japan");

  await page.goto("ja/compare/jp-vs-de/");
  await page.getByRole("link", { name: /入れ替える/ }).click();
  await expect(page).toHaveURL(/\/wtfe\/ja\/compare\/de-vs-jp\/$/);
});

test("changing a pair select never navigates by itself; the Compare link does (WCAG 3.2.2)", async ({ page }) => {
  await page.goto("compare/jp-vs-de/");
  const from = page.getByRole("combobox", { name: "Seen from" });
  const to = page.getByRole("combobox", { name: "Compared with" });
  const go = page.locator("[data-pair-picker] [data-go]");
  await expect(from).toHaveValue("jp");
  await expect(go).toHaveAttribute("aria-disabled", "true");
  await to.selectOption("fr");
  await expect(page).toHaveURL(/\/wtfe\/compare\/jp-vs-de\/$/);
  await expect(go).not.toHaveAttribute("aria-disabled");
  await go.click();
  await expect(page).toHaveURL(/\/wtfe\/compare\/jp-vs-fr\/$/);
  // Back/forward restores show this page's pair, not the last pick.
  await page.goBack();
  await expect(page.getByRole("combobox", { name: "Compared with" })).toHaveValue("de");

  await page.goto("ja/compare/jp-vs-de/");
  await page.getByRole("combobox", { name: "視点" }).selectOption("kr");
  await page.locator("[data-pair-picker] [data-go]").click();
  await expect(page).toHaveURL(/\/wtfe\/ja\/compare\/kr-vs-de\/$/);
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("the title shows plain names and the index offers the link matrix", async ({ page }) => {
    await page.goto("compare/jp-vs-de/");
    await expect(page.getByRole("combobox")).toHaveCount(0);
    await expect(page.locator("main h1")).toHaveAccessibleName("Japan vs Germany");
    await expect(page.locator("[data-pair-picker]")).toBeHidden();
    await expect(page.locator("[data-swap]")).toHaveAttribute("href", /\/compare\/de-vs-jp\/$/);

    await page.goto("compare/");
    await expect(page.locator("[data-pair-picker]")).toBeHidden();
    await expect(page.locator(".m-cells a")).toHaveCount(182);
    await page.getByRole("link", { name: "Germany seen from Japan" }).first().click();
    await expect(page).toHaveURL(/\/wtfe\/compare\/jp-vs-de\/$/);
  });
});

test("the index selects drive the Go link", async ({ page }) => {
  await page.goto("ja/compare/");
  const go = page.getByRole("link", { name: "比較する" });
  await expect(go).toHaveAttribute("aria-disabled", "true");
  await page.getByRole("combobox", { name: "視点" }).selectOption("de");
  await page.getByRole("combobox", { name: "比較相手" }).selectOption("de");
  await expect(go).toHaveAttribute("aria-disabled", "true");
  await page.getByRole("combobox", { name: "比較相手" }).selectOption("in");
  await expect(go).not.toHaveAttribute("aria-disabled");
  await go.click();
  await expect(page).toHaveURL(/\/wtfe\/ja\/compare\/de-vs-in\/$/);
  await expect(page.locator("main h1")).toHaveAccessibleName("ドイツとインド");
});

test("claims sit side by side on desktop and stack on mobile", async ({ page }, info) => {
  await page.goto("compare/jp-vs-de/");
  const [a, b] = [page.locator("#feedback .col-a"), page.locator("#feedback .col-b")];
  const [ba, bb] = [await a.boundingBox(), await b.boundingBox()];
  if (info.project.name === "mobile") expect(bb!.y).toBeGreaterThan(ba!.y + ba!.height - 1);
  else expect(Math.abs(bb!.y - ba!.y)).toBeLessThan(2);
  await expect(a.locator(".entry").first()).toHaveAttribute("id", /^jp-feedback-/);
  await expect(b.locator(".entry").first()).toHaveAttribute("id", /^de-feedback-/);
});

import { defineConfig, devices } from "@playwright/test";

// The site is served under the GitHub Pages project path; tests navigate relative to it.
const origin = "http://127.0.0.1:4471";

export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["github"], ["html", { open: "never" }]] : "list",
  use: { baseURL: `${origin}/wtfe/`, trace: "retain-on-failure" },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    command: "pnpm exec astro preview --port 4471 --host 127.0.0.1",
    url: `${origin}/wtfe/`,
    reuseExistingServer: !process.env.CI,
  },
});

// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Frontend Training");
});

// @ts-check
const { test, expect } = require("@playwright/test");

test("login to the page", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("valentino");

  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Sirius1337!!");
  await page.getByText("Login").click();
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();
});

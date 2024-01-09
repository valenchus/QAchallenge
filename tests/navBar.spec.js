// @ts-check
const { test, expect } = require("@playwright/test");

test("navbar items", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("valentino");

  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Sirius1337!!");
  await page.getByText("Login").click();
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();

  // authenticated

  await expect(page.getByRole("button", { name: "Message" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Profile" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Explore" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Home" })).toBeVisible();
});

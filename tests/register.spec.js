// @ts-check
const { test, expect } = require("@playwright/test");

test("register to the page", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  await page.getByLabel("Name").click();
  await page.getByLabel("Name").fill("Valen");
  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("valentino");

  // no permite clickear en el email para luego llenar el campo, tampoco en confirm password
  await page.getByLabel("Email").click();
  await page.getByLabel("Email").fill("valentinmorali@sirius.com.ar");
  // await page.getByLabel("Password").click();
  // await page.getByLabel("Password").fill("Sirius1337!!");
  // await page.getByLabel("Confirm Password").click();
  // await page.getByLabel("Confirm Password").fill("Sirius1337!!");
});

// @ts-check
const { test, expect } = require("@playwright/test");
const randomId = Math.random().toString(36).substring(7);

test.only("post a text only tweet", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("valentino");

  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Sirius1337!!");
  await page.getByText("Login").click();
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();

  // authenticated
  // Como referenciar al numero de la derecha del boton de comentarios?
  await page.getByRole("button", { name: "Tweet", exact: true }).click();
  await expect(page.getByRole("button", { name: "Tweet", exact: true }).nth(1)).toBeDisabled()
  await page.getByPlaceholder('What\'s happening?').fill(`${randomId}`);
  await page.getByRole("button", { name: "Tweet", exact: true }).nth(1).click();
  await expect(page.getByText(`${randomId}`)).toBeVisible();
});

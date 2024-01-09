// @ts-check
const { test, expect } = require("@playwright/test");

test.only("post a text only tweet", async ({ page }) => {
  await page.goto("https://frontend-training-taupe.vercel.app/login");

  await page.getByLabel("Username").click();
  await page.getByLabel("Username").fill("valentino");

  await page.getByLabel("Password").click();
  await page.getByLabel("Password").fill("Sirius1337!!");
  await page.getByText("Login").click();
  await expect(page.getByRole("heading", { name: "Home" })).toBeVisible();

  // authenticated
  // preguntar a carlos por que no encuentra el Tweet, pero si encuentra el
  // Explore/Message/Profile cuando se achica la pantalla
  // Como referenciar al numero de la derecha del boton de comentarios?
  await expect(
    page.getByRole("button", { name: "Tweet", exact: true })
  ).toBeVisible();
});

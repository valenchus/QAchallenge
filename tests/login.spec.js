// @ts-check
const { test } = require("@playwright/test");
import { LoginPage } from "../pageObjects/login.pageObject";


test("login to the page", async ({ page }) => {

  const loginPage = new LoginPage(page);
  await page.goto("https://frontend-training-taupe.vercel.app/login");
  await loginPage.doLogin("m@p.com", "Asdasd*123");
});

// @ts-check
const { test, expect } = require("@playwright/test");
import { RegisterPage } from "../pageObjects/register.pageObject";

test("register to the page", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await page.goto("https://frontend-training-taupe.vercel.app/register");

  await registerPage.doRegister("mmm", "mmm", "m@m.com", "Asdasd*123", "Asdasd*123");
  await registerPage.checkRegister();
});

require('dotenv').config()
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";

test.describe("log user", () => {

  // TC-0004
  test("login with wrong credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.doLogin("badcredentials", "badcredentials");
    await loginPage.checkLoginError();
  });

  // TC-0005
  test("login to the page", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);
    await loginPage.checkLogin();
  });
});
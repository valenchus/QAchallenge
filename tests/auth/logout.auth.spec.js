require('dotenv').config()
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

// TC-0006
test("logout from the page", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);
  await homePage.logOut();
});
import "dotenv/config";
const { test, expect } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

const randomId = Math.random().toString(36).substring(7);

test.describe("post a text only tweet", () => {

  // TC-0007
  test("post a text only tweet", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);

    await homePage.newTweet("This is a test tweet " + randomId);
    await homePage.checkTweet("This is a test tweet " + randomId);
  });
})

import "dotenv/config";
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

const randomId = Math.random().toString(36).substring(7);

test.describe("Reaction tests", () => {

  // TC-0013
  test("Add like & retweet reactions", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.newTweet("Like reaction test " + randomId);
    await homePage.checkBodyTweet("Like reaction test " + randomId);

    await homePage.like();
    await homePage.retweet();
  })
})
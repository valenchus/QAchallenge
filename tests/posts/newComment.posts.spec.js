import "dotenv/config";
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

const randomId = Math.random().toString(36).substring(7);

test.describe("Comment tests", () => {

  // TC-0011
  test("post a text only comment", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);

    await homePage.newTweet("This is a test tweet " + randomId);
    await homePage.checkBodyTweet("This is a test tweet " + randomId);

    await homePage.newComment("This is a test comment " + randomId);
    await homePage.checkBodyComment("This is a test comment " + randomId);
  });

  // TC-0012
  test("post more than 241 characters", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);

    await homePage.newTweet("This is a test tweet " + randomId);
    await homePage.checkBodyTweet("This is a test tweet " + randomId);

    await homePage.newComment("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    await homePage.checkModalError();
  });
});

import "dotenv/config";
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

const randomId = Math.random().toString(36).substring(7);

test.describe("Post tests", () => {

  // TC-0007
  test("post a text only tweet", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD);

    await homePage.newTweet("This is a test tweet " + randomId);
    await homePage.checkBodyTweet("This is a test tweet " + randomId);
  });

  // TC-0008
  test("post a text only tweet with more than 240 characters", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.newTweet("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    await homePage.checkModalError();
  })

  // TC-0009
  test("post a tweet with an image", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.newTweetWithImage("test");
    await homePage.checkBodyTweet("test");
    await homePage.checkImageTweet();
  })
})


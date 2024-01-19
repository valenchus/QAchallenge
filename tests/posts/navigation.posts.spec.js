import "dotenv/config";
const { test, expect } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";
import { PostPage } from "../../pageObjects/post.pageObject";

test.describe("Interaction with posts tests", () => {

  // TC-0014
  test("Open & close image from post", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.newTweetWithImage("test");
    await homePage.checkBodyTweet("test");
    await homePage.checkImageTweet();

    await homePage.openPostImage()
    await homePage.checkImageModalVisible()

    await homePage.closePostImage()
    await homePage.checkImageModalNotVisible()

    await homePage.openPostImage()
    await homePage.checkImageModalVisible()

    await homePage.clickOutsideImageModal()
    await homePage.checkImageModalNotVisible()

  })

  test("Open post", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const postPage = new PostPage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.newTweet("test");
    await homePage.checkBodyTweet("test");

    
    await page.waitForTimeout(1000)
    const text = await homePage.firstTweetText()
    const name = await homePage.firstTweetName()
    
    await homePage.openPost()
    await postPage.checkHeading("Tweet")
    await postPage.checkName(name)
    await postPage.checkPostText(text)
  })
})
import "dotenv/config";
const { test, expect } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";

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
})
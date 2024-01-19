import "dotenv/config";
const { test } = require("@playwright/test");
import { LoginPage } from "../../pageObjects/login.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";
import { ProfilePage } from "../../pageObjects/profile.pageObject";

test.describe("User interaction test", () => {

  // TC-0015
  test("Search users", async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    
    await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

    await homePage.fillSearchInput(process.env.ANOTHERUSER_USERNAME)
    await homePage.checkResultsContent(process.env.ANOTHERUSER_USERNAME)
  })

    // TC-0016
    test("Click profile image", async ({ page }) => {

      const loginPage = new LoginPage(page);
      const homePage = new HomePage(page);
      const profilePage = new ProfilePage(page);
      
      await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)
  
      await page.waitForTimeout(3000)
      const name = await homePage.firstNameText()
      await homePage.clickProfileImage()
      await profilePage.checkName(name)       
    })
})
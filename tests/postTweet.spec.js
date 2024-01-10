// @ts-check
const { test, expect } = require("@playwright/test");
import { LoginPage } from "../pageObjects/login.pageObject";
import { HomePage } from "../pageObjects/home.pageObject";

const randomId = Math.random().toString(36).substring(7);

test.only("post a text only tweet", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  
  await page.goto("https://frontend-training-taupe.vercel.app/login");
  
  await loginPage.doLogin("m@p.com", "Asdasd*123");

  await homePage.newTweet("This is a test tweet " + randomId);
  await homePage.checkTweet("This is a test tweet " + randomId);
});

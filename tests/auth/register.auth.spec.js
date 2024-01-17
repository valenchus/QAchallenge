// @ts-check
import "dotenv/config";
const { test } = require("@playwright/test");
import { RegisterPage } from "../../pageObjects/register.pageObject";

test.describe("register user", () => {

  // TC-0001
  test("register with invalid email", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.doRegister(
      process.env.USER_NAME,
      process.env.USER_USERNAME,
      "invalidemail",
      process.env.USER_PASSWORD,
      process.env.USER_PASSWORD
    );
    await registerPage.checkEmailError();
  });

  test("register with invalid password", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.doRegister(
      process.env.USER_NAME,
      process.env.USER_USERNAME,
      process.env.USER_EMAIL,
      "invalidpassword",
      process.env.USER_PASSWORD
    );
    await registerPage.checkPasswordError();
  });

  test("register with invalid password confirmation", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.doRegister(
      process.env.USER_NAME,
      process.env.USER_USERNAME,
      process.env.USER_EMAIL,
      process.env.USER_PASSWORD,
      "invalidpassword"
    );
    await registerPage.checkConfirmPasswordError();
  });

  test("register with repeated username or email", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.doRegister(
      process.env.USER_NAME,
      process.env.USER_USERNAME,
      process.env.USER_EMAIL,
      process.env.USER_PASSWORD,
      process.env.USER_PASSWORD
    );
    await registerPage.doRegister(
      process.env.USER_NAME,
      process.env.USER_USERNAME,
      process.env.USER_EMAIL,
      process.env.USER_PASSWORD,
      process.env.USER_PASSWORD
    );
    await registerPage.checkError();
  })

  // TC-0003
  test("register with valid data", async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.doRegister("mmm", "mmm", "mmm", "mmm", "mmm");
    await registerPage.checkError();
  });
});

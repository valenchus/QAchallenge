// @ts-check
import "dotenv/config";
const { test } = require("@playwright/test");
import { RegisterPage } from "../../pageObjects/register.pageObject";

test.describe("register user", () => {

  test("register to the page", async ({ page }) => {
    const registerPage = new RegisterPage(page);  
    await registerPage.doRegister("mmm", "mmm", "m@m.com", "Asdasd*123", "Asdasd*123");
    await registerPage.checkRegister();
  });
});
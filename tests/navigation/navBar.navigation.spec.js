import "dotenv/config";
const { test, expect } = require("@playwright/test");
import { NavBarPage } from "../../pageObjects/navBar.pageObject";
import { HomePage } from "../../pageObjects/home.pageObject";
import { LoginPage } from "../../pageObjects/login.pageObject";

test.describe("Nav bar", () => {


    test.only("Check nav bar", async ({ page }) => {
    
        const navBarPage = new NavBarPage(page);
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await loginPage.doLogin(process.env.USER_USERNAME, process.env.USER_PASSWORD)

        await page.waitForTimeout(1000)
        let name = await homePage.firstTweetName()
        name = name.charAt(0).toUpperCase() + name.slice(1);
    
        await navBarPage.clickPerfil()
        await navBarPage.checkPerfilHeading(name)

        await navBarPage.clickInicio()

        await navBarPage.clickMensajes()

        await navBarPage.clickExplorar()    
    })
})

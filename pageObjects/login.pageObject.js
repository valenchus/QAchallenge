const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator("xpath=//input[contains(@aria-label, 'Username')]");
    this.passwordInput = page.locator("xpath=//input[contains(@aria-label, 'Password')]");
    this.loginButton = page.locator("xpath=//button[contains(text(), 'Login')]");
    this.registerButton = page.locator("xpath=//button[contains(text(), 'Register')]");
    this.errorLabel = page.locator("xpath=(//label[contains(@class, 'sc-hBpgZr dqbdjj sc-eEyyFR iJqsrx')])[1]");
  }

  async goToRegister() {
    await this.registerButton.click();
  }
  
  async fillUsername(username) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async doLogin(username, password) {
    await this.page.goto(process.env.BASE_URL + "/login");
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.loginButton.click();
  }

  async checkLogin() {
    await expect(this.page).toHaveURL(process.env.BASE_URL);
  }

  async checkLoginError() {
    await expect(this.errorLabel).toBeVisible();
    await expect(this.page).toHaveURL(process.env.BASE_URL + "/login");
  }
};
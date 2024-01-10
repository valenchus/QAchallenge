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
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.loginButton.click();
    await expect(this.page).toHaveURL('https://frontend-training-taupe.vercel.app');
  }
};
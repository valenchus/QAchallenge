const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[1]/input');
    this.passwordInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[2]/input');
    this.loginButton = page.locator('xpath=//*[@id="root"]/div/div/div/form/button');
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
  }

  async checkLogin() {
    await expect(this.page).toHaveURL('https://frontend-training-taupe.vercel.app');
  }
};
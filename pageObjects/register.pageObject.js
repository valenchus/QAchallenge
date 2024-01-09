const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.nameInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[1]/input');
    this.usernameInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[2]/input');
    this.emailInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[3]/input');
    this.passwordInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[4]/input');
    this.confirmPasswordInput = page.locator('xpath=//*[@id="root"]/div/div/div/form/div[5]/input');
    this.registerButton = page.locator('xpath=//*[@id="root"]/div/div/div/form/button');
  }
  
  async fillName(name) {
    await this.nameInput.click();
    await this.nameInput.fill(name);
  }

  async fillUsername(username) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }

  async fillEmail(email) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
  }

  async fillPassword(password) {
    await this.passwordInput.click();
    await this.passwordInput.fill(password);
  }

  async fillConfirmPassword(confirmPassword) {
    await this.confirmPasswordInput.click();
    await this.confirmPasswordInput.fill(confirmPassword);
  }

  async doRegister(name, username, email, password, confpassword) {
    await this.fillName(username);
    await this.fillUsername(username);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillConfirmPassword(confpassword);
    await this.registerButton.click();
  }

  async checkRegister() {
    await expect(this.page).toHaveURL('https://frontend-training-taupe.vercel.app');
  }
};
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.newTweetButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA auIOZ sc-cOqaIB cpCSpb') and contains(text(), 'Tweet')]");
    this.modalTweetButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA eheooK') and contains(text(), 'Tweet')]");
    this.modalTweetTextArea = page.locator("xpath=//textarea");

    this.firstTweet = page.locator("xpath=(//div[contains(@class, 'sc-dtgxmn jobacT')])[1]");

    this.threeDotButton = page.locator("xpath=//div[contains(@class, 'sc-jOHGOj jaNlsc')]");
    this.logOutButton = page.locator("xpath=//div[contains(@class, 'sc-hTJqdO lbWFQX')]//div[contains(text(), 'Log out')]")
    this.modalLogOutButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA caRJvg')]")
  }

  async newTweet(body) {
    await this.newTweetButton.click();
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkTweet(body) {
    await expect(this.firstTweet).toHaveText(body);
  }

  async logOut() {
    await this.threeDotButton.click();
    await this.logOutButton.click();
    await modalLogOutButton.click();
    await expect(this.page).toHaveURL(process.env.BASE_URL + "/login");
  }
};
const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.newTweetButton = page.locator('xpath=//*[@id="root"]/div/div/div[1]/div/button');
    this.modalTweetButton = page.locator('xpath=//*[@id="root"]/div/div/div[1]/div/div[2]/div/div/div/div/div/div[2]/div[2]/button');
    this.modalTweetTextArea = page.locator('xpath=//*[@id="root"]/div/div/div[1]/div/div[2]/div/div/div/div/div/div[1]/textarea');
    this.firstTweet = page.locator('xpath=//*[@id="root"]/div/div/main/div[2]/div[2]');
  }
  
  async newTweet(body) {
    await this.newTweetButton.click();
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkTweet(body) {
    await expect(this.firstTweet).toContainText(body);
  }
};
const { expect } = require('@playwright/test');
import path from 'path';

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
    this.postModalError = page.locator("xpath=(//label[contains(@class, 'sc-hBpgZr dqbdjj')])[1]")
    this.uploadImageInput = page.locator("xpath=//input[contains(@id, 'file-input')]")
    this.postImage = page.locator("xpath=(//div[contains(@class, 'sc-fEyylQ jbGfBU sc-cZhcFc liBIsr')]//img)[1]")
    this.commentButton = page.locator("xpath=(//img[contains(@alt, 'chat-icon')])[1]")
    this.firstCommentText = page.locator("xpath=(//div[contains(@class, 'sc-dktgqL bwzhgt')]//div[contains(@class, 'sc-tIxES jRRtdU')]//div[contains(@class, 'sc-dtgxmn jobacT')]//div)[1]")
  }

  async newTweet(body) {
    await this.newTweetButton.click();
    await expect(this.modalTweetButton.isDisabled()).toBe(true)
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkBodyTweet(body) {
    await expect(this.firstTweet).toHaveText(body);
  }

  async checkImageTweet() {
    await expect(this.postImage).toBeVisible();
  }

  async logOut() {
    await this.threeDotButton.click();
    await this.logOutButton.click();
    await modalLogOutButton.click();
    await expect(this.page).toHaveURL(process.env.BASE_URL + "/login");
  }

  async checkModalError() {
    await expect(this.postModalError).toBeVisible();
  }

  async newTweetWithImage(body) {
    await this.newTweetButton.click();
    await expect(this.modalTweetButton.isDisabled()).toBe(true)
    await this.modalTweetTextArea.fill(body);
    await this.uploadImageInput.setInputFiles(path.join(__dirname, 'files/perrito.jpg'));
    await this.modalTweetButton.click();
  }

  async newComment(body) {
    await this.commentButton.click();
    await expect(this.modalTweetButton.isDisabled()).toBe(true)
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkBodyComment(body) {
    await expect(this.firstCommentText).toHaveText(body);
  }
};
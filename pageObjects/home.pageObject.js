const { expect } = require('@playwright/test');
import path from 'path';

const retweetIconSrc = "/static/media/retweet-icon.f7273f0d85063773ad8ecb2cb99a95ff.svg"
const activeRetweetIconSrc = "/static/media/retweet-icon-toggled.7353f9e0e1181b7a60dbc9bc2a935814.svg"
const likeIconSrc = "/static/media/like-icon.f59f9bb0f953f69eb79ee0af6b742161.svg"
const activeLikeIconSrc = "/static/media/like-icon-toggled.6dc7027a7c91bce8701e48acc6ad6d32.svg"

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    this.newTweetButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA auIOZ sc-cOqaIB cpCSpb') and contains(text(), 'Tweet')]");
    this.modalTweetButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA eheooK') and contains(text(), 'Tweet')]");
    this.modalTweetTextArea = page.locator("xpath=//textarea");
    this.modalTweetError = page.locator("xpath=(//label[contains(@class, 'sc-hBpgZr dqbdjj')])[1]")
    this.uploadImageInput = page.locator("xpath=//input[contains(@id, 'file-input')]")

    this.threeDotButton = page.locator("xpath=//div[contains(@class, 'sc-jOHGOj jaNlsc')]");
    this.logOutButton = page.locator("xpath=//div[contains(@class, 'sc-hTJqdO lbWFQX')]//div[contains(text(), 'Log out')]")
    this.modalLogOutButton = page.locator("xpath=//button[contains(@class, 'sc-ksJisA caRJvg')]")
    
    this.searchInput = page.locator("xpath=//input[contains(@placeholder, 'Search Twitter')]")
    this.resultsDiv = page.locator("xpath=//div[contains(@class, 'sc-ZiJuh fmNjnN')]")
    
    this.firstProfileImage = page.locator("xpath=(//div[contains(@class, 'sc-fwdjSP CoZFp')]//div[contains(@class, 'sc-ipMvLY eAZYCx')])[1]")
    this.firstName = page.locator("xpath=(//div[contains(@class, 'sc-fwdjSP CoZFp')]//div[contains(@class, 'sc-fcdPlE cMbONl')])[1]")
    this.firstTweet = page.locator("xpath=(//div[contains(@class, 'sc-dtgxmn jobacT')])[1]");
    this.firstTweetImage = page.locator("xpath=(//div[contains(@class, 'sc-fEyylQ jbGfBU sc-cZhcFc liBIsr')]//img)[1]")
    this.imageFromModal = page.locator("xpath=//img[contains(@class, 'sc-kDnyCx dPnxip')]")
    this.divOutsideImageModal = page.locator("xpath=//div[contains(@class, 'sc-iBAaJG dqKQza')]")
    this.closeTweetImageButton = page.locator("xpath=//button[contains(@class, 'sc-pqitP jyAbil')]")
    this.firstCommentText = page.locator("xpath=(//div[contains(@class, 'sc-dktgqL bwzhgt')]//div[contains(@class, 'sc-tIxES jRRtdU')]//div[contains(@class, 'sc-dtgxmn jobacT')]//div)[1]")
    
    this.firstTweetCommentButton = page.locator("xpath=(//img[contains(@alt, 'chat-icon')])[1]")
    this.firstTweetCommentCounter = page.locator("xpath=(//div[contains(@class, 'sc-bhFOXJ fJDhtc')])[1]//label[1]")
    this.firstTweetRetweetButton = page.locator("xpath=(//img[contains(@alt, 'retweet-icon')])[1]")
    this.firstTweetRetweetCounter = page.locator("xpath=(//div[contains(@class, 'sc-bhFOXJ fJDhtc')])[1]//label[2]")
    this.firstTweetLikeButton = page.locator("xpath=(//img[contains(@alt, 'like-icon')])[1]")
    this.firstTweetLikeCounter = page.locator("xpath=(//div[contains(@class, 'sc-bhFOXJ fJDhtc')])[1]//label[3]")
  
  }

  async newTweet(body) {
    await this.newTweetButton.click();
    await expect(this.modalTweetButton).toBeDisabled()
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkBodyTweet(body) {
    await expect(this.firstTweet).toHaveText(body);
  }

  async checkImageTweet() {
    await expect(this.firstTweetImage).toBeVisible();
  }

  async logOut() {
    await this.threeDotButton.click();
    await this.logOutButton.click();
    await modalLogOutButton.click();
    await expect(this.page).toHaveURL(process.env.BASE_URL + "/login");
  }

  async checkModalError() {
    await expect(this.modalTweetError).toBeVisible();
  }

  async newTweetWithImage(body) {
    await this.newTweetButton.click();
    await expect(this.modalTweetButton).toBeDisabled()
    await this.modalTweetTextArea.fill(body);
    await this.uploadImageInput.setInputFiles(path.join(__dirname, 'files/perrito.jpg'));
    await this.modalTweetButton.click();
  }

  async newComment(body) {
    await this.commentButton.click();
    await expect(this.modalTweetButton).toBeDisabled()
    await this.modalTweetTextArea.fill(body);
    await this.modalTweetButton.click();
  }

  async checkBodyComment(body) {
    await expect(this.firstCommentText).toHaveText(body);
  }

  async commentCounterValue() {
    return Number(await this.firstTweetCommentCounter.innerText())
  }

  async retweetCounterValue() {
    return Number(await this.firstTweetRetweetCounter.innerText())
  }

  async like() {
    const previousValue = await this.firstTweetLikeCounter.innerText()
    await expect(this.firstTweetLikeButton).toHaveAttribute('src', likeIconSrc)
    await this.firstTweetLikeButton.click();
    await expect(this.firstTweetLikeCounter).toHaveText(String(Number(previousValue) + 1));
    await expect(this.firstTweetLikeButton).toHaveAttribute('src', activeLikeIconSrc)
  }

  async retweet() {
    const previousValue = await this.firstTweetRetweetCounter.innerText()
    await expect(this.firstTweetRetweetButton).toHaveAttribute('src', retweetIconSrc)
    await this.firstTweetLikeButton.click();
    await expect(this.firstTweetRetweetCounter).toHaveText(String(Number(previousValue) + 1));
    await expect(this.firstTweetLikeButton).toHaveAttribute('src', activeRetweetIconSrc)
  }

  async openPostImage() {
    await this.firstTweetImage.click();
  }

  async checkImageModalVisible() {
    await expect(this.imageFromModal).toBeVisible();
  }

  async checkImageModalNotVisible() {
    await expect(this.imageFromModal).not.toBeVisible();
  }

  async closePostImage() {
    await this.closeTweetImageButton.click();
  }

  async clickOutsideImageModal() {
    await this.divOutsideImageModal.click();
  }

  async openPost() {
    await this.firstTweet.click();
  }

  async fillSearchInput(text) {
    await this.searchInput.fill(text);
  }

  async checkResultsContent(text) {
    await expect(this.resultsDiv).toContainText(text);
  }

  async clickProfileImage() {
    await this.firstProfileImage.click();
  }

  async firstNameText() {
    return await this.firstName.innerText();
  }
};
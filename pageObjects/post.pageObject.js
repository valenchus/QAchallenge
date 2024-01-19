const { expect } = require('@playwright/test');

exports.PostPage = class PostPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.heading = page.locator("xpath=//h1[text() = 'Tweet']");
    this.name = page.locator("xpath=//div[contains(@class, 'sc-fcdPlE cMbONl')]");
    this.postText = page.locator("xpath=(//div[contains(@class, 'sc-dtgxmn jobacT')]//div)[1]");
  }

  async checkHeading(heading) {
    await expect(this.heading).toHaveText(heading);
  }

  async checkName(name) {
    await expect(this.name).toHaveText(name);
  }

  async checkPostText(text) {
    await expect(this.postText).toHaveText(text);
  }
};
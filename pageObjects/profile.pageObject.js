const { expect } = require('@playwright/test');

exports.ProfilePage = class ProfilePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.heading = page.locator("xpath=//div[contains(@class, 'sc-gJgZMk bJpLtg')]");
    this.name = page.locator("xpath=//div[contains(@class, 'sc-gUkKNk kUgFSn')]");
    this.username = page.locator("xpath=//div[contains(@class, 'sc-fWzlon fPDpVt')]");
  }

  async checkHeading(heading) {
    await expect(this.heading).toHaveText(heading);
  }

  async checkName(name) {
    await expect(this.name).toHaveText(name);
  }

  async checkUsername(username) {
    await expect(this.username).toHaveText(username);
  }
};
exports.MyAccountPage = class MyAccountPage {
  constructor(page) {
    this.page = page;
    this.headerPage = "//h2[normalize-space()='My Account']";
  }

  async validateHeaderPage() {
    try {
      await this.page.waitForSelector(this.headerPage, { state: "visible" });
      return await this.page.locator(this.headerPage).isVisible();
    } catch (error) {

      return false;
    }
  }
}
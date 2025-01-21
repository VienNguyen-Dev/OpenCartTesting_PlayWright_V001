exports.MyAccountPage = class MyAccountPage {
  constructor(page) {
    this.page = page;
    this.headerPage = "//h2[normalize-space()='My Account']";
  }

  async validateHeaderPage() {
    try {
      await this.page.waitForSelector(this.headerPage, { state: "visible" });
      console.log(await this.page.locator(this.headerPage).isVisible())
      return await this.page.locator(this.headerPage).isVisible();
    } catch (error) {

      console.error("Error waiting for header:", error);

      throw new Error("Header element not found");
    }
  }
}
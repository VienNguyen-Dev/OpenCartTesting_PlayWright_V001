exports.AccountSuccessPage = class {
  constructor(page) {
    this.page = page;
    this.messageText = "#content h1";
  }
  async checkConfirmMessage() {
    try {
      await this.page.waitForSelector(this.messageText, { state: "visible" });
      return this.page.locator(this.messageText).textContent();

    } catch (error) {
      return null;
    }
  }
}
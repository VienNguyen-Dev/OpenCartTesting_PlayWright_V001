exports.AccountSuccessPage = class {
  constructor(page) {
    this.page = page;
    this.messageText = "#content h1";
  }
  async checkConfirmMessage() {
    await this.page.waitForSelector(this.messageText, { state: "visible" });
    return this.page.locator(this.messageText).textContent();
  }
}
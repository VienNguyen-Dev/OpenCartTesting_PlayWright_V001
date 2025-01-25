import { HomePage } from "./HomePage";

export class AccountLogoutPage {
  constructor(page) {
    this.page = page;
    this.continueButton = "//a[normalize-space()='Continue']";

  }

  async clickOnContinueButton() {
    try {
      await this.page.click(this.continueButton);
      const hp = new HomePage(this.page);
      return hp;
    } catch (error) {
      console.log("Error while clicking on Continue button", error.message);
      return null;

    }
  }
}
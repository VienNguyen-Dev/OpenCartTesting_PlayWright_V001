import { MyAccountPage } from './MyAccountPage'

export class AccountSuccessPage {
  constructor(page) {
    this.page = page;
    this.messageText = "#content h1";
    this.continueButton = "//a[normalize-space()='Continue']"
  }
  async checkConfirmMessage() {
    try {
      return this.page.locator(this.messageText).textContent();

    } catch (error) {
      return "";
    }
  }

  async clickOnContinueButton() {
    try {
      await this.page.click(this.continueButton);
      const myAccountPage = new MyAccountPage(this.page);
      return myAccountPage;
    } catch (error) {
      console.log("Error while click on Continue button", error.message);
      return null;

    }
  }
}
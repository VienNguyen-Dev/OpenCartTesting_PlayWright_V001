import { AccountSuccessPage } from './AccountSuccessPage'
export class RegisterPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = "//input[@id='input-firstname']";
    this.lastNameInput = "//input[@id='input-lastname']";
    this.emailInput = "//input[@id='input-email']";
    this.telephoneInput = "//input[@id='input-telephone']";
    this.passwordInput = "//input[@id='input-password']";
    this.passwordConfirmInput = "//input[@id='input-confirm']";
    this.policyCheckbox = "//input[@name='agree']";
    this.continueButton = "//input[@value='Continue']";
  }

  async provideAccountDetails(firstName, lastName, email, telephone, password) {
    try {
      await this.page.fill(this.firstNameInput, firstName);
      await this.page.fill(this.lastNameInput, lastName);
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.telephoneInput, telephone);
      await this.page.fill(this.passwordInput, password);
      await this.page.fill(this.passwordConfirmInput, password);
      await this.page.click(this.policyCheckbox);

    } catch (error) {
      console.log(error.message);
    }

  }

  async clickOnRegisterButton() {
    try {
      await this.page.click(this.continueButton);
      const succAccountPage = new AccountSuccessPage(this.page);
      return succAccountPage;
    } catch (error) {
      console.log("Error while clicking on Register button", error);
      return null;
    }
  }
}
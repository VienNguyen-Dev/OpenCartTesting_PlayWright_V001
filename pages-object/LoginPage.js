const { MyAccountPage } = require("./MyAccountPage");

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = "//input[@id='input-email']";
    this.passwordInput = "//input[@id='input-password']";
    this.loginButton = "//input[@value='Login']";
  }

  async login(email, password) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);

  }

  async clickOnLoginButton() {
    try {
      await this.page.click(this.loginButton);
      const myaccountPage = new MyAccountPage(this.page);
      return myaccountPage;
    } catch (error) {
      console.log("Error while clicking on Login Button", error.message)
        ;
      return null;
    }
  }
}
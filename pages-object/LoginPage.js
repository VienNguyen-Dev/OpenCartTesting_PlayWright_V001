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
    await this.page.click(this.loginButton);
  }


}
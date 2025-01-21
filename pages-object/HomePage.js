exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;
    this.dropdownMenu = "//span[normalize-space()='My Account']";
    this.registerLink = "//a[normalize-space()='Register']";
    this.loginLink = "//a[normalize-space()='Login']";
  }

  async clickOnDropdownMenu() {
    await this.page.click(this.dropdownMenu);
  }

  async clickOnRegister() {
    await this.page.click(this.registerLink);

  }

  async clickOnLogin() {
    await this.page.click(this.loginLink);
  }
}
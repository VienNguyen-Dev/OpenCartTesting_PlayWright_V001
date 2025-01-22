const { ProductResultPage } = require("./ProductResultPage");

exports.HomePage = class HomePage {

  constructor(page) {
    this.page = page;
    this.dropdownMenu = "//span[normalize-space()='My Account']";
    this.registerLink = "//a[normalize-space()='Register']";
    this.loginLink = "//a[normalize-space()='Login']";
    this.searchTextBox = "//input[@placeholder='Search']";
    this.searchButton = "//button[@class='btn btn-default btn-lg']";
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

  async provideProductName(productName) {
    await this.page.fill(this.searchTextBox, productName);
  }

  async clickOnSearchButton() {
    try {
      await this.page.click(this.searchButton);
      const productResultPage = new ProductResultPage(this.page);
      return productResultPage;
    } catch (error) {
      return null;
    }
  }
}
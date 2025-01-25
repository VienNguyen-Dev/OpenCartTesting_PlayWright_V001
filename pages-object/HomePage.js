const { ProductResultPage } = require("./ProductResultPage");
const { RegisterPage } = require("./RegisterPage");
import { LoginPage } from './LoginPage'

export class HomePage {

  constructor(page) {
    this.page = page;
    this.dropdownMenu = "//span[normalize-space()='My Account']";
    this.registerLink = "//a[normalize-space()='Register']";
    this.loginLink = "//a[normalize-space()='Login']";
    this.searchTextBox = "//input[@placeholder='Search']";
    this.searchButton = "//button[@class='btn btn-default btn-lg']";
    this.featureProductList = "//div[@id='content']//div[@class='image']//img";
  }

  async clickOnDropdownMenu() {
    await this.page.click(this.dropdownMenu);
  }

  async clickOnRegister() {
    await this.page.click(this.registerLink);
    const regPage = new RegisterPage(this.page);
    return regPage;

  }

  async clickOnLogin() {
    await this.page.click(this.loginLink);
    const loginPage = new LoginPage(this.page);
    return loginPage;
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

  async homePageExist() {
    try {
      const productLists = await this.page.$$(this.featureProductList);
      return await productLists.length;
    } catch (error) {
      console.log("Home Page is not exist", error.message);
      return null;
    }
  }
}
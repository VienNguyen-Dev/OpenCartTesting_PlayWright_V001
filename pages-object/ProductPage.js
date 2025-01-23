const { ShoppingCartPage } = require("./ShoppingCartPage");

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartBtn = "//button[@id='button-cart']";
    this.successMsg = "//div[@class='alert alert-success alert-dismissible']";
    this.shoppingCartLink = "//a[normalize-space()='shopping cart']";
  }

  async clickOnAddToCartBtn() {
    try {
      await this.page.click(this.addToCartBtn);
    } catch (error) {
      console.log("Disbale to click on Add to Cart Button", error)
    }
  }

  async clickOnShoppingCartLink() {
    try {
      await this.page.click(this.shoppingCartLink);
      const shoppingCartPage = new ShoppingCartPage(this.page);
      return shoppingCartPage;
    } catch (error) {
      console.log("Disable to click on shopping cart link", error);
      return null;
    }
  }

  async confirmSuccessMessage() {
    try {
      return await this.page.locator(this.successMsg).textContent();
    } catch (error) {

    }
  }
}
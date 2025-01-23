const { ProductPage } = require("./ProductPage");

exports.ProductResultPage = class ProductResultPage {
  constructor(page) {
    this.page = page;
    this.listProduct = "//div[@id='content']//img";
    this.productResultHeaderPage = "//div[@id='content']//h1";
  }

  async isProductResultPageExist() {
    try {
      const header = await this.page.locator(this.productResultHeaderPage).textContent();
      return await header.includes("Search -");
    } catch (error) {
      return false;
    }
  }

  async isProductNameExist(productName) {
    try {
      const listProducts = await this.page.$$(this.listProduct);
      for (const product of listProducts) {
        const productNameInList = await product.getAttribute("title");
        if (await productNameInList === productName) {
          return true;
        }
      }
      return false;
    } catch (error) {
      return false;
    }

  }
  async selectProductByName(productName) {
    try {
      const listProducts = await this.page.$$(this.listProduct);
      for (const product of listProducts) {
        const productNameInList = await product.getAttribute("title");
        if (await productNameInList === productName) {
          await product.click();
          const productPage = new ProductPage(this.page);
          return productPage;
        }
      }
    } catch (error) {
      console.log(`Product Name with ${productName} is not exists`, error.message);
      return null;
    }
  }
}
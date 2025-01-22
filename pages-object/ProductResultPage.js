exports.ProductResultPage = class ProductResultPage {
  constructor(page) {
    this.page = page;
    this.listProduct = "//div[@id='content']//h4";
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
      const listProduct = await this.page.locator(this.listProduct);
      for (let product = 0; product < listProduct; product++) {
        const productNameInList = await product.textContent();
        if (productNameInList === productName) {
          return true;
        }
      }
      return false;
    } catch (error) {
      return false;
    }

  }
  async selectProductByName(productName) {
    let productPage;
    const listProduct = await this.page.locator(this.listProduct);
    for (let product = 0; product < listProduct; product++) {
      const productNameInList = await product.textContent();
      if (productNameInList === productName) {
        productPage = await product.click();
        break;
      }
    }

  }
}
exports.ShoppingCartPage = class ShoppingCartPage {
  constructor(page) {
    this.page = page;
    this.productNameInShoppingCart = "//*[@id='content']//td[2]/a";

  }

  async validateProductAddedToCart(productName) {
    try {

      if (await this.page.locator(this.productNameInShoppingCart).textContent() === productName) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("Product don't added to Shopping Cart", error.message)
      return false;
    }
  }
}
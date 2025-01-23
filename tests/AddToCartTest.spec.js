import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { HomePage } from '../pages-object/HomePage'

dotenv.config();

test.describe("AddToCart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APPURL);
    await page.waitForTimeout(3000);

  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })
  //Test Case:
  // 1. Search Product
  // 2. Select product proper with product name
  // 3. Click on Add to Cart buton
  // 4. Validate

  test("Add To Cart Functionality Testing", async ({ page }) => {
    const hp = new HomePage(page);
    let productName = process.env.SEARCHPRODUCTNAME
    await hp.provideProductName(productName);
    const proResultPage = await hp.clickOnSearchButton();
    await page.waitForTimeout(3000);



    if (await proResultPage.isProductNameExist(productName) === true) {
      const productPage = await proResultPage.selectProductByName(productName);
      await page.waitForTimeout(3000);
      await productPage.clickOnAddToCartBtn();
      expect(await productPage.confirmSuccessMessage()).toContain("Success: You have added");
      const shoppingCartPage = await productPage.clickOnShoppingCartLink();
      expect(await shoppingCartPage.validateProductAddedToCart(productName)).toBe(true);
      await page.waitForTimeout(2000);
    }
  })
})
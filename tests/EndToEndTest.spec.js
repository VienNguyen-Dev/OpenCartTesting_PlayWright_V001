import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
import { HomePage } from '../pages-object/HomePage'
import { BaseClass } from './BaseClass';
import { AccountSuccessPage } from '../pages-object/AccountSuccessPage';
import { ProductPage } from '../pages-object/ProductPage';


dotenv.config();


let page;
test.describe("End To End Testing", () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  })

  // test.afterAll(async () => {
  //   await page.close();
  // })
  // Test Case:
  // 1. Perform Register new Account
  // 2. Logout from the Application
  // 3. Login with email address registered
  //4. Search product
  // 5. Add product to cart
  // 6. Validate Shopping Cart
  test("EndToEndTest", async () => {
    await page.goto(process.env.APPURL);
    const password = process.env.PASSWORD;
    const productName = process.env.SEARCHPRODUCTNAME;
    //Perform Register new Account
    const email = await performRegisterAccount(page);
    await page.waitForTimeout(3000);
    //Perform Logout from the application
    await performLogout(page);
    //Perform Login with email address registered;
    await performLogin(page, email, password);
    //Pefrom Add Product with Product Name to Cart
    await performAddProductToCart(page, productName);
    //Perform Validate Product in shopping cart
    await validateProductShoppingCart(page, productName);


    await page.waitForTimeout(3000);
  })

})
async function performRegisterAccount(page) {
  const homePage = new HomePage(page);
  await homePage.clickOnDropdownMenu();
  const regPage = await homePage.clickOnRegister();
  const baseClass = new BaseClass();
  const firstName = baseClass.randomString();
  const lastName = baseClass.randomString();
  const email = baseClass.randomStringAndNumber() + "gmail.com";
  const telephone = baseClass.randomNumber();
  const password = process.env.PASSWORD;

  await regPage.provideAccountDetails(firstName, lastName, email, telephone, password);
  const succAccountPage = await regPage.clickOnRegisterButton();
  expect.soft(await succAccountPage.checkConfirmMessage()).toBe("Your Account Has Been Created!");
  return email;

}

async function performLogout(page) {
  const succAccountPage = new AccountSuccessPage(page);
  const myAccountPage = await succAccountPage.clickOnContinueButton();
  // await myAccountPage.clickOnDropdownMenu();
  // await page.waitForTimeout(3000);
  const accountLogoutPage = await myAccountPage.clickOnLogoutLink();
  const homePage = await accountLogoutPage.clickOnContinueButton();
  expect.soft(await homePage.homePageExist()).toBe(4);
}

async function performLogin(page, email, password) {

  const homePage = new HomePage(page);
  await homePage.clickOnDropdownMenu();
  const loginPage = await homePage.clickOnLogin()
  await loginPage.login(email, password);
  const myAccountPage = await loginPage.clickOnLoginButton();
  expect.soft(await myAccountPage.validateHeaderPage()).toBe(true);
  await myAccountPage.clickOnLogo();
}

async function performAddProductToCart(page, productName) {
  const homePage = new HomePage(page);
  await homePage.provideProductName(productName);
  const proResultPage = await homePage.clickOnSearchButton();
  if (await proResultPage.isProductNameExist(productName) === true) {
    const productPage = await proResultPage.selectProductByName(productName);
    await page.waitForTimeout(3000);
    await productPage.clickOnAddToCartBtn();
    expect.soft(await productPage.confirmSuccessMessage()).toContain("Success: You have added");
  }
}

async function validateProductShoppingCart(page, productName) {

  const productPage = new ProductPage(page);
  const scPage = await productPage.clickOnShoppingCartLink();
  expect.soft(await scPage.validateProductAddedToCart(productName)).toBe(true);

}
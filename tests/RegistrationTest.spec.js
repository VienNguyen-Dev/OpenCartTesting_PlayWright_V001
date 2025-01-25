import { test, expect } from '@playwright/test';
import { HomePage } from '../pages-object/HomePage';
import { BaseClass } from './BaseClass';
import { RegisterPage } from '../pages-object/RegisterPage';
import dotenv from 'dotenv';
dotenv.config();

test.describe("Register new account Testing", async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APPURL);
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })
  test("TC_001_RegistrationFunctionality", async ({ page }) => {
    const baseClass = new BaseClass();
    const homePage = new HomePage(page);
    await homePage.clickOnDropdownMenu();
    await homePage.clickOnRegister();
    await page.waitForTimeout(3000);
    //Provide details new account
    const regPage = new RegisterPage(page);
    const password = baseClass.randomStringAndNumber();
    const email = baseClass.randomStringAndNumber() + "gmail.com";
    regPage.provideAccountDetails(baseClass.randomString(), baseClass.randomString(), email, baseClass.randomNumber(), password);
    const accSuccessPage = await regPage.clickOnRegisterButton();
    await page.waitForTimeout(3000);
    expect(await accSuccessPage.checkConfirmMessage()).toBe("Your Account Has Been Created!");
    await page.waitForTimeout(3000);

  })

})

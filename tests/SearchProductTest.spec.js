import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'
import { HomePage } from '../pages-object/HomePage';

dotenv.config();

test.describe("SearchProductTest", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APPURL);
    await page.waitForTimeout(3000);
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })

  test("Search Product Test", async ({ page }) => {
    const hp = new HomePage(page);
    await hp.provideProductName(process.env.SEARCHPRODUCTNAME);
    const proResultPage = await hp.clickOnSearchButton();
    await page.waitForTimeout(3000);
    //Validate product name and product Page
    expect(await proResultPage.isProductResultPageExist()).toBe(true);
    await page.waitForTimeout(3000);
    expect(await proResultPage.isProductNameExist(process.env.SEARCHPRODUCTNAME)).toBe(true);
    await page.waitForTimeout(3000);

  })
})
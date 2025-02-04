import { test, expect } from '@playwright/test';
import { HomePage } from '../pages-object/HomePage';
import { LoginPage } from '../pages-object/LoginPage';
import dotenv from 'dotenv';

dotenv.config();
test.beforeEach(async ({ page }) => {
  await page.goto(process.env.APPURL);
})

test.afterEach(async ({ page }) => {
  await page.close();
})

test("TC_002_Login_Functionality", async ({ page }) => {
  const homePage = new HomePage(page);
  homePage.clickOnDropdownMenu();
  homePage.clickOnLogin();
  await page.waitForTimeout(3000);
  const loginPage = new LoginPage(page);
  await loginPage.login(process.env.EMAIL, process.env.PASSWORD);
  const myAccountPage = await loginPage.clickOnLoginButton();
  await page.waitForTimeout(2000);
  const pageHeaderStatus = await myAccountPage.validateHeaderPage();
  expect(pageHeaderStatus).toBe(true);
  await page.waitForTimeout(3000);
})
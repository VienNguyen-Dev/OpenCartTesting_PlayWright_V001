import { test, expect } from '@playwright/test';
import XLSX from 'xlsx';
import { ExcelUtility } from '../utilities/ExcelUtility';
import dotenv from 'dotenv';
import { HomePage } from '../pages-object/HomePage';
import { LoginPage } from '../pages-object/LoginPage';

dotenv.config();

test.describe('Login Functionality Testing', () => {
  const excelUtility = new ExcelUtility();
  const testData = excelUtility.readExcelData('Sheet1');

  testData.forEach((data) => {
    test(`Login with ${data.username}`, async ({ page }) => {
      await page.goto(process.env.APPURL);
      const hp = new HomePage(page);
      await hp.clickOnDropdownMenu();
      await hp.clickOnLogin();
      await page.waitForTimeout(3000);

      const lp = new LoginPage(page);
      await lp.login(data.username, data.password);
      await page.waitForTimeout(3000);

    });
  });
});

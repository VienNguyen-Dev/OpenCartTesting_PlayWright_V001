import { test, expect } from '@playwright/test';
import dotenv from 'dotenv'

dotenv.config();

test.describe("SearchProductTest", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(process.env.APPURL);
    await page.waitForTimeout(3000);
  })

  test.afterEach(async ({ page }) => {
    await page.close();
  })
})
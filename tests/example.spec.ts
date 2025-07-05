import { test, expect } from '@playwright/test';
import {PageManager} from '../Pages/pageManager';

test.skip('has title', async ({ page }) => {
  await page.goto('https://saucedemo.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('get started link', {tag: ['@smoke']}, async ({ page }) => {
  const pm = new PageManager(page);
  await page.goto('/');
  await expect(page.locator('//*[@id="root"]/div/div[1]', { hasText: 'Swag Labs' })).toBeVisible();
  await pm.onLoginPage().performLogin();
  await expect(page.locator('.app_logo', { hasText: 'Swag Labs' })).toBeVisible();
  // Choose the first T-Shirt
  await page.locator('xpath = //*[@id="item_1_title_link"]/div').click();
  await pm.onProductDetailsPage().addProductToCart();
  expect(page.locator('xpath = //*[@id="remove"]', {hasText: 'Remove'}).isVisible()).toBeTruthy();
  await pm.onProductsPage().navigateToCartPage();
  await pm.onCartPage().checkoutProduct();
  await pm.onCheckoutYourInfoPage().fillInInfo();
  await pm.onCheckoutYourInfoPage().clickContinueButton();
  await pm.onCheckoutOverviewPage().clickFinishButton();
  await pm.onCheckoutConfirmationPage().verifyOrderSuccessMessage();
});
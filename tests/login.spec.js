import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  await expect(page.locator('.flash.success')).toContainText(
    'You logged into a secure area!'
  );
});

test('login fails with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'wrongpassword');

  await expect(page.locator('.flash.error')).toContainText(
    'Your password is invalid!'
  );
});
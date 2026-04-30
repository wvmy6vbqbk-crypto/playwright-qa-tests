import { test, expect } from '@playwright/test';

test('successful login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  await page.click('button[type="submit"]');

  await expect(page.locator('.flash.success')).toContainText(
    'You logged into a secure area!'
  );
});

test('login fails with wrong password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page.locator('.flash.error')).toContainText(
    'Your password is invalid!'
  );
});
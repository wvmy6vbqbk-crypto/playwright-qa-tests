import { test, expect } from '@playwright/test';

test('navigate to login page from homepage', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Form Authentication').click();

  await expect(page).toHaveURL(/login/);
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});
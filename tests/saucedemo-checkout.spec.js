const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('SauceDemo Checkout Flow', () => {

  test('Complete purchase successfully', async ({ page }) => {

    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await expect(products.title).toHaveText('Products');

    await products.addBackpackToCart();
    await products.openCart();

    await expect(cart.cartItem).toHaveCount(1);

    await cart.proceedToCheckout();

    await checkout.fillInformation(
      'Julia',
      'Becea',
      '68159'
    );

    await checkout.finishOrder();

    await expect(checkout.completeHeader).toContainText(
      'Thank you for your order!'
    );
  });

  test('Show error for invalid login', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'wrong_password');

  await expect(login.errorMessage).toContainText(
    'Username and password do not match'
  );
});

test('Sort products by name descending', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.sortByNameDescending();

  await expect(products.productNames.first()).toHaveText(
    'Test.allTheThings() T-Shirt (Red)'
  );
});

test('Remove product from cart', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.addBackpackToCart();
  await expect(cart.cartBadge).toHaveText('1');

  await products.removeBackpackFromCart();
  await expect(cart.cartBadge).toHaveCount(0);
});

});
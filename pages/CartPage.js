class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItem = page.locator('.cart_item');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
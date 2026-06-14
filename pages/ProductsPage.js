class ProductsPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortByNameDescending() {
    await this.sortDropdown.selectOption('za');
  }

  async removeBackpackFromCart() {
    await this.removeBackpackButton.click();
  }
}

module.exports = { ProductsPage };
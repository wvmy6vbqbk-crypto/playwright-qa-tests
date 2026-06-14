# Playwright QA Tests

End-to-end test automation examples built with Playwright.

## Features

- Page Object Model
- Login tests
- Product sorting tests
- Cart interaction tests
- Checkout flow tests
- Assertions with Playwright Test
- GitHub-ready test structure

## Demo Application

Tests are based on SauceDemo:
https://www.saucedemo.com/

## Run Tests

```bash
npm install
npx playwright test tests/saucedemo-checkout.spec.js

Test Coverage

* Successful checkout
* Invalid login
* Product sorting
* Remove product from cart
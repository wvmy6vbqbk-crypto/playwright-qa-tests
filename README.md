# Playwright QA Tests

End-to-end UI and API test automation examples built with Playwright.

## Features

- Page Object Model for UI tests
- Login tests
- Product sorting tests
- Cart interaction tests
- Checkout flow tests
- API tests with Playwright request fixture
- CRUD API coverage: GET, POST, PUT, PATCH, DELETE
- Screenshots, videos and traces on failure
- GitHub-ready test structure

## Demo Applications

UI tests:
- https://www.saucedemo.com/

API tests:
- https://jsonplaceholder.typicode.com/

## Run All Tests

```bash
npx playwright test

Run UI Tests
npx playwright test tests/saucedemo-checkout.spec.js

Run API Tests
npx playwright test tests/api-users.spec.js --project=chromium

Test Coverage

UI

* Successful checkout
* Invalid login
* Product sorting
* Remove product from cart

API

* GET list of posts
* GET single post
* POST create post
* PUT update post
* PATCH partial update
* DELETE post
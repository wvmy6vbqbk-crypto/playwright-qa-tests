# Playwright QA Test Suite

This project demonstrates end-to-end (E2E) testing using Playwright.

## Overview

The goal of this project is to simulate real user behavior in a browser and verify that core application flows work as expected.

Tested application:
https://the-internet.herokuapp.com/

## Features

- Login test (successful login)
- Login test (invalid credentials)
- Navigation test (homepage → login page)
- Basic Page Object Model (POM) structure

## Tech Stack

- Playwright
- JavaScript
- Node.js

## Project Structure
tests/
login.spec.js
navigation.spec.js
pages/
loginPage.js

## How to run the tests

```bash
npm install
npx playwright test
To run tests with visible browser:
npx playwright test --headed
To open the test report:
npx playwright show-report

What I focused on
	•	Writing clear and maintainable test cases
	•	Testing real user flows (login & navigation)
	•	Using assertions to validate expected behavior
	•	Structuring tests with Page Object Model for reusability

Learning Outcome

Through this project, I gained hands-on experience with:
	•	End-to-end testing concepts
	•	Playwright locators and assertions
	•	Test structure and maintainability
	•	Automation of user interactions in a browser

---

# 🚀 Don't forget:

Terminal:

```bash
git add README.md
git commit -m "Update README"
git push

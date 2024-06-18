// Verify Back Button on Company Register Page
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pom/RegisterCompanyDetails.po.js');

test.describe('Back Button Click Test', () => {
  test('should check that back button is not clickable', async ({ page }) => {
    // Navigate directly to the registration page
    await page.goto('https://app-staging.velorona.net/register');

    // Initialize the RegisterPage
    const registerPage = new RegisterPage(page);

    // Attempt to click the back button and verify it is not clickable
    await registerPage.clickBackButton();
    await registerPage.backButtonIsNotClickable();
  });
});

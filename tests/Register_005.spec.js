const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pom/Register.po.js');
const errorMessages = require('../errorMessages/RegisterErrors.json');

test.describe('Registration Form Validation', () => {
  test('should show required error messages when fields are empty', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    // Visit the registration page
    await page.goto('https://app-staging.velorona.net/register');

    // Click the "Next" button to trigger validation errors
    await registerPage.clickNextButton();

    // Verify that the correct error messages are shown
    await expect(page.locator(`text=${errorMessages.companyName}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.email}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.phone}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.street}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.city}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.state}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.zipcode}`)).toBeVisible();
    await expect(page.locator(`text=${errorMessages.country}`)).toBeVisible();
  });
});

//Verify Terms and Condition Page Visible

const { test, expect } = require('@playwright/test');
const data = require(`../fixtures/fixture.json`);

test.describe('Terms and Conditions Navigation', () => {
  test('should navigate to terms and conditions page when clicking Terms and Conditions link', async ({ page }) => {
    // Visit the registration page
    await page.goto('https://app-staging.velorona.net/register');

    // Click on "Terms and Conditions" link
    await page.click('//a[normalize-space()="Terms and Conditions"]');

    // Verify the URL is the terms and conditions page
    await page.waitForURL('https://velorona.com/terms-and-conditions', { timeout: 60000 });
    await expect(page).toHaveURL('https://velorona.com/terms-and-conditions');
  });
});

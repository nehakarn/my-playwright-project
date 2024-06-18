//verify Privacy Policy page visible 
const { test, expect } = require('@playwright/test');

test.describe('Privacy Policy Navigation', () => {
  test('should navigate to privacy policy page when clicking Privacy Policy link', async ({ page }) => {
    // Visit the registration page
    await page.goto('https://app-staging.velorona.net/register');

    // Click on "Privacy Policy" link
    await page.click('//a[normalize-space()="Privacy Policy"]');

    // Verify the URL is the privacy policy page
    await page.waitForURL('https://velorona.com/privacy-policy', { timeout: 60000 });
    await expect(page).toHaveURL('https://velorona.velorona.net/privacy-policy');
  });
});

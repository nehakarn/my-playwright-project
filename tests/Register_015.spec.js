//verify cookies policy visible 

const { test, expect } = require('@playwright/test');
const data = require(`../fixtures/fixture.json`);


test.describe('Cookie Policy Navigation', () => {
  test('should navigate to cookies policy page when clicking Cookies Policy link', async ({ page }) => {
    // Visit the registration page
    await page.goto('https://app-staging.velorona.net/register');

    // Click on "Cookies Policy" link
    await page.click('//a[normalize-space()="Cookies Policy"]');

    // Verify the URL is the cookies policy page
    await page.waitForURL('https://velorona.com/cookies-policy', { timeout: 60000 });
    await expect(page).toHaveURL('https://velorona.com/cookies-policy');
  });
});

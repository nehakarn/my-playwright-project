const { test, expect } = require('@playwright/test');
const { LandingPage } = require('../pom/RegisterLanding.po.js');

test.describe('Landing Page Navigation', () => {
  test('should navigate to registration page when clicking Join Now', async ({ page }) => {
    const landingPage = new LandingPage(page);

    // Visit the landing page
    await landingPage.visit();

    // Click on Join Now
    await landingPage.clickJoinNow();

    // Verify the URL is the registration page
    await expect(page).toHaveURL(landingPage.registerUrl);
  });

  test('should navigate to registration page when clicking Sign Up', async ({ page }) => {
    const landingPage = new LandingPage(page);

    // Visit the landing page again
    await landingPage.visit();

    // Click on Sign Up
    await landingPage.clickSignUp();

    // Verify the URL is the registration page
    await expect(page).toHaveURL(landingPage.registerUrl);
  });
});

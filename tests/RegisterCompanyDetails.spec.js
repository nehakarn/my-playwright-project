const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pom/RegisterCompanyDetails.po.js');

test('should navigate to registration page and fill the form, then click next', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app-staging.velorona.net/login');

  // Click on "Register Now" link
  await page.click('text=Register Now');

  // Verify the URL is the registration page
  await expect(page).toHaveURL('https://app-staging.velorona.net/register');

  // Initialize the RegisterPage object
  const registerPage = new RegisterPage(page);

  // Define company details
  const companyDetails = {
    name: 'Test Company',
    email: 'test@company.com',
    phone: '1234567890',
    street: '123 Test St',
    suite: 'Suite 100',
    city: 'Test City',
    state: 'Test State',
    zipcode: '12345',
    country: 'United States',
    timezone: 'America/New_York'
  };

  // Fill the company details form
  //await registerPage.fillCompanyDetails(companyDetails);

  // Click the "Next" button
  await registerPage.clickNextButton();

  // Optionally, add a check to verify that the next step is displayed
  await expect(page).toHaveURL('https://app-staging.velorona.net/register'); // Adjust the URL as needed
});

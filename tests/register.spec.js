// tests/registration.test.js
const { test, expect } = require('@playwright/test');
const { RegisterPage } = require('../pom/register.po.js');

test('should navigate to registration page and fill the form', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://app-staging.velorona.net/login'); // Ensure the correct login URL

  // Click on "Register now" link
  await page.click('text=Register Now');

  // Verify the URL is the registration page
  await expect(page).toHaveURL('https://app-staging.velorona.net/register');

  // Initialize the registration page object
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
    country: 'US',
    timezone: 'America/New_York'
  };

  // Define admin details
  const adminDetails = {
    name: 'Admin User',
    email: 'admin@company.com',
    password: 'password123',
    confirmPassword: 'password123'
  };

  // Fill the company details form and click next
  await registerPage.fillCompanyDetails(companyDetails);

  // // Fill the admin details form and submit
  // await registerPage.fillAdminDetails(adminDetails);

  // // Optionally, verify that the form was submitted successfully
  // await expect(page).toHaveURL('https://app-staging.velorona.net/registration-success'); // Adjust the success URL as needed
});

const { test, expect } = require('playwright/test');
const { forgotPasswordPage } = require('../pom/forgotpassword.po.js');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Register Tests', () => {
  


//   //const email = 'admin@clinchtech.com'; 
//   await forgotPassword.resetPassword(email); 
//  await forgotPassword.verifyResetRequest();

});

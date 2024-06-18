const { expect } = require('@playwright/test');

// Class to handle interactions on the Login Page
class LoginPage {
    constructor(page) {
        this.page = page;
        this.registerNowLink = '//a[normalize-space()="Register Now"]';
        this.registerUrl = 'https://app-staging.velorona.net/register';
    }

    // Visit the login page
    async visit() {
        await this.page.goto('https://app-staging.velorona.net/login');
    }

    // Click the "Register Now" link
    async clickRegisterNow() {
        await this.page.click(this.registerNowLink);
        await this.page.waitForURL(this.registerUrl, { timeout: 60000 });
    }
}

// Class to handle interactions on the Landing Page
class LandingPage {
    constructor(page) {
        this.page = page;
        this.joinNowButton = '//button[normalize-space()="Join Now"]';
        this.signUpButton = '//button[normalize-space()="Sign Up"]';
        this.registerUrl = 'https://app-staging.velorona.net/register';
    }

    // Visit the landing page
    async visit() {
        await this.page.goto('https://landing-staging.velorona.net/');
    }

    // Click the "Join Now" button
    async clickJoinNow() {
        console.log('Clicking Join Now button...');
        await this.page.click(this.joinNowButton);
        await this.page.waitForURL(this.registerUrl, { timeout: 80000 });
    }

    // Click the "Sign Up" button
    async clickSignUp() {
        console.log('Clicking Sign Up button...');
        await this.page.click(this.signUpButton);
        await this.page.waitForURL(this.registerUrl, { timeout: 80000 });
    }
}

// Class to handle interactions on the Register Page
class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerLink = `//a[normalize-space()='Register Now']`;
        this.registerHeader = `//*[contains(text(),'Register Now')]`;
        this.header1 = `//a[normalize-space()='Company Register']`;
        this.companyNameInput = `//input[@id=':r0:']`;
        this.companyEmailInput = `//input[@id=':r1:']`;
        this.companyPhoneInput = `//input[@id=':r2:']`;
        this.companyStreetInput = `//input[@id=':r3:']`;
        this.companySuiteInput = `//input[@id=':r4:']`;
        this.companyCityInput = `//input[@id=':r5:']`;
        this.companyStateInput = `//input[@id=':r6:']`;
        this.companyZipcodeInput = `//input[@id=':r7:']`;
        this.companyCountrySelect = `//input[@id=':r8:']`;
        this.companyTimezoneSelect = `//input[@id=':ra:']`;
        this.nextButton = `//button[normalize-space()='Next']`; //button[@id=':rc:'] 
        this.backButton = `//div[@class='MuiBox-root css-1rwr66l']`; 
        this.AdminFirtNameInput = `//input[@id=':rd:']`;
        this.AdminMiddleNameInput = `//input[@id=':re:']`;
        this.AdminLastNameInput = `//input[@id=':ri:']`;
        this.AdminEmailInput = `//input[@id=':rj:']`;
        this.AdminPhoneInput = `//input[@id=':rh:']`;
        this.PasswordInput = `//input[@id=':ri:']`;
        this.ConfirmPaswwordInput = `//input[@id=':rj:']`;
        this.AdminStreetInput = `//input[@id=':rk:']`;
        this.AdminApartmentInput = `//input[@id=':rl:']`;
        this.AdminCityInput = `//input[@id=':rm:']`;
        this.AdminStateInput = `//input[@id=':rn:']`;
        this.AdminZipcodeInput = `//input[@id=':ro:']`;
        this.AdminCountrySelect = `//input[@id=':rp:']`;
        this.RegisterButton = `//button[@id=':rf:']`;
    }

    // Navigate to the register page
    async navigateToRegisterPage() {
        await this.page.click(this.registerLink);
        await this.page.waitForSelector(this.registerHeader);
    }

    // Select a country
    async countrySelect(country) {
        await this.page.click(this.companyCountrySelect);
        await this.page.fill(this.companyCountrySelect, country); 
        await this.page.waitForSelector(`//li[contains(., '${country}')]`);
        await this.page.click(`//li[contains(., '${country}')]`);
        await this.page.waitForTimeout(2000);
    }

    // Select a country by option number
    async countrySelectAll(number) {
        await this.page.click(this.companyCountrySelect);
        await this.page.click(`//li[@id=':rb:-option-${number}']`);
        await this.page.waitForTimeout(500);
    }

    // Click the "Next" button
    async clickNextButton() {
        await this.page.click(this.nextButton); // Adjust the selector as needed
      //  await this.page.waitForSelector('//h6[normalize-space()="Must include one uppercase character"]');
    }

    // Click the "Back" button
    async clickBackButton() {
        await this.page.click(this.backButton);
    }

    // Check if the back button is not clickable
    async backButtonIsNotClickable() {
        await expect(this.page.locator(this.backButton)).toBeDisabled();
    }}
// Export the combined classes
module.exports = { LoginPage, LandingPage, RegisterPage };

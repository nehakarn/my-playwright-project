// pom/registerPage.js
const { expect } = require('@playwright/test');

exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
        this.registerLink = `//a[normalize-space()='Register Now']`;
        this.registerHeader = `//*[contains(text(),'Register Now')]`;
    }

    async navigateToRegisterPage() {
        // Click on "Register Now" link
        await this.page.click(this.registerLink);
        // Wait for the register page to load
        await this.page.waitForSelector(this.registerHeader);
    }
};


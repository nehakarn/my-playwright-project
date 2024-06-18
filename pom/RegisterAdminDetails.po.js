const { test, expect } = require('playwright/test');

exports.RegisterPage1 = class RegisterPage1 {
    constructor(page) {
        this.page = page;
        this.header1 = `//a[normalize-space()='Company Register']`;
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
        this.country = `//li[contains(., 'United States')]`;
    }

    async countrySelect(country) {
        await this.page.click(this.AdminCountrySelect);
        await this.page.fill(this.AdminCountrySelect, country); 
        await this.page.waitForSelector(`//li[contains(., '${country}')]`);
        await this.page.click(`//li[contains(., '${country}')]`);
        //await this.page.waitForTimeout(2000);
    }

    async countrySelectAll(number) {
        await this.page.click(this.AdminCountrySelect);
        await this.page.click(`//li[@id=':rb:-option-${number}']`);
        await this.page.waitForSelector(`//li[contains(., 'Afghanistan')]`);
        await this.page.click(`//li[contains(., 'Afghanistan')]`);
        //await this.page.waitForTimeout(500);
    }

    async clickRegisterButton() {
        await this.page.click(this.RegisterButton); // Adjust the selector as needed
    }

async countrySelect(country) {
    await this.page.click(this.AdminCountrySelect);
    await this.page.fill(this.AdminCountrySelect, country); 
    await this.page.waitForSelector(`//li[contains(., '${country}')]`);
    await this.page.click(`//li[contains(., '${country}')]`);
    //await this.page.waitForTimeout(2000);
}

async countrySelectAll(number) {
    await this.page.click(this.AdminCountrySelect);
    await this.page.click(`//li[@id=':rb:-option-${number}']`);
    await this.page.waitForSelector(`//li[contains(., 'Afghanistan')]`);
    await this.page.click(`//li[contains(., 'Afghanistan')]`);
    //await this.page.waitForTimeout(500);
}

async clickRegisterButton() {
    await this.page.click(this.RegisterButton); // Adjust the selector as needed
}
}

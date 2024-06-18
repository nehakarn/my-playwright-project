const requirement = require('playwright/test');

exports.RegisterPage = class RegisterPage {
    constructor(page) {
        this.page = page;
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

  async countrySelect(country) {
    await this.page.click(this.companyCountrySelect);
    await this.page.fill(this.companyCountrySelect, country); 
    await this.page.waitForSelector(`//li[contains(., '`+country+`')]`);
    await this.page.click(`//li[contains(., '`+country+`')]`);
    await this.page.waitForTimeout(2000);
  }
  async countrySelectAll(number) {
    await this.page.click(this.companyCountrySelect);
    await this.page.click(`//li[@id=':rb:-option-`+number+`']`);
    await this.page.waitForTimeout(500);
  }

async clickNextButton() {
  await this.page.click('button:has-text("Next")'); // Adjust the selector as needed
  await this.page.waitForSelector('//h6[normalize-space()="Must include one uppercase character"]');

}
async clickBackButton() {
  await this.page.click(this.backButton);
}
async backButtonIsNotClickable() {
  await expect(this.page.locator(this.backButton)).toBeDisabled();
}
}
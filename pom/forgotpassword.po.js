const { expect } = require('playwright/test');

exports.forgotPasswordPage = class forgotPasswordPage {
    constructor(page) {
        this.page = page;
        this.header = `//h3[normalize-space()='Forgot your password?']`; 
       // this.header= '//p[@class='MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-wkbopr']';//
        this.emailInput = `//input[@id=':r0:']`; 
        this.submitButton = `//button[@id=':r1:']`;
        this.returnButton = `//a[normalize-space()='Return to sign in']`;
        this.forgotpassword = `//a[normalize-space()='Forgot password?']`;
    }
    async navigate(){
        await this.page.click(this.forgotpassword);
        await this.page.waitForSelector(this.header);
        await this.page.waitForSelector(`//*[contains(text(),'Forgot your password')]`);
    }
    async resetPassword(email, message) {
        await this.page.fill(this.emailInput, email);
        await this.page.click(this.submitButton);
        await this.page.waitForSelector(`//*[contains(text(), '` + message + `')]`);
    }
    async returnToSignIn() {
        await this.page.click(this.returnButton);
        await this.page.waitForSelector(`//*[contains(text(), 'User Login')]`);
    }
}
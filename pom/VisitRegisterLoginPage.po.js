//visit register page from login page
class LoginPage {
    constructor(page) {
      this.page = page;
      this.registerNowLink = '//a[normalize-space()="Register Now"]';
      this.registerUrl = 'https://app-staging.velorona.net/register';
    }
  
    async visit() {
      await this.page.goto('https://app-staging.velorona.net/login');
    }
  
    async clickRegisterNow() {
      await this.page.click(this.registerNowLink);
      await this.page.waitForURL(this.registerUrl, { timeout: 60000 });
    }
  }
  
  module.exports = { LoginPage };
  
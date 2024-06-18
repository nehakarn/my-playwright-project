class LandingPage {
    constructor(page) {
      this.page = page;
      this.joinNowButton = '//button[normalize-space()="Join Now"]';
      this.signUpButton = '//button[normalize-space()="Sign Up"]';
      this.registerUrl = 'https://app-staging.velorona.net/register';
    }
  
    async visit() {
      await this.page.goto('https://landing-staging.velorona.net/');
    }
  
    async clickJoinNow() {
      console.log('Clicking Join Now button...');
      await this.page.click(this.joinNowButton);
      await this.page.waitForURL(this.registerUrl, { timeout: 80000 });
    }
  
    async clickSignUp() {
      console.log('Clicking Sign Up button...');
      await this.page.click(this.signUpButton);
      await this.page.waitForURL(this.registerUrl, { timeout: 80000 });
    }
  }
  
  module.exports = { LandingPage };
  
const { expect } = require('playwright/test');

exports.MenuBar = class MenuBar {
    constructor(page) {
        this.page = page;
        this.clientsMenuItem ="//span[normalize-space()='clients']";
        this.clientPageTitle="//nav[@class='MuiTypography-root MuiTypography-body1 MuiBreadcrumbs-root css-lnw69i']";
        this.projectMenuItem = "//span[normalize-space()='projects']";
        this.projectPageTitle = "//h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr']";
        this.userMenuItem = "//span[normalize-space()='users']"
        this.userBreadcrumb= "//div[@class='flex w-full justify-between items-center']";
        this.TimesheetMenuItem = "//span[normalize-space()='Timesheets']"
        this.TimesheetPageTitle ="//h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr']";
        this.schedulemenuitem = "//span[normalize-space()='schedules']";
        this.schedulepagetitle = "//h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr']";
        this.checkmenuitem = "//span[normalize-space()='Check-In Check-Out']";
        this.checkmenupagetitle = "//h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr']";
        this.dashboardgeneralpage =  "//span[normalize-space()='General']";
        this.dashboardwelcometext =  "//p[@class='MuiTypography-root MuiTypography-h4 MuiTypography-paragraph css-132uzeu'] ";
        this.dashboarduserspage = "//span[normalize-space()='Users'] "; 
        this.dashboardlatestlogins = "//span[normalize-space()='Latest Logins'] ";
        this.expensesmenuitem = "[//span[normalize-space()='expenses'] ";
        this.expensespagetitle =  " //h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr'] ";
        this.settingsmenuitem = "//span[normalize-space()='settings'] ";
        this.settingspagetitle = "//h4[@class='MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom capitalize css-1nmpsyr'] ";
        

    }

    async clickClients() {
        await this.page.click(this.clientsMenuItem);
        await this.page.waitForSelector(this.clientPageTitle);
        const clientPageTitle = this.page.locator(this.clientPageTitle);
        await expect.toContainText("All Clients"); 
    }
    
    async clickProjects () {
        await this.page.click(this.projectMenuItem);
        await this.page.waitForSelector(this.projectPageTitle);
        const projectPageTitle = this.page.locator(this.projectPageTitle);
        await expect.toContainText(" Project List");
    }
    async clickTimesheets () {
        await this.page.click(this.TimesheetMenuItem);
        await this.page.waitForSelector(this.TimesheetPageTitle);
        const TimesheetPageTitle= this.page.locator(This.TimesheetPageTitle);
        await expect.toContainText("All Timesheets");

    }
    async clickSchedules () {
        await this.page.click(this.schedulemenuitem);
        await this.page.waitForSelector(this.schedulepagetitle);
        const schedulepagetitle = this.page.locator(this.schedulepagetitle);
        await expect (schedulepagetitle).toContainText("All Schedules");
    }
    async clickCheckMenu() {
        await this.page.click(this.checkmenuitem);
        await this.page.waitForSelector(this.checkmenupagetitle);
        const checkmenupagetitle = this.page.locator(this.checkmenupagetitle);
        await expect(checkmenupagetitle).toContainText("All Check-In Check-Out");
    }
    async clickDashboardMenu() {
        await this.page.click(this.dashboardgeneralpage);
        await this.page.waitForSelector(this.dashboardwelcometext);
        const dashboardwelcometitle = this.page.locator(this.dashboardwelcometext);
        await expect(dashboardwelcometitle).toContainText("Welcome");
    }
    async clickDashboardUsersPage() {
        await this.page.click(this.dashboarduserspage);
        await this.page.waitForSelector(this.dashboardlatestlogins);
        const latestLoginsTitle = this.page.locator(this.dashboardlatestlogins);
        await expect(latestLoginsTitle).toContainText(" Latest Logins ");
    }
    async clickExpensesPage() {
        await this.page.click(this.expensesmenuitem);
        await this.page.waitForSelector(this.expensespagetitle);
        const expensespagetitle = this.page.locator(this.expensespagetitle);
        await expect(expensespagetitle).toContainText(" All Expenses ");
    
}};

const { test, expect } = require('playwright/test');
const { LoginPage } = require('../pom/login.po.js');
const { MenuBar } = require('../pom/Menu.po.js');
const data = require('../fixtures/fixture.json'); 

test.beforeEach(async ({ page }) => {
    await page.goto('/'); 
    await page.goto('/'); 
    const loginPage = new LoginPage(page);
    await loginPage.login(data.validCredential1.email, data.validCredential1.password);
}
)
/*test.beforeEach(async({ page }) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickDashboardMenu();
}
)*/
    
test.describe("Click all menu items", () => { 

test('click on Clients menu', async ({ page }) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickClients();
}
)
test('Click on Project menu',async ({page}) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickProjects();
}

)
test('Click on Schedule menu',async ({page}) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickSchedules();
}
)
test('Click on Timesheet menu',async ({page}) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickTimesheets
}
)
test('Click on Check-In Check-Out menu', async ({ page }) => {
    const menuBar = new MenuBar(page);
    await menuBar.clickCheckMenu();
});
test('Click on Dashboard Menu', async () => {
    const menuBar = new MenuBar(page);
    await menuBar.clickDashboardMenu();
});
test('Click on Dashboard Users Page', async () => {
    const menuBar = new MenuBar(page);
    await menuBar.clickDashboardUsersPage();
});
test('Click on Expenses Page', async () => {
    const menuBar = new MenuBar(page);
    await menuBar.clickExpensesPage();
});

});

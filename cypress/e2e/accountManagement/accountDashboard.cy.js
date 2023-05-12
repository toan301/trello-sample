import LoginPage from '../../pages/login/loginPage';
import AccountDashboardPage from '../../pages/accountManagement/accountDashboardpage';

const loginPage = new LoginPage();
const accountDashboardpage = new AccountDashboardPage();

describe('Account Dashboard Test', () => {
  const email = 'phuongduong';
  const pdPass = 'Abcd123!@';
  const url = 'https://hr.tstechnologies.com.vn/';

  it('Validate elements on Account Dashboard page', () => {
    cy.visit(url);
    loginPage.login(email, pdPass);
    accountDashboardpage.validateAccountDashboardUI();
  });

  it.only('Validate elements on Account Dashboard page', () => {
    cy.visit(url);
    loginPage.login(email, pdPass);
    accountDashboardpage.validateAccountDashboardUI();
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Change_Password, 'Change Password');
  });
});

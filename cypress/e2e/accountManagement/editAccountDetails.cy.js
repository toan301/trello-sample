import LoginPage from '../../pages/login/loginPage';
import AccountDashboardPage from '../../pages/accountManagement/accountDashboardpage';
import EditAccountDetailsPage from '../../pages/accountManagement/editAccountDetailsPage';

const loginPage = new LoginPage();
const accountDashboardpage = new AccountDashboardPage();
const editAccountDetailsPage = new EditAccountDetailsPage();

describe('Edit Account Details Test', () => {
  const email = 'phuongduong';
  const pdPass = 'Abcd123!@';
  const url = 'https://hr.tstechnologies.com.vn/';

  beforeEach('Login', () => {
    cy.visit(url);
    loginPage.login(email, pdPass);
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Edit_Account_Details, 'My Account Information');
  });

  it('Validate elements on Edit account Details page', () => {
    accountDashboardpage.validateBreadCrumb('Edit Information');
    accountDashboardpage.validateLinksAreVisible();
    editAccountDetailsPage.validateLoginName(email);
    editAccountDetailsPage.validateURL('https://hr.tstechnologies.com.vn/index.php?rt=account/edit');
    editAccountDetailsPage.validateElementsOnPage();
  });

  it('Validate error message is displayed when required field is blank', () => {
    editAccountDetailsPage.validateErrorMessageIsDisplayedWhenFieldIsBlank(editAccountDetailsPage.txt_First_Name, 'First Name must be between 1 and 32 characters!');
    editAccountDetailsPage.validateErrorMessageIsDisplayedWhenFieldIsBlank(editAccountDetailsPage.txt_Last_Name, 'Last Name must be between 1 and 32 characters!');
    editAccountDetailsPage.validateErrorMessageIsDisplayedWhenFieldIsBlank(editAccountDetailsPage.txt_Email, 'E-Mail Address does not appear to be valid!');
  });

  it('Validate Email field with unvalid data', () => {
    const keys = [
      'littlebiggmail.com',
      'littlebig@.com',
      'littlebig@gmail.',
      'littlebig@gmail.c',
      'littlebig',
      '@gmail.com',
    ];
    keys.forEach((key) => {
      editAccountDetailsPage.inputData(editAccountDetailsPage.txt_Email, key);
      editAccountDetailsPage.clickOnButton(editAccountDetailsPage.btn_Continue);
      editAccountDetailsPage.validateErrorMessageIsDisplayed('E-Mail Address does not appear to be valid!');
    });
  });

  it('Validate Telephone field with unvalid data', () => {
    const keys = [
      '01',
      'littlebig',
      'little@11111',
      '123,35432',
      '012345678901234567890123456789012',
    ];
    keys.forEach((key) => {
      editAccountDetailsPage.inputData(editAccountDetailsPage.txt_Telephone, key);
      editAccountDetailsPage.clickOnButton(editAccountDetailsPage.btn_Continue);
      editAccountDetailsPage.validateErrorMessageIsDisplayed('Telephone must be between 3 and 32 numeric only characters!');
    });
  });

  it('Validate edit Information successfully', () => {
    editAccountDetailsPage.validateEditInformationSuccessfully('Little', 'Big', 'littlebig@gmail.com', '0630313265', '456854');
  });
});

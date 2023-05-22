import LoginPage from '../../pages/login/loginPage';
import AccountDashboardPage from '../../pages/accountManagement/accountDashboardpage';
import AddressBookPage from '../../pages/accountManagement/addressBookPage';

const loginPage = new LoginPage();
const accountDashboardpage = new AccountDashboardPage();
const addressBookPage = new AddressBookPage();

describe('Manage Address Book Test', () => {
  const email = 'phuongduong';
  const pdPass = 'Abcd123!@';
  const url = 'https://hr.tstechnologies.com.vn/';

  beforeEach('Login', () => {
    cy.visit(url);
    loginPage.login(email, pdPass);
    cy.url().as('pre_url');
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book, 'Address Book');
  });

  it('Validate elements on Manage Address Book page', () => {
    // Validate elements on Address Book Page
    addressBookPage.validateBreadCrumb('Address Book');
    addressBookPage.validateLinksAreVisible();
    addressBookPage.validateURL(`${url}index.php?rt=account/address`);
    addressBookPage.validateElementsOnAddressBookPage();
    // Validate Back button
    cy.get(addressBookPage.btn_Back).click();
    cy.get('@pre_url').then(($preUrl) => {
      addressBookPage.validateURL($preUrl);
    });
    // Validate elements on Add Address page
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book, 'Address Book');
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    addressBookPage.validateURL(`${url}index.php?rt=account/address/insert`);
    addressBookPage.validateElementsOnNewAddressBookPage();
    addressBookPage.clickOnButton(addressBookPage.btn_Back);
    // Validate elements on Edit Address page
    addressBookPage.clickEditAddressButton(1);
    addressBookPage.validateElementsOnNewAddressBookPage();
  });

  it('Validate add new address book successfully without default address', () => {
    addressBookPage.addNewAddress('Eye', 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
    addressBookPage.deleteAddress(1);
  });

  it('Validate add new address book successfully with default address', () => {
    addressBookPage.addNewAddress('Eye', 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', true);
    addressBookPage.clickEditAddressButton(2);
    addressBookPage.setDefaultAddress(true);
    addressBookPage.clickOnButton(addressBookPage.btn_Continue);
    addressBookPage.deleteAddress(1);
  });

  it('Validate First Name field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    const keys = [addressBookPage.randomString(33), null];
    keys.forEach((key) => {
      addressBookPage.inputDataToAddressForm(key, 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
      addressBookPage.validateErrorMessageIsDisplayed('First Name must be between 1 and 32 characters!');
    });
  });

  it('Validate Last Name field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    const keys = [addressBookPage.randomString(33), null];
    keys.forEach((key) => {
      addressBookPage.inputDataToAddressForm('Blue', key, '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
      addressBookPage.validateErrorMessageIsDisplayed('Last Name must be between 1 and 32 characters!');
    });
  });

  it('Validate Address 1 field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    const keys = [addressBookPage.randomString(2), addressBookPage.randomString(129), null];
    keys.forEach((key) => {
      addressBookPage.inputDataToAddressForm('Eye', 'Blue', key, 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
      addressBookPage.validateErrorMessageIsDisplayed('Address must be between 3 and 128 characters!');
    });
  });

  it('Validate City field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    const keys = [addressBookPage.randomString(2), addressBookPage.randomString(129), null];
    keys.forEach((key) => {
      addressBookPage.inputDataToAddressForm('Eye', 'Blue', '179 TranCaoVan', key, 'Badakhshan', '156NCUI', 'Afghanistan', false);
      addressBookPage.validateErrorMessageIsDisplayed('City must be between 3 and 128 characters!');
    });
  });

  it('Validate Region field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    addressBookPage.inputDataToAddressForm('Eye', 'Blue', '179 TranCaoVan', 'London', 0, '156NCUI', 'Afghanistan', false);
    addressBookPage.validateErrorMessageIsDisplayed('Please select a region / state!');
  });

  it('Validate Zip/Post Code field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    const keys = [addressBookPage.randomString(1), addressBookPage.randomString(11), null];
    keys.forEach((key) => {
      addressBookPage.inputDataToAddressForm('Eye', 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', key, 'Afghanistan', false);
      addressBookPage.validateErrorMessageIsDisplayed('Zip/postal code must be between 2 and 10 characters!');
    });
  });

  it('Validate Country field', () => {
    addressBookPage.clickOnButton(addressBookPage.btn_New_Address);
    addressBookPage.inputDataToAddressForm('Eye', 'Blue', '179 TranCaoVan', 'London', null, '156NCUI', 0, false);
    addressBookPage.validateErrorMessageIsDisplayed('Please select a country!');
  });

  it('Validate edit address book successfully', () => {
    // Add New Address
    addressBookPage.addNewAddress('Eye', 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
    // Edit Address
    addressBookPage.editAddress(1, 'Stay', 'Shine', '156 Sky Strain', 'New York', 'Badakhshan', '156NCUI', 'Afghanistan', false);
    addressBookPage.editAddress(2, 'Jass', 'Mine', '153 Address', 'London', 'Conwy', '128CV', 'United Kingdom', true);
    // Delete Address
    addressBookPage.deleteAddress(1);
  });

  it('Validate delete address successfully', () => {
    addressBookPage.addNewAddress('Eye', 'Blue', '179 TranCaoVan', 'London', 'Badakhshan', '156NCUI', 'Afghanistan', false);
    addressBookPage.deleteAddress(1);
  });
});

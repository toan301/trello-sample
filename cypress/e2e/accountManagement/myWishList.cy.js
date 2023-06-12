import LoginPage from '../../pages/login/loginPage';
import MyWishListPage from '../../pages/accountManagement/myWishListPage';
import ProductDetailsPage from '../../pages/accountManagement/productDetailsPage';
import AccountDashboardPage from '../../pages/accountManagement/accountDashboardpage';
import CommandHP from '../../pages/homePage/commonHP';

const loginPage = new LoginPage();
const myWishListPage = new MyWishListPage();
const productDetailsPage = new ProductDetailsPage();
const accountDashboardpage = new AccountDashboardPage();
const commonHP = new CommandHP();

describe('My Wish List Test', () => {
  const email = 'phuongduong';
  const pdPass = 'Abcd123!@';
  const url = 'https://hr.tstechnologies.com.vn/';

  beforeEach('Login', () => {
    cy.visit(url);
    loginPage.login(email, pdPass);
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List, 'My wish list');
  });

  it('Validate elements on My Wish List page without data', () => {
    accountDashboardpage.validateBreadCrumb('My wish list');
    accountDashboardpage.validateLinksAreVisible();
    myWishListPage.validateURL(`${url}index.php?rt=account/wishlist`);
    cy.get('body').then(($body) => {
      cy.log('value', $body.find(myWishListPage.btn_Remove).length);
      if ($body.find(myWishListPage.btn_Remove).length > 0) {
        myWishListPage.removeAllItems();
        myWishListPage.validateLinksWorks('My wish list', 'My wish list');
      }
    });
    myWishListPage.validateElementsOnPageWithoutData();
  });

  it('Validate elements on My Wish List page with data', () => {
    const productName = 'Tropiques Minerale Loose Bronzer';
    accountDashboardpage.validateBreadCrumb('My wish list');
    accountDashboardpage.validateLinksAreVisible();
    myWishListPage.validateURL(`${url}index.php?rt=account/wishlist`);
    myWishListPage.clickOnButton(productDetailsPage.btn_Home);
    productDetailsPage.addItemToWishList(productName);
    commonHP.clickOnMenuBar('Welcome back');
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List, 'My wish list');
    myWishListPage.validateElementsOnPageWithData();
    myWishListPage.removeItemByProductName(productName);
  });

  it('Validate add item to My Wish List successfully', () => {
    const productName = 'BeneFit Girl Meets Pearl';
    const addedDate = productDetailsPage.generateDate();

    accountDashboardpage.validateBreadCrumb('My wish list');
    accountDashboardpage.validateLinksAreVisible();
    myWishListPage.validateURL(`${url}index.php?rt=account/wishlist`);
    myWishListPage.clickOnButton(myWishListPage.btn_Continue_Shopping);

    // Add Item to Wishlist
    productDetailsPage.addItemToWishList(productName);
    productDetailsPage.getProductName();
    productDetailsPage.getUnitPrice();
    productDetailsPage.getModel();
    commonHP.clickOnMenuBar('Welcome back');

    // Validate item data on wishlist
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List, 'My wish list');
    myWishListPage.validateElementsOnPageWithData();
    // Validate Model
    cy.get('body').then(() => {
      const model = Cypress.env('getModel');
      const splitModel = model.split(' ')[1];
      myWishListPage.validateModel(splitModel);
    });
    // Validate Product Name
    cy.get('body').then(() => {
      const proName = Cypress.env('getProName');
      myWishListPage.validateProductName(proName);
    });
    // Validate Unit Price
    cy.get('body').then(() => {
      const unitPrice = Cypress.env('getUnitPrice');
      const splitUP = unitPrice.replace(/\s/g, '');
      myWishListPage.validateUnitPrice(splitUP);
    });
    // Validate Added Date
    myWishListPage.validateAddedDate(addedDate);

    myWishListPage.removeItemByProductName(productName);
  });

  it('Validate remove item from My Wish List successfully', () => {
    const productName = 'Acqua Di Gio Pour Homme';
    accountDashboardpage.validateBreadCrumb('My wish list');
    accountDashboardpage.validateLinksAreVisible();
    myWishListPage.validateURL(`${url}index.php?rt=account/wishlist`);
    myWishListPage.clickOnButton(myWishListPage.btn_Continue_Shopping);

    // Add Item to Wishlist
    productDetailsPage.addItemToWishList(productName);
    productDetailsPage.getProductName();
    productDetailsPage.getUnitPrice();
    productDetailsPage.getModel();
    commonHP.clickOnMenuBar('Welcome back');

    // Validate item data on wishlist
    accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List, 'My wish list');
    myWishListPage.validateElementsOnPageWithData();

    // Validate remove Item
    myWishListPage.removeItemByProductName(productName);
  });
});

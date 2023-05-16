import CommonAM from './commonAM';

export default class AccountDashboardPage extends CommonAM {
  // CSS
  btn_Edit_Account_Details = 'a[data-original-title="Edit account details"]';

  btn_Change_Password = 'a[data-original-title="Change password"]';

  btn_Manage_Address_Book = '.nav-dash a[data-original-title="Manage Address Book"]';

  btn_My_Wish_List = 'a[data-original-title="My wish list"]';

  btn_Order_History = '.nav-dash a[data-original-title="Order history"]';

  btn_Transaction_History = '.nav-dash a[data-original-title="Transaction history"]';

  btn_Downloads = '.nav-dash a[data-original-title="Downloads"]';

  btn_Notifications = 'a[data-original-title="Notifications"]';

  btn_Logoff = 'a[data-original-title="Logoff"]';

  // Methods
  /**
   *
   */
  getToTheAccountDashboard() {
    cy.get('.topnavbar.navbar select').select('Account');
  }

  /**
   *
   * @param {*} text is bread crumb should be displayed on page
   */
  validateBreadCrumb(text) {
    cy.get('.breadcrumb li a').contains(text).should('be.visible');
  }

  /**
   * validate all links should be displayed on Account Dashboard page
   */
  validateLinksAreVisible() {
    const classBasic = '.side_account_list a';
    const links = [
      'Account Dashboard',
      'My wish list',
      'Edit account details',
      'Change password',
      'Manage Address Book',
      'Order history',
      'Transaction history',
      'Downloads',
      'Notifications',
      'Logoff',
    ];
    links.forEach((link) => {
      cy.get(classBasic).contains(link).should('be.visible');
    });
  }

  /**
   * validate all elements should be displayed on Account Dashboard page
   */
  validateAccountDashboardUI() {
    cy.get('.maintext').contains('My Account').should('be.visible');
    const buttons = [
      this.btn_Edit_Account_Details,
      this.btn_Change_Password,
      this.btn_Manage_Address_Book,
      this.btn_My_Wish_List,
      this.btn_Order_History,
      this.btn_Transaction_History,
      this.btn_Downloads,
      this.btn_Notifications,
      this.btn_Logoff,
    ];
    buttons.forEach((button) => {
      cy.get(button).should('be.visible');
    });
    cy.get('.dash-tile-ocean').should('be.visible');
    cy.get('.dash-tile-flower').should('be.visible');
    cy.get('.dash-tile-oil').should('be.visible');
    cy.get('.dash-tile-balloon').should('be.visible');
    this.validateBreadCrumb('Account');
    this.validateLinksAreVisible();
  }

  /**
   *
   * @param {*} button is CSS of button
   * @param {*} page is page title of the navigated page
   */
  validateButtonWorks(button, page) {
    cy.get(button).click();
    cy.get('.maintext').contains(page).should('be.visible');
  }

  /**
   *
   * @param {*} link is the link is clicked
   * @param {*} page is page title of the navigated page
   */
  validateLinksWorks(link, page) {
    const classBasic = '.side_account_list a';
    cy.get(classBasic).contains(link).click();
    cy.get('.maintext').contains(page).should('be.visible');
  }

  validateURL(url) {
    cy.url().should('eq', url);
  }
}

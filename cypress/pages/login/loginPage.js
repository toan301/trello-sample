export default class LoginPage {
  /**
   *
   */
  getToTheLoginPage() {
    cy.get('#customer_menu_top').click();
  }

  /**
   *
   * @param {*} loginName is the text should be entered to Login Name field
   */
  enterLoginName(loginName) {
    cy.get('#loginFrm_loginname').type(loginName);
  }

  /**
   *
   * @param {*} password is the text should be entered to Password field
   */
  enterPassword(password) {
    cy.get('#loginFrm_password').type(password);
  }

  /**
   *
   */
  clickLoginButton() {
    cy.get('#loginFrm button[type="submit"]').click();
  }

  /**
   *
   */
  validateLoginSuccessfully() {
    cy.get('div').contains('Welcome back').should('be.visible');
  }

  /**
   *
   * @param {*} loginName is the text should be entered to Login Name field
   * @param {*} password is the text should be entered to Password field
   */
  login(loginName, password) {
    this.getToTheLoginPage();
    this.enterLoginName(loginName);
    this.enterPassword(password);
    this.clickLoginButton();
    this.validateLoginSuccessfully();
  }
}

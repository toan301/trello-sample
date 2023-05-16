export default class LoginPage {
  getToTheLoginPage() {
    cy.get('#customer_menu_top').click();
  }

  enterLoginName(loginName) {
    cy.get('#loginFrm_loginname').type(loginName);
  }

  enterPassword(password) {
    cy.get('#loginFrm_password').type(password);
  }

  clickLoginButton() {
    cy.get('#loginFrm button[type="submit"]').click();
  }

  validateLoginSuccessfully() {
    cy.get('div').contains('Welcome back').should('be.visible');
  }

  login(loginName, password) {
    this.getToTheLoginPage();
    this.enterLoginName(loginName);
    this.enterPassword(password);
    this.clickLoginButton();
    this.validateLoginSuccessfully();
  }
}

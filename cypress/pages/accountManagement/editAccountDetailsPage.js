import AccountDashboardPage from './accountDashboardpage';

export default class EditAccountDetailsPage extends AccountDashboardPage {
  // CSS
  txt_First_Name = '#AccountFrm_firstname';

  txt_Last_Name = '#AccountFrm_lastname';

  txt_Email = '#AccountFrm_email';

  txt_Telephone = '#AccountFrm_telephone';

  txt_Fax = '#AccountFrm_fax';

  btn_Back = 'a[title="Back"]';

  btn_Continue = 'button[title="Continue"]';

  // Methods

  /**
   *
   * @param {*} loginName is the text should be displayed for Login Name field
   */
  validateLoginName(loginName) {
    cy.get('label').contains('Login Name').parent().find('div.input-group')
      .invoke('text')
      .should('contains', loginName);
  }

  /**
   * Validate all elements should be displayed on the Edit Account Details page
   */
  validateElementsOnPage() {
    const elements = [
      this.txt_First_Name,
      this.txt_Last_Name,
      this.txt_Email,
      this.txt_Telephone,
      this.txt_Fax,
      this.btn_Back,
      this.btn_Continue,
    ];
    elements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  }

  /**
   *
   * @param {*} message is the error message should be displayed
   */
  validateErrorMessageIsDisplayed(message) {
    cy.get('.help-block').contains(message).should('be.visible');
    cy.get('.alert-error').contains('Oops, there is an error with information provided!').should('be.visible');
  }

  /**
   *
   * @param {*} field is CSS of the field should be empty
   * @param {*} message is the error message should be displayed
   */
  validateErrorMessageIsDisplayedWhenFieldIsBlank(field, message) {
    cy.get(field).invoke('val').then(($txt) => {
      this.clearDataOnField(field);
      this.clickOnButton(this.btn_Continue);
      this.validateErrorMessageIsDisplayed(message);
      this.inputData(field, $txt);
    });
  }

  /**
   *
   * @param {*} firstName is the text should be entered to First Name field
   * @param {*} lastName is the text should be entered to Last Name field
   * @param {*} email is the text should be entered to Email field
   * @param {*} telephone is the text should be entered to Telephone field
   * @param {*} fax is the text should be entered to Fax field
   */
  validateEditInformationSuccessfully(firstName, lastName, email, telephone, fax) {
    this.inputData(this.txt_First_Name, firstName);
    this.inputData(this.txt_Last_Name, lastName);
    this.inputData(this.txt_Email, email);
    this.inputData(this.txt_Telephone, telephone);
    this.inputData(this.txt_Fax, fax);
    this.clickOnButton(this.btn_Continue);
    cy.get('.alert-success').contains('Success: Your account has been successfully updated.').should('be.visible');
    this.validateButtonWorks(this.btn_Edit_Account_Details, 'My Account Information');
    this.validateValue(this.txt_First_Name, firstName);
    this.validateValue(this.txt_Last_Name, lastName);
    this.validateValue(this.txt_Email, email);
    this.validateValue(this.txt_Telephone, telephone);
    this.validateValue(this.txt_Fax, fax);
  }
}

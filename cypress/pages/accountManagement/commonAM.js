export default class CommonAM {
  btn_Continue = "button[title='Continue']";

  btn_Back = "a[title='Back']";

  /**
   *
   * @param {*} field is CSS of field should be cleared
   */
  clearDataOnField(field) {
    cy.get(field).clear();
  }

  /**
   *
   * @param {*} btn is CSS of button should be clicked
   */
  clickOnButton(btn) {
    cy.get(btn).click({ force: true });
  }

  /**
   *
   * @param {*} element is CSS of the field should be entered data
   * @param {*} key is the text should be entered to field
   */
  inputData(element, key) {
    if (key == null) {
      cy.get(element).clear();
    } else {
      cy.get(element).clear();
      cy.get(element).type(key);
    }
  }

  /**
   *
   * @param {*} element is CSS of the element that want to get the value
   * @param {*} key is the expected result to display on the element
   */
  validateValue(element, key) {
    cy.get(element).invoke('val').should('eq', key);
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
   * @param {*} message is the sucessful message should be displayed
   */
  validateMessageSuccessfully(message) {
    cy.get('.alert-success').contains(message).should('be.visible');
  }

  /**
   *
   * @param {*} element is CSS of dropdown
   * @param {*} value is option will be selected
   */
  selectDropdown(element, value) {
    if (value != null) { cy.get(element).select(value); }
  }

  /**
   *
   * @param {*} length is the lenght of string
   * @returns
   */
  randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}

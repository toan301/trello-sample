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

  validateErrorMessageIsDisplayed(message) {
    cy.get('.help-block').contains(message).should('be.visible');
    cy.get('.alert-error').contains('Oops, there is an error with information provided!').should('be.visible');
  }

  validateMessageSuccessfully(message) {
    cy.get('.alert-success').contains(message).should('be.visible');
  }
   
    selectDropdown(element,value){
        cy.get(element).select(value)
    }
}

export class CommonAM{
    //CSS
    btn_Continue = "button[title='Continue']"
    btn_Back = "a[title='Back']"

    //Methods
    clearDataOnField(field){
        cy.get(field).clear()
    }
    clickOnButton(btn){
        cy.get(btn).click({force:true})
    }
    inputData(element, key){
        if (key == null) {
            cy.get(element).clear() }
        else { 
            cy.get(element).clear().type(key) }
        
    }
    validateValue(element, key){
        cy.get(element).invoke('val').should('eq',key)
    }
    validateErrorMessageIsDisplayed(message){
        cy.get(".help-block").contains(message).should("be.visible")
        cy.get(".alert-error").contains("Oops, there is an error with information provided!").should("be.visible")
    }
    validateMessageSuccessfully(message){
        cy.get(".alert-success").contains(message).should("be.visible")
    }
}
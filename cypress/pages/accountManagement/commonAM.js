export class CommonAM{
    clearDataOnField(field){
        cy.get(field).clear()
    }
    clickOnButton(btn){
        cy.get(btn).click({force:true})
    }
    inputData(element, key){
        cy.get(element).clear().type(key)
    }
    validateValue(element, key){
        cy.get(element).invoke('val').should('eq',key)
         
    }
}
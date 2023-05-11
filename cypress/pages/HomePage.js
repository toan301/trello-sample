export class HomePage{
    clickLoginAndRegisterButton(){
        cy.get('div#customernav li:first-child a').click()
    }
}
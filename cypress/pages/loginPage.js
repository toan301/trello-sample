export class loginPage {

    inputLoginName(name){
        cy.get('input[id="loginFrm_loginname"]').clear().type(name)
    }

    inputPassword(password){
        cy.get('input[id="loginFrm_password"]').clear().type(password)
    }

    clickLoginButton(){
        cy.get('button[title="Login"]').click()
    }

    myAccountTitleIsDisplayed(){
        cy.get('span[class="maintext"]').should('be.visible')
    }
}
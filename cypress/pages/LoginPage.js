export class LoginPage{
    inputUser(user){
        cy.get('input[name="loginname"]').clear().type(user)
    }
    inputPassword(password){
        cy.get('input[name="password"]').clear().type(password)
    }
    clickLoginButton(){
        cy.get('button[title="Login"]').click()
    }
}
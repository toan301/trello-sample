export class CheckoutLoginPage{
    /* constructor(field){
        this.field=field
    } */
    
    // firstNameField='input[aria-label="firstname'
    //Guest user------------------------------
    inputFirstName(firstname){
        cy.get('input[aria-label="firstname"]').clear().type(firstname)
    }
    inputLastName(lastname){
        cy.get('input[aria-label="lastname"]').clear().type(lastname)
    }
    inputAddressOne(addressOne){
        cy.get('input[aria-label="cc_address_1"]').clear().type(addressOne)
    }
    inputCity(city){
        cy.get('input[aria-label="city"]').clear().type(city)
    }
    inputPostcode(postcode){
        cy.get('input[aria-label="postcode"]').clear().type(postcode)
    }
    selectCountry(country){
        cy.get('select[aria-label="country"]').select(country)
    }
    selectCity(city){
        cy.get('select[aria-label="zone"]').select(city)
    }
    inputEmail(email){
        cy.get('input[aria-label="email"]').clear().type(email)
    }
    inputPhone(phone){
        cy.get('input[aria-label="phone"]').clear().type(phone)
    }
    clickEnterAddress(){
        cy.get('button[type="submit"]').click()
    }
    //login user-------------------------
    switchToLogin(){
        cy.get('a#login_user').click()
    }
    inputUsername(user){
        cy.get('input[name="loginname"]').clear().type(user)
    }
    inputPassword(password){
        cy.get('input[name="password"]').clear().type(password)
    }
    clickLoginButton(){
        cy.get('button#LoginFrm_Submit').click()
    }
    //assertions: exlamation mark (!) in required field
    
    /* checkRequiredFieldFirstName(){
    cy.get('input[aria-label="firstname"]')
      .parent().next().children('i')
      .should('be.visible')
    }
    checkRequiredFieldLastName(){
    cy.get('input[aria-label="lastname"]')
      .parent().next().children('i')
      .should('be.visible')
    } */
    checkRequiredField(fieldSelector){
    cy.get(fieldSelector)
      .parent().next().children('i')
      .should('be.visible')
    }
}
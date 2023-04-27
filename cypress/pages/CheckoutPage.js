export class CheckoutPage{
    chooseLocalDelivery(){
        cy.get('label[for*="default_local_delivery"] div').click()
    }
    chooseFlatRate(){
        cy.get('label[for*="default_flat_rate_shipping"] div').click()
    }
    clickConfirmOrder(){
        cy.get('a#checkout_btn').click()
    }
}
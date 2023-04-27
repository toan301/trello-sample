export class CartPage{
    clickCartUpdate(){
        cy.get('button#cart_update').click()
    }
    clickCheckOut(){
        cy.get('div[class*="cart_total"] a:nth-child(3)').click()
    }
}
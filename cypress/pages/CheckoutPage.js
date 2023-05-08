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
    checkLocalDeliveryVisible(){
        cy.get('table[class*="shipment"] tr:first-child td')
        .should('be.visible')
        .should('have.text','Local Delivery')
    }
    checkLocalDeliverySelected(){
        cy.log('check the option has a blue tick')
        cy.get('label[for*="default_local"] i').should('be.visible')
        cy.log('check if local delivery is visible in Order Summary and is $0')
        cy.get('div#cart_details h4')
            .contains('Local Delivery')
                .should('be.visible')
            .siblings('span')
                .should('be.visible')
                .should('have.text','$0.00')
    }
    checkFlatRateShippingVisible(){
        cy.get('table[class*="shipment"] tr:nth-child(3) td')
        .should('be.visible')
        .should('have.text','Flat Rate')
    }
    checkFlatRateShippingSelected(){
        cy.log('check the option has a blue tick')
        cy.get('label[for*="default_flat_rate"] i').should('be.visible')
        cy.log('check flat rate shipping visible in Order Summary and is $2')
        cy.get('div#cart_details h4')
            .contains('Flat Shipping Rate')
                .should('be.visible')
            .siblings('span')
                .should('be.visible')
                .should('have.text','$2.00')
    }
}
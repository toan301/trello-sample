export class homePage{

    navigateToHomePage() {
        cy.get('.subnav [class="active menu_home"]').click()
    }

    welcomeMessageIsDisplayed(){
        cy.get('.contentpanel .welcome_msg').should('be.visible')
    }

    addToAnyProductToCart() {
        cy.get('.thumbnail a[data-id = "50"] i[class="fa fa-cart-plus fa-fw"]').click()
    }

    getToProductDetailsPage(){
        cy.get('.col-xs-12 .heading2 span').should('be.visible')
    }

    addSkinsheenBronzerStickToCart(){
        cy.get('.thumbnail a[data-id = "50"] i[class="fa fa-cart-plus fa-fw"]').click()
    }

}
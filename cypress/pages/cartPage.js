export class cartPage {

    navigateToCartPage(){
        cy.get('#main_menu_top li[data-id="menu_cart"]').click()
    }

    cartPageIsDisplayed(){
        cy.get('span[class="maintext"]').should('be.visible')
    }

    messageIsDisplayedWhenCartPageIsEmpty(){
        cy.get('div[class="contentpanel"]').should('be.visible')
    }

    tableOfProductListIsDisplayed(){
        cy.get('product-list').should('be.visible')
    }

    clickOnProductName(){
        cy.get('.table-bordered .align_left a').eq(0).click()
    }

    productIsNotVisible(){
        cy.get('.table-bordered .align_left a').should('not.exist')
    }

    clickOnTrashIcon(){
        cy.get('.table-bordered .align_center i').eq(0).click()
    }

    editQuantity(quantity){
        cy.get('.table-bordered .align_center input').eq(0).clear().type(quantity)
    }

    clickOnUpdateButton(){
        cy.get("button[id='cart_update']").click()
    }

    quantityIsUpdatedSuccessfully(quantity){
        cy.get('.table-bordered .align_center input').should('have.value',quantity)
    }
    
    inputCoupon(coupon){
        cy.get('.form-inline #coupon_coupon').clear().type(coupon)
    }

    clickOnApplyCouponButton(){
        cy.get('#apply_coupon_btn').click()
    }

    errorMscForCouponIsDisplayed(){
        cy.get('.alert.alert-danger strong').should('contain', 'Coupon is either invalid')
    }

    xButtonIsDisplayed(){
        cy.get('.form-inline #remove_coupon_btn ').should('be.visible')
    }

    clickOnXButton(){
        cy.get('.form-inline #remove_coupon_btn ').click()
    }

    messageForRemoveCouponIsDisplayed(){
        cy.get('div[class="alert alert-success"]').should('contain','Coupon has been removed!')
    }
    
    selectCountry(){
        cy.get('.input-group #estimate_country').select('United States').should('have.value','223')
    }

    selectState(){
        cy.get('.input-group #estimate_country_zones').select('Alaska').should('have.value','3614')
    }

    inputZipOrPostCode(zipCode){
        cy.get('#estimate_postcode').clear().type(zipCode)
    }

    clickOnEstimateButton(){
        cy.get('#estimate_postcode').click()
    }

    selectLocalDeliveryFree(){
        cy.get('.col-sm-8 #shippings').select(0).should('have.value','default_local_delivery.default_local_delivery')
    }

    selectFlatShippingRate(){
        cy.get('.col-sm-8 #shippings').select(1).should('have.value','default_flat_rate_shipping.default_flat_rate_shipping')
    }

    priceForLocalDelivery(){
        cy.get('table#totals_table tr:nth-child(2) td:nth-child(2) span ').should('have.text','$0.00')
    }

    priceForFlatShippingRate(){
        cy.get('table#totals_table tr:nth-child(2) td:nth-child(2) span ').should('have.text','$2.00')
    }

    clickOnCheckoutButtonAtTheRightSideOfUpdateButton(){
        cy.get('.mb20 #cart_checkout1').click()
    }

    clickOnCheckoutButtonBelowTotalSection(){
        cy.get('.table-responsive #cart_checkout2').click()
    }

    paymentPageIsDisplayed(){
        cy.get('.mt10 #cart_details').should('be.visible')
    }

    clickOnContinueShoppingButton(){
        cy.get('.table-responsive .mb10').click()
    }
}
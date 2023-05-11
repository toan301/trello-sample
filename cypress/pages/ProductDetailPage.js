export class ProductDetailPage{
    clickAddToCart(){
        cy.get('div.productpagecart a:first-child').click()
    }
    clickNavCheckOut(){
        cy.get('ul#main_menu_top li:nth-child(4)').click()
    }
    clickBuyNow(){
        cy.get('div.productpagecart a:nth-child(2)').click()
    }
    
}
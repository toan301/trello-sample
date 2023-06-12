import CommonAM from './commonAM';

export default class ProductDetailsPage extends CommonAM {
  // CSS
  btn_Home = '.active.menu_home';

  btn_AddToWishList = '.wishlist .wishlist_add';

  btn_RemoveFromWishList = '.wishlist .wishlist_remove ';

  unitPrice = '.productfilneprice';

  model = '.productinfo li:nth-child(2)';
  // Methods

  /**
   *
   * @param {*} productName is Name of image that is clicked
   */
  clickOnImage(productName) {
    cy.get('a.prdocutname').contains(productName).parents('.fixed_wrapper').parent()
      .find('.thumbnail a img:not(.rating)')
      .click();
  }

  /**
   *
   * @param {*} productName
   */
  addItemToWishList(productName) {
    this.clickOnImage(productName);
    cy.get(this.btn_AddToWishList).click();
    cy.get(this.btn_RemoveFromWishList).should('be.visible');
  }

  /**
   *
   */
  getUnitPrice() {
    cy.get('.productfilneprice')
      .invoke('text')
      .then((text) => {
        cy.log('unitPrice', text);
        Cypress.env('getUnitPrice', text);
      });
  }

  /**
   *
   */
  getModel() {
    cy.get('.productinfo li:nth-child(2)')
      .invoke('text')
      .then((text) => {
        cy.log('method', text);
        Cypress.env('getModel', text);
      });
  }

  /**
   *
   */
  getProductName() {
    cy.get('#product_details .productname span')
      .invoke('text')
      .then((text) => {
        cy.log('productName', text);
        Cypress.env('getProName', text);
      });
  }

  /**
   *
   * @returns
   */
  generateDate() {
    const currentDate = new Date();
    const day = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });
    return day;
  }
}

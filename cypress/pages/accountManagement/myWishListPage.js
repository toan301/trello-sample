import AccountDashboardPage from './accountDashboardpage';

export default class MyWishListPage extends AccountDashboardPage {
  // CSS
  btn_BackToHome = '.wishlist .pull-right .btn-default:nth-child(1)';

  btn_Continue_Shopping = 'a[title="Continue Shopping"]';

  btn_Shopping_Cart = '.wishlist .pull-right i.fa-shopping-cart';

  lnk_View_Cart = '.wishlist .pull-right a[title="View Cart"]';

  btn_Remove = 'a.btn-remove';

  // Methods
  /**
   *
   * @param {*} columns is list of column titles
   */
  validateColumns() {
    const columns = ['Image', 'Name', 'Model', 'Unit Price', 'Added to wish list', 'Actions'];
    columns.forEach((column) => {
      cy.get('tbody th').contains(column).should('be.visible');
    });
  }

  /**
   *
   */
  validateElementsOnPageWithData() {
    const UIs = [this.btn_BackToHome,
      this.btn_Continue_Shopping,
      this.btn_Shopping_Cart,
      this.lnk_View_Cart];
    UIs.forEach((UI) => {
      cy.get(UI).should('be.visible');
    });
    this.validateColumns();
  }

  /**
   *
   */
  validateElementsOnPageWithoutData() {
    cy.get(this.btn_Continue_Shopping).should('be.visible');
    cy.get('.contentpanel').contains('Wish list is empty').should('be.visible');
  }

  /**
   *
   * @param {*} sequence refers to the sequence number of an item present on the table.
   * @param {*} name
   * @param {*} model
   * @param {*} unitPrice
   * @param {*} addedDate
   */

  validateButtonsOnTable(sequence) {
    const seq = sequence + 1;
    const baseCSS = `.wishlist table tr:nth-child(${seq}) td a`;
    // Vaidate Add to Cart button is displayed
    cy.get(`${baseCSS} a.btn-primary`).should('be.visible');
    // Validate Remove button is displayed
    cy.get(`${baseCSS} a.btn-remove`).should('be.visible');
  }

  /**
   *
   * @param {*} expectedValue
   * @param {*} sequence refers to the sequence number of an item present on the table.
   */
  validateProductName(expectedValue, sequence = 'newItem') {
    let seq;
    if (sequence === 'newItem') {
      seq = 'last-child';
    } else {
      seq = `nth-child(${sequence + 1})`;
    }
    const baseCSS = `.wishlist table tr:${seq} td:nth-child(2) a`;
    cy.get(baseCSS).contains(expectedValue).should('be.visible');
  }

  /**
   *
   * @param {*} expectedValue
   * @param {*} sequence refers to the sequence number of an item present on the table.
   */
  validateModel(expectedValue, sequence = 'newItem') {
    let seq;
    if (sequence === 'newItem') {
      seq = 'last-child';
    } else {
      seq = `nth-child(${sequence + 1})`;
    }
    const baseCSS = `.wishlist table tr:${seq} td:nth-child(3)`;
    cy.get(baseCSS).invoke('text').should('contain', expectedValue);
  }

  /**
   *
   * @param {*} expectedValue
   * @param {*} sequence refers to the sequence number of an item present on the table.
   */
  validateUnitPrice(expectedValue, sequence = 'newItem') {
    let seq;
    if (sequence === 'newItem') {
      seq = 'last-child';
    } else {
      seq = `nth-child(${sequence + 1})`;
    }
    const baseCSS = `.wishlist table tr:${seq} td:nth-child(4) div`;
    cy.get(baseCSS).invoke('text').should('contain', expectedValue);
  }

  /**
   *
   * @param {*} expectedValue
   * @param {*} sequence refers to the sequence number of an item present on the table.
   */
  validateAddedDate(expectedValue, sequence = 'newItem') {
    let seq;
    if (sequence === 'newItem') {
      seq = 'last-child';
    } else {
      seq = `nth-child(${sequence + 1})`;
    }
    const baseCSS = `.wishlist table tr:${seq} td:nth-child(5)`;
    cy.get(baseCSS).contains(expectedValue).should('be.visible');
  }

  /**
   *
   * @param {*} productName
   */
  removeItemByProductName(productName) {
    cy.get('table.table-striped tr td:nth-child(2) a')
      .contains(productName)
      .parent().parent()
      .find(this.btn_Remove)
      .click();
    cy.contains('table.table-striped tr td:nth-child(2) a', productName).should('not.exist');
  }

  removeAllItems() {
    cy.get(this.btn_Remove).each((el) => {
      cy.wrap(el).click();
    });
  }
}

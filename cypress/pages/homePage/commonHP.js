export default class CommandHP {
  // CSS

  // Methods
  logout() {
    cy.get('#main_menu_top').parent().find('select').as('drp_Main_Menu')
      .select('Logout');
  }

  clickLoginOrRegisterLink() {
    cy.get('a').contains('Login or register').click();
  }
}

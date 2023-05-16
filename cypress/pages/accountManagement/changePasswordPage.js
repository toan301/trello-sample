import AccountDashboardPage from './accountDashboardpage';

export default class ChangePasswordPage extends AccountDashboardPage {
  // CSS
  txt_Current_Password = '#PasswordFrm_current_password';

  txt_New_Password = '#PasswordFrm_password';

  txt_New_Password_Confirm = '#PasswordFrm_confirm';

  // Methods
  /**
   * Validate all elements should be displayed on the Change Password page
   */
  validateElementsOnPage() {
    const elements = [
      this.txt_Current_Password,
      this.txt_New_Password,
      this.txt_New_Password_Confirm,
    ];
    elements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  }

  /**
   *
   * @param {*} currentPass is the text should be entered in the Current Password field
   * @param {*} newPass is the text should be entered in the New Password field
   * @param {*} confirmNewPass is the text should be entered in the Confirm New Password field
   */
  changePassword(currentPass, newPass, confirmNewPass) {
    this.inputData(this.txt_Current_Password, currentPass);
    this.inputData(this.txt_New_Password, newPass);
    this.inputData(this.txt_New_Password_Confirm, confirmNewPass);
    this.clickOnButton(this.btn_Continue);
    this.validateMessageSuccessfully('Success: Your password has been successfully updated.');
  }
}

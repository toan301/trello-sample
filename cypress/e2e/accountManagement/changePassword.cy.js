import { LoginPage } from "../../pages/login/loginPage"
import { AccountDashboardPage } from "../../pages/accountManagement/accountDashboardpage"
import { ChangePasswordPage} from "../../pages/accountManagement/changePasswordPage"
import { CommandHP } from "../../pages/homePage/commonHP"

const loginPage = new LoginPage()
const accountDashboardpage = new AccountDashboardPage()
const changePasswordPage = new ChangePasswordPage()
const commonHP = new CommandHP()

describe("Change Password Test",() => {
    const email = 'phuongduong'
    const pd_pass = 'Abcd123!@'
    const url = 'https://hr.tstechnologies.com.vn/'

    beforeEach('Login',()=> {
        cy.visit(url)
        loginPage.login(email,pd_pass)
        cy.url().as('pre_url')
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Change_Password,"Change Password")
    })

    it('Validate elements on Change Password page',() => {            
        accountDashboardpage.validateBreadCrumb("Change Password")
        accountDashboardpage.validateLinksAreVisible()
        changePasswordPage.validateURL(url + 'index.php?rt=account/password')
        changePasswordPage.validateElementsOnPage()
        cy.get(changePasswordPage.btn_Back).click()
        cy.get('@pre_url').then($pre_url =>{
            changePasswordPage.validateURL($pre_url)
        })
    })

    it('Validate Current Password field with unvalid data',() => {
        let keys = ['abcd123!@','ABCD123!@',null]
        keys.forEach(key => {
            changePasswordPage.inputData(changePasswordPage.txt_Current_Password,key)
            changePasswordPage.inputData(changePasswordPage.txt_New_Password,'ABCD123')
            changePasswordPage.inputData(changePasswordPage.txt_New_Password_Confirm,'ABCD123')
            changePasswordPage.clickOnButton(changePasswordPage.btn_Continue)
            changePasswordPage.validateErrorMessageIsDisplayed("Your current password is incorrect! Please try again.")
        });
    })

    it('Validate New Password field with unvalid data',() => {
        let keys = ['abc','012345678901234567890',null]
        keys.forEach(key => {
            changePasswordPage.inputData(changePasswordPage.txt_Current_Password,pd_pass)
            changePasswordPage.inputData(changePasswordPage.txt_New_Password,key)
            changePasswordPage.inputData(changePasswordPage.txt_New_Password_Confirm,key)
            changePasswordPage.clickOnButton(changePasswordPage.btn_Continue)
            changePasswordPage.validateErrorMessageIsDisplayed("Password must be between 4 and 20 characters!")
        });
    })

    it('Validate Confirm New Password field with unvalid data',() => {
        let keys = ['NewPass',null]
        keys.forEach(key => {
            changePasswordPage.inputData(changePasswordPage.txt_Current_Password,pd_pass)
            changePasswordPage.inputData(changePasswordPage.txt_New_Password,"NewPassword")
            changePasswordPage.inputData(changePasswordPage.txt_New_Password_Confirm,key)
            changePasswordPage.clickOnButton(changePasswordPage.btn_Continue)
            changePasswordPage.validateErrorMessageIsDisplayed("Password confirmation does not match password!")
        });
    })

    it('Validate Change Password successfully',() => {
        let new_Password = "NewPass"
        //Change to New Password
        changePasswordPage.changePassword(pd_pass,new_Password,new_Password)
        //Validate Logout
        commonHP.logout()
        accountDashboardpage.validateBreadCrumb("Logout")
        accountDashboardpage.validateURL(url + 'index.php?rt=account/logout')
        //Validate Login with New Password
        commonHP.clickLoginOrRegisterLink()
        loginPage.login(email,new_Password)
        accountDashboardpage.validateBreadCrumb("Account")
        accountDashboardpage.validateURL(url + 'index.php?rt=account/account')
        //Change to Old Password
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Change_Password,"Change Password")
        changePasswordPage.changePassword(new_Password,pd_pass,pd_pass)
    })
})
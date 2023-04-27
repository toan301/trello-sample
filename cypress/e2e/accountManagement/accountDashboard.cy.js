import { LoginPage } from "../../pages/login/loginPage"
import { AccountDashboardPage } from "../../pages/accountManagement/accountDashboardpage"


const loginPage = new LoginPage()
const accountDashboardpage = new AccountDashboardPage ()

describe("Account Dashboard Test",() => {
    const email = 'phuongduong'
    const password = 'Abcd123!@'
    const url = 'https://hr.tstechnologies.com.vn/'

    it('Validate elements on Account Dashboard page',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateAccountDashboardUI()
    })

    it('Validate Edit Account Details button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Edit_Account_Details,"My Account Information")
    })

    it('Validate Change Password button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Change_Password,"Change Password")
    })

    it('Validate Manage Address Book button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book,"Address Book")
    })

    it('Validate My Wist List button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List,"My wish list")
    })
    
    it('Validate My Order History button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Order_History,"My Order History")
    })
    
    it('Validate My Transactions button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Transaction_History,"My Transactions")
    })

    it('Validate Account Downloads button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Downloads,"Account Downloads")
    })

    it('Validate Notifications button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Notifications,"Notifications and Newsletter")
    })
    
    it('Validate Logoff button works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Logoff,"Account Logout")
    })
    
    it('Validate Account Dashboard link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Account Dashboard","My Account")
    })
    
    it('Validate My wish list link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("My wish list","My wish list")
    })
    
    it('Validate Edit account details link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Edit account details","My Account Information")
    })

    it('Validate Change Password link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Change password","Change Password")
    })

    it('Validate Manage Address Book link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Manage Address Book","Address Book")
    })

    it('Validate Order history link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Order history","My Order History")
    })

    it('Validate Transaction history link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Transaction history","My Transactions")
    })

    it('Validate Downloads link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Downloads","Account Downloads")
    })

    it('Validate Notifications link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Notifications","Notifications and Newsletter")
    })

    it('Validate Logoff link works fine',() => {
        cy.visit(url)
        loginPage.login(email,password)
        accountDashboardpage.validateLinksWorks("Logoff","Account Logout")
    })

})
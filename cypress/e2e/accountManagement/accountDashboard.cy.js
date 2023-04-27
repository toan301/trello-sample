import { LoginPage } from "../../pages/login/loginPage"
import { AccountDashboardPage } from "../../pages/accountManagement/accountDashboardpage"


const loginPage = new LoginPage()
const accountDashboardpage = new AccountDashboardPage ()

describe("Account Dashboard Test",() => {
    const email = 'phuongduong'
    const pd_pass = 'Abcd123!@'
    const url = 'https://hr.tstechnologies.com.vn/'
    beforeEach(() => {

        cy.visit(url)
        loginPage.login(email,pd_pass)
    })

    it('Validate elements on Account Dashboard page',() => {

        accountDashboardpage.validateAccountDashboardUI()
    })

    it('Validate Edit Account Details button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Edit_Account_Details,"My Account Information")
    })

    it('Validate Change Password button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Change_Password,"Change Password")
    })

    it('Validate Manage Address Book button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book,"Address Book")
    })

    it('Validate My Wist List button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_My_Wish_List,"My wish list")
    })
    
    it('Validate My Order History button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Order_History,"My Order History")
    })
    
    it('Validate My Transactions button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Transaction_History,"My Transactions")
    })

    it('Validate Account Downloads button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Downloads,"Account Downloads")
    })

    it('Validate Notifications button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Notifications,"Notifications and Newsletter")
    })
    
    it('Validate Logoff button works fine',() => {
        
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Logoff,"Account Logout")
    })
    
    it('Validate Account Dashboard link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Account Dashboard","My Account")
    })
    
    it('Validate My wish list link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("My wish list","My wish list")
    })
    
    it('Validate Edit account details link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Edit account details","My Account Information")
    })

    it('Validate Change Password link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Change password","Change Password")
    })

    it('Validate Manage Address Book link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Manage Address Book","Address Book")
    })

    it('Validate Order history link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Order history","My Order History")
    })

    it('Validate Transaction history link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Transaction history","My Transactions")
    })

    it('Validate Downloads link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Downloads","Account Downloads")
    })

    it('Validate Notifications link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Notifications","Notifications and Newsletter")
    })

    it('Validate Logoff link works fine',() => {
        
        accountDashboardpage.validateLinksWorks("Logoff","Account Logout")
    })

})
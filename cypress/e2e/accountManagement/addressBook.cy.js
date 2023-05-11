import { LoginPage } from "../../pages/login/loginPage"
import { AccountDashboardPage } from "../../pages/accountManagement/accountDashboardpage"
import { AddressBookPage} from "../../pages/accountManagement/addressBookPage"

const loginPage = new LoginPage()
const accountDashboardpage = new AccountDashboardPage()
const addressBookPage = new AddressBookPage()

describe("Manage Address Book Test",() => {
    const email = 'phuongduong'
    const pd_pass = 'Abcd123!@'
    const url = 'https://hr.tstechnologies.com.vn/'

    beforeEach('Login',()=> {
        cy.visit(url)
        loginPage.login(email,pd_pass)
        cy.url().as('pre_url')
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book,"Address Book")
    })

    it('Validate elements on Manage Address Book page',() => {   
        // Validate elements on Address Book Page         
        addressBookPage.validateBreadCrumb("Address Book")
        addressBookPage.validateLinksAreVisible()
        addressBookPage.validateURL(url + 'index.php?rt=account/address')
        addressBookPage.validateElementsOnAddressBookPage()
        //Validate Back button
        cy.get(addressBookPage.btn_Back).click()
        cy.get('@pre_url').then($pre_url =>{
            addressBookPage.validateURL($pre_url)
        })
        //Validate elements on Add Address page
        accountDashboardpage.validateButtonWorks(accountDashboardpage.btn_Manage_Address_Book,"Address Book")
        addressBookPage.clickOnButton(addressBookPage.btn_New_Address)
        addressBookPage.validateURL(url + 'index.php?rt=account/address/insert')
        addressBookPage.validateElementsOnNewAddressBookPage()
        addressBookPage.clickOnButton(addressBookPage.btn_Back)
        //Validate elements on Edit Address page
        addressBookPage.clickOnButton(addressBookPage.btn_Edit)
        addressBookPage.validateElementsOnNewAddressBookPage()
    })

})
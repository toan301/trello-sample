import { LoginPage } from "../../pages/login/loginPage"
import { AccountDashboardPage } from "../../pages/accountManagement/accountDashboardpage"


const loginPage = new LoginPage()
const accountDashboardpage = new AccountDashboardPage ()

describe("Account Dashboard Test",() => {
    const email = 'phuongduong'
    const pd_pass = 'Abcd123!@'
    const url = 'https://hr.tstechnologies.com.vn/'

    it('Validate elements on Account Dashboard page',() => {
        cy.visit(url)
        loginPage.login(email,pd_pass)
        accountDashboardpage.validateAccountDashboardUI()
    })
})
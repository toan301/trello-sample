import { loginPage } from "../pages/loginPage";

const login = new loginPage()
const url = 'https://hr.tstechnologies.com.vn/index.php?rt=account/login'
const validName = 'Didi01'
const validPassword = 'Abcd123!@'

describe('Login Page', () => {
    it('Login successfully', () => {
        cy.navigateToUrlWithConfig(url)
        login.inputLoginName(validName)
        login.inputPassword(validPassword)
        login.clickLoginButton()
        login.myAccountTitleIsDisplayed()
    })

})
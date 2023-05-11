import { loginPage } from "../pages/loginPage";
import { cartPage } from "../pages/cartPage";
import { homePage } from "../pages/homePage";

const login = new loginPage()
const url = 'https://hr.tstechnologies.com.vn/index.php?rt=account/login'
const validName = 'Didi01'
const validPassword = 'Abcd123!@'
const cart = new cartPage()
const home = new homePage()
const quantity = '2'
const coupon = '123456'
const zipCode = '99518'

describe('Cart Page', () => {
    beforeEach('Login successfully', () =>{
        cy.navigateToUrlWithConfig(url)
        login.inputLoginName(validName)
        login.inputPassword(validPassword)
        login.clickLoginButton()
    })

    it('Navigate to Cart page', () => {
        cart.navigateToCartPage()
        cart.cartPageIsDisplayed()

    })

    it('Verify cart page is empty', () =>{
        cart.navigateToCartPage()
        cart.messageIsDisplayedWhenCartPageIsEmpty()
    })

    it('Verify cart page is not empty', () => {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.cartPageIsDisplayed()
    })
    it('Verify user redirected to product details page', () => {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnProductName()
        home.getToProductDetailsPage()
    })
    it('Verify Remove product to cart page successfully', () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnTrashIcon()
        cart.productIsNotVisible()
    })
    it('Verify Update button is working properly', () => {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.editQuantity(quantity)
        cart.clickOnUpdateButton()
        cart.quantityIsUpdatedSuccessfully(quantity)
    })
    it('Verify error message is displayed when coupon field is empty', () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnApplyCouponButton()
        cart.errorMscForCouponIsDisplayed()
    })
    it('Verify error message is displayed when entering invalid coupon', ()=> {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.inputCoupon(coupon)
        cart.clickOnApplyCouponButton()
        cart.errorMscForCouponIsDisplayed()
        cart.xButtonIsDisplayed()
    })
    it('Verify message is displayed when clicking on X button', () => {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.inputCoupon(coupon)
        cart.clickOnApplyCouponButton()
        cart.clickOnXButton()
        cart.messageForRemoveCouponIsDisplayed()
    })
    it('Verify user can select any value at Country and State dropdowns', () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.selectCountry()
        cart.selectState()
    })
    it('Verify user can estimate shipping & taxes by zip/post code',() =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.selectCountry()
        cart.selectState()
        cart.inputZipOrPostCode(zipCode)
        cart.clickOnEstimateButton()
    })
    it('Verify Local Delivery-Free is applied successfully', () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.selectLocalDeliveryFree()
        cart.priceForLocalDelivery()
    })
    it('Verify Flat Shipping Rate is applied successfully', () => {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.selectFlatShippingRate()
        cart.priceForFlatShippingRate()
    })
    it('Verify Checkout button at the right side of Update button is working properly', () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnCheckoutButtonAtTheRightSideOfUpdateButton()
        cart.paymentPageIsDisplayed()
    })
    it('Verify Checkout button below Total section is working properly' , () =>{
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnCheckoutButtonBelowTotalSection()
        cart.paymentPageIsDisplayed()
    })
    it('Verify Continue Shopping button is working properly', ( )=> {
        home.navigateToHomePage()
        home.addToAnyProductToCart()
        cart.navigateToCartPage()
        cart.clickOnContinueShoppingButton()
        home.welcomeMessageIsDisplayed()
    })

})
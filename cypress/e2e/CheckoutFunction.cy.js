import { CartPage } from "../pages/CartPage"
import { CheckoutLoginPage } from "../pages/CheckoutLoginPage"
import { CheckoutPage } from "../pages/CheckoutPage"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { ProductDetailPage } from "../pages/productDetailPage"

const cartPage = new CartPage()
const productDetailPage = new ProductDetailPage()
const checkoutLoginPage = new CheckoutLoginPage()
const checkoutPage= new CheckoutPage()
const homePage= new HomePage()
const loginPage=new LoginPage()

describe('Place Order as Guest', () => {
    it('Successful', () => {
      cy.visit('https://hr.tstechnologies.com.vn/index.php?rt=product/product&product_id=53')
      //Add item to cart and checkout
      productDetailPage.clickAddToCart()
      cartPage.clickCartUpdate()
      cartPage.clickCheckOut()
      //input valid info as Guest
      checkoutLoginPage.inputFirstName('Phong')
      checkoutLoginPage.inputLastName('Nguyen')
      checkoutLoginPage.inputAddressOne('1 le duan')
      checkoutLoginPage.inputCity('Da Nang')
      checkoutLoginPage.selectCountry('Viet Nam')
      checkoutLoginPage.selectCity('Da Nang')
      checkoutLoginPage.inputPostcode('550000')
      checkoutLoginPage.inputEmail('vegeta732@mailinator.com')
      checkoutLoginPage.inputPhone('1234567890')
      checkoutLoginPage.clickEnterAddress()
      //assertion 1
      cy.get('label[for*="default_local_delivery"] div').should('be.visible')
      cy.get('label[for*="default_flat_rate_shipping"] div').should('be.visible')
      //choose shipping
      checkoutPage.chooseLocalDelivery()
      checkoutPage.clickConfirmOrder()
      //assertion 2
      cy.get('h3.text-success')
        .should('be.visible')
        .should('have.text','Order is completed!')
    })
  })

  describe('Place order after logging in from checkout page',()=>{
    it('Successful',()=>{
      cy.visit('https://hr.tstechnologies.com.vn/index.php?rt=product/product&product_id=53')
      //Add item to cart and checkout
      productDetailPage.clickAddToCart()
      cartPage.clickCartUpdate()
      cartPage.clickCheckOut()
      //Login from checkout page
      checkoutLoginPage.switchToLogin()
      checkoutLoginPage.inputUsername('vegeta732')
      checkoutLoginPage.inputPassword('Abcd123!@')
      checkoutLoginPage.clickLoginButton()
      //assertion 1
      cy.get('table[class*="shipment"] tr:first-child td')
        .should('be.visible')
        .should('have.text','Local Delivery')
      cy.get('table[class*="shipment"] tr:nth-child(3) td')
        .should('be.visible')
        .should('have.text','Flat Rate')
      //Choose shipping and place order
      checkoutPage.chooseFlatRate()
      checkoutPage.clickConfirmOrder()
      //assertion 2
      cy.get('h3.text-success')
        .should('be.visible')
        .should('have.text','Order is completed!')
    })
  })

  describe('Place order when logged in',()=>{
    it('Successful',()=>{
      cy.visit('https://hr.tstechnologies.com.vn/')
      homePage.clickLoginAndRegisterButton()
      //login
      loginPage.inputUser('vegeta732')
      loginPage.inputPassword('Abcd123!@')
      loginPage.clickLoginButton()
      //add item to cart and prodceed to checkout
      cy.visit('https://hr.tstechnologies.com.vn/index.php?rt=product/product&product_id=53')
      productDetailPage.clickAddToCart()
      cartPage.clickCartUpdate()
      cartPage.clickCheckOut()
      //checkout
      //assertion 1
      cy.get('table[class*="shipment"] tr:first-child td')
        .should('be.visible')
        .should('have.text','Local Delivery')
      cy.get('table[class*="shipment"] tr:nth-child(3) td')
        .should('be.visible')
        .should('have.text','Flat Rate')
      //choose shipping
      checkoutPage.chooseLocalDelivery()
      checkoutPage.clickConfirmOrder()
      //assertion 2
      cy.get('h3.text-success')
        .should('be.visible')
        .should('have.text','Order is completed!')
    })
  })

  describe('Check required fields when creating a new account at checkout', () => {
    it('Successful', () => {
      cy.visit('https://hr.tstechnologies.com.vn/index.php?rt=product/product&product_id=53')
      //Add item to cart and checkout
      productDetailPage.clickAddToCart()
      cartPage.clickCartUpdate()
      cartPage.clickCheckOut()
      //input fields as Guest
      checkoutLoginPage.selectCountry('false') //do this so that the Select Country field can be checked as well
      checkoutLoginPage.clickEnterAddress()
      //Assertions: check all 9 required fields
      checkoutLoginPage.checkRequiredField('input[aria-label="firstname"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="lastname"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="cc_address_1"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="city"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="postcode"]')
      checkoutLoginPage.checkRequiredField('select[aria-label="country"]')
      checkoutLoginPage.checkRequiredField('select[aria-label="zone"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="email"]')
      checkoutLoginPage.checkRequiredField('input[aria-label="phone"]')
    })
  })

  
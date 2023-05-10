import { CommonAM } from "./commonAM"

export class AccountDashboardPage extends CommonAM{
    btn_Edit_Account_Details = "a[data-original-title='Edit account details']"
    btn_Change_Password = "a[data-original-title='Change password']"
    btn_Manage_Address_Book = ".nav-dash a[data-original-title='Manage Address Book']"
    btn_My_Wish_List = "a[data-original-title='My wish list']"
    btn_Order_History = ".nav-dash a[data-original-title='Order history']"
    btn_Transaction_History = ".nav-dash a[data-original-title='Transaction history']"
    btn_Downloads = ".nav-dash a[data-original-title='Downloads']"
    btn_Notifications = "a[data-original-title='Notifications']"
    btn_Logoff = "a[data-original-title='Logoff']"

    //Methods
    getToTheAccountDashboard(){
        cy.get(".topnavbar.navbar select").click().select("Account")
    }
    validateBreadCrumb(text){
        cy.get(".breadcrumb li a").contains(text).should("be.visible")
    }
    validateLinksAreVisible(){
        const class_basic = ".side_account_list a"
        let links = ["Account Dashboard", "My wish list", "Edit account details", "Change password", "Manage Address Book", 
                        "Order history", "Transaction history", "Downloads", "Notifications", "Logoff"]
        links.forEach(link => {
            cy.get(class_basic).contains(link).should("be.visible")
        });
    }
    validateAccountDashboardUI(){
        cy.get(".maintext").contains("My Account").should("be.visible")
        let buttons = [this.btn_Edit_Account_Details, this.btn_Change_Password, this.btn_Manage_Address_Book, this.btn_My_Wish_List, this.btn_Order_History,
                     this.btn_Transaction_History, this.btn_Downloads, this.btn_Notifications, this.btn_Logoff]
        buttons.forEach(button => {
            cy.get(button).should("be.visible")
        });             
        cy.get(".dash-tile-ocean").should("be.visible")
        cy.get(".dash-tile-flower").should("be.visible")
        cy.get(".dash-tile-oil").should("be.visible")
        cy.get(".dash-tile-balloon").should("be.visible")
        this.validateBreadCrumb("Account")
        this.validateLinksAreVisible()
    }
    validateButtonWorks(button,page){
        cy.get(button).click().then(el=>{
            cy.get(".maintext").contains(page).should("be.visible")
        })
    }
    validateLinksWorks(link,page){
        const class_basic = ".side_account_list a"
        cy.get(class_basic).contains(link).click().then(el=>{
            cy.get(".maintext").contains(page).should("be.visible")
        })
    }
    validateURL(url){
        cy.url().should('eq',url)
    }

}
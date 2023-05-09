import { AccountDashboardPage } from "./accountDashboardpage"

export class EditAccountDetailsPage extends AccountDashboardPage{
    //CSS
    txt_First_Name = "#AccountFrm_firstname"
    txt_Last_Name = "#AccountFrm_lastname"
    txt_Email = "#AccountFrm_email"
    txt_Telephone = "#AccountFrm_telephone"
    txt_Fax = "#AccountFrm_fax"
    btn_Back = "a[title='Back']"
    btn_Continue = "button[title='Continue']"

    //Methods
    validateLoginName(loginName){
        cy.get("label").contains("Login Name").parent().find("div.input-group").invoke('text').should("contains",loginName)
    }
    
    validateElementsOnPage(){
        let elements = [this.txt_First_Name, this.txt_Last_Name, this.txt_Email, this.txt_Telephone, this.txt_Fax,this.btn_Back, this.btn_Continue]
        elements.forEach(element => {
            cy.get(element).should("be.visible")
        });
    }
    validateErrorMessageIsDisplayed(message){
        cy.get(".help-block").contains(message).should("be.visible")
        cy.get(".alert-error").contains("Oops, there is an error with information provided!").should("be.visible")
    }
    validateErrorMessageIsDisplayedWhenFieldIsBlank(field,message){ 
        cy.get(field).invoke('val').then($txt =>{
            this.clearDataOnField(field)
            this.clickOnButton(this.btn_Continue)
            this.validateErrorMessageIsDisplayed(message)
            this.inputData(field,$txt)
        })        
    }
    validateErrorMessageIsDisplayedWhenRequiredFieldsBlanks(){ 
        this.validateErrorMessageIsDisplayedWhenFieldIsBlank(this.txt_First_Name, "First Name must be between 1 and 32 characters!")
        this.validateErrorMessageIsDisplayedWhenFieldIsBlank(this.txt_Last_Name, "Last Name must be between 1 and 32 characters!")
        this.validateErrorMessageIsDisplayedWhenFieldIsBlank(this.txt_Email, "E-Mail Address does not appear to be valid!")      
    }
    validateEditInformationSuccessfully(firstName, lastName, email, telephone, fax){
        this.inputData(this.txt_First_Name,firstName)
        this.inputData(this.txt_Last_Name,lastName)
        this.inputData(this.txt_Email,email)
        this.inputData(this.txt_Telephone,telephone)
        this.inputData(this.txt_Fax,fax)
        this.clickOnButton(this.btn_Continue)
        cy.get(".alert-success").contains("Success: Your account has been successfully updated.").should("be.visible")
        this.validateButtonWorks(this.btn_Edit_Account_Details,"My Account Information")
        this.validateValue(this.txt_First_Name,firstName)
        this.validateValue(this.txt_Last_Name,lastName)
        this.validateValue(this.txt_Email,email)
        this.validateValue(this.txt_Telephone,telephone)
        this.validateValue(this.txt_Fax,fax)
    }

}
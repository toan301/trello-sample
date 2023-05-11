import { AccountDashboardPage } from "./accountDashboardpage";

export class AddressBookPage extends AccountDashboardPage{
    //CSS
    btn_Edit = "button[title='Edit']"
    btn_New_Address = "a[title='New Address']"
    txt_First_Name = "#AddressFrm_firstname"
    txt_Last_Name = "#AddressFrm_lastname"
    txt_Company = "#AddressFrm_company"
    txt_Address1 = "#AddressFrm_address_1"
    txt_Address2 = "#AddressFrm_address_2"
    txt_City = "#AddressFrm_city"
    drp_Region_State = "#AddressFrm_zone_id"
    txt_Zip_PostCode = "#AddressFrm_postcode"
    drp_Country = "#AddressFrm_country_id"
    chk_Default_Adress_Yes = "#AddressFrm_default1"
    chk_Default_Adress_No = "#AddressFrm_default0"

    //Methods

    /**
     * 
     */
    validateElementsOnAddressBookPage(){
        let elements = [this.btn_Edit, this.btn_New_Address, this.btn_Back]
        elements.forEach(element => {
            cy.get(element).should("be.visible")
        });
    }

    /**
     * 
     */
    validateElementsOnNewAddressBookPage(){
        let elements = [this.txt_First_Name, this.txt_Last_Name, this.txt_Company, this.txt_Address1, this.txt_Address2, 
                        this.txt_City, this.drp_Region_State, this.txt_Zip_PostCode, this.drp_Country, this.chk_Default_Adress_Yes,
                        this.chk_Default_Adress_No, this.btn_Back, this.btn_Continue]
        elements.forEach(element => {
            cy.get(element).should("be.visible")
        });
    }
    
    /**
     * 
     * @param {*} firstName the required field
     * @param {*} lastName the required field
     * @param {*} address1 the required field
     * @param {*} city the required field
     * @param {*} region the required field
     * @param {*} zip the required field
     * @param {*} country the required field
     * @param {*} company not be required field
     * @param {*} address2 not be required field
     * @param {*} defaultAddress not be required field
     */

    addNewAddress(firstName, lastName, address1, city, region, zip, country, company=null, address2=null, defaultAddress=false){
        this.clickOnButton(this.btn_New_Address)
        this.inputData(this.txt_First_Name,firstName)
        this.inputData(this.txt_Last_Name,lastName)
        this.inputData(this.txt_Company,company)
        this.inputData(this.txt_Address1,address1)
        this.inputData(this.txt_Address2,address2)
        this.inputData(this.txt_City,city)
        this.selectDropdown(this.drp_Region_State, region)
        this.inputData(this.txt_Zip_PostCode,zip)
        this.selectDropdown(this.drp_Country,country)
        if (defaultAddress == true) { this.clickOnButton(this.chk_Default_Adress_Yes)}
        this.clickOnButton(this.btn_Continue)
        this.validateMessageSuccessfully("Your address has been successfully inserted")
        //validate data is displayed on Address Book Entries
        let name = firstName+ " " + lastName
        let city_zip = city+ " " + zip
        let info = [ name, address1, city_zip, region, country]
        info.forEach(element => {
            cy.get(".contentpanel div:nth-child(2) address").contains(element).should('be.visible')
        });
        //Validate Edit and Delete button
        if (defaultAddress == true){}
    }
}
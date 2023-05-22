import AccountDashboardPage from './accountDashboardpage';

export default class AddressBookPage extends AccountDashboardPage {
  // CSS
  btn_Edit = 'button[title="Edit"]';

  btn_Delete = 'button[title="Delete"]';

  btn_New_Address = 'a[title="New Address"]';

  txt_First_Name = '#AddressFrm_firstname';

  txt_Last_Name = '#AddressFrm_lastname';

  txt_Company = '#AddressFrm_company';

  txt_Address1 = '#AddressFrm_address_1';

  txt_Address2 = '#AddressFrm_address_2';

  txt_City = '#AddressFrm_city';

  drp_Region_State = '#AddressFrm_zone_id';

  txt_Zip_PostCode = '#AddressFrm_postcode';

  drp_Country = '#AddressFrm_country_id';

  chk_Default_Adress_Yes = '#AddressFrm_default1';

  chk_Default_Adress_No = '#AddressFrm_default0';

  // Methods

  /**
   *
   */
  validateElementsOnAddressBookPage() {
    const elements = [
      this.btn_Edit,
      this.btn_New_Address,
      this.btn_Back,
    ];
    elements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  }

  /**
   *
   */
  validateElementsOnNewAddressBookPage() {
    const elements = [
      this.txt_First_Name,
      this.txt_Last_Name,
      this.txt_Company,
      this.txt_Address1,
      this.txt_Address2,
      this.txt_City,
      this.drp_Region_State,
      this.txt_Zip_PostCode,
      this.drp_Country,
      this.chk_Default_Adress_Yes,
      this.chk_Default_Adress_No,
      this.btn_Back,
      this.btn_Continue,
    ];
    elements.forEach((element) => {
      cy.get(element).should('be.visible');
    });
  }

  /**
   *
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} address1
   * @param {*} city
   * @param {*} region
   * @param {*} zip
   * @param {*} country
   * @param {*} company
   * @param {*} address2
   * @param {*} defaultAddress
   */
  addNewAddress(
    firstName,
    lastName,
    address1,
    city,
    region,
    zip,
    country,
    defaultAddress = false,
    company = null,
    address2 = null,
  ) {
    this.clickOnButton(this.btn_New_Address);
    this.inputDataToAddressForm(
      firstName,
      lastName,
      address1,
      city,
      region,
      zip,
      country,
      defaultAddress,
      company,
      address2,
    );
    this.validateMessageSuccessfully('Your address has been successfully inserted');

    // Validate data is displayed on Address Book Entries
    this.validateDataOnAddressBookEntries(
      1,
      firstName,
      lastName,
      address1,
      city,
      region,
      zip,
      country,
    );

    // Validate Edit and Delete button
    this.validateEditDeleteButton(1, defaultAddress);
  }

  /**
   *
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} address1
   * @param {*} city
   * @param {*} region
   * @param {*} zip
   * @param {*} country
   * @param {*} defaultAddress
   * @param {*} company
   * @param {*} address2
   */
  inputDataToAddressForm(
    firstName,
    lastName,
    address1,
    city,
    region,
    zip,
    country,
    defaultAddress = false,
    company = null,
    address2 = null,
  ) {
    this.inputData(this.txt_First_Name, firstName);
    this.inputData(this.txt_Last_Name, lastName);
    this.inputData(this.txt_Company, company);
    this.inputData(this.txt_Address1, address1);
    this.inputData(this.txt_Address2, address2);
    this.inputData(this.txt_City, city);
    this.inputData(this.txt_Zip_PostCode, zip);
    this.selectDropdown(this.drp_Country, country);
    this.selectDropdown(this.drp_Region_State, region);
    this.setDefaultAddress(defaultAddress);
    this.clickOnButton(this.btn_Continue);
  }

  /**
   *
   * @param {*} sequence is sequence of addresses in the table
   * @param {*} isDefault Is this address default?
   */
  validateEditDeleteButton(sequence, isDefault) {
    const seq = sequence + 1;
    const cssBase = `.contentpanel div:nth-child(${seq}) tr`;
    cy.get(cssBase).find(this.btn_Edit).should('be.visible');
    if (isDefault) {
      cy.get(cssBase).find(this.btn_Delete).should('not.exist');
    } else { cy.get(cssBase).find(this.btn_Delete).should('be.visible'); }
  }

  /**
   *
   * @param {*} sequence is sequence of addresses in the table
   */
  deleteAddress(sequence) {
    const seq = sequence + 1;
    const cssBase = `.contentpanel div:nth-child(${seq}) tr`;
    cy.get(cssBase).find(this.btn_Delete).click();
    this.validateMessageSuccessfully('Your address has been successfully deleted');
  }

  /**
   *
   * @param {*} sequence is sequence of addresses in the table
   */
  clickEditAddressButton(sequence) {
    const seq = sequence + 1;
    const cssBase = `.contentpanel div:nth-child(${seq}) tr`;
    cy.get(cssBase).find(this.btn_Edit).click();
  }

  /**
   *
   * @param {*} isDefault
   */
  setDefaultAddress(isDefault) {
    if (isDefault === true) {
      this.clickOnButton(this.chk_Default_Adress_Yes);
    }
  }

  /**
   *
   * @param {*} sequenceis is sequence of addresses in the table
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} address1
   * @param {*} city
   * @param {*} region
   * @param {*} zip
   * @param {*} country
   */
  validateDataOnAddressBookEntries(
    sequence,
    firstName,
    lastName,
    address1,
    city,
    region,
    zip,
    country,
  ) {
    const seq = sequence + 1;
    const name = `${firstName} ${lastName}`;
    const cityZip = `${city} ${zip}`;
    const info = [name, address1, cityZip, region, country];
    info.forEach((element) => {
      cy.get(`.contentpanel div:nth-child(${seq}) address`).contains(element).should('be.visible');
    });
  }

  /**
   *
   * @param {*} sequence
   * @param {*} firstName
   * @param {*} lastName
   * @param {*} address1
   * @param {*} city
   * @param {*} region
   * @param {*} zip
   * @param {*} country
   * @param {*} defaultAddress
   * @param {*} company
   * @param {*} address2
   */
  editAddress(
    sequence,
    firstName,
    lastName,
    address1,
    city,
    region,
    zip,
    country,
    defaultAddress = false,
    company = null,
    address2 = null,
  ) {
    this.clickEditAddressButton(sequence);
    this.inputDataToAddressForm(
      firstName,
      lastName,
      address1,
      city,
      region,
      zip,
      country,
      defaultAddress,
      company,
      address2,
    );
    this.validateMessageSuccessfully('Your address has been successfully updated');
    this.validateDataOnAddressBookEntries(
      sequence,
      firstName,
      lastName,
      address1,
      city,
      region,
      zip,
      country,
    );
  }
}

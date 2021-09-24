package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class CadastrarUsuarioPage {
    @FindBy(id = "customer_firstname")
    public WebElement inputCustomerFirstName;

    @FindBy(id = "customer_lastname")
    public WebElement inputCustomerLastName;

    @FindBy(id = "email")
    public WebElement inputEmail;

    @FindBy(id = "passwd")
    public WebElement inputPasword;

    @FindBy(id = "firstname")
    public WebElement inputAddressFirstName;

    @FindBy(id = "lastname")
    public WebElement inputAddressLastName;

    @FindBy(id = "address1")
    public WebElement inputAddress;

    @FindBy(id = "city")
    public WebElement inputCity;

    @FindBy(id = "id_state")
    public WebElement optionState;

    @FindBy(id = "postcode")
    public WebElement inputZipCode;

    @FindBy(id = "phone_mobile")
    public WebElement inputPhoneMobile;

    @FindBy(id = "submitAccount")
    public WebElement botaoSubmitAccount;

    public void informarCampoCustomerFirstName(String customerFirstName) {
        inputCustomerFirstName.sendKeys(customerFirstName);
    }

    public void informarCampoCustomerLastName(String customerLastName) {
        inputCustomerLastName.sendKeys(customerLastName);
    }

    public void informarCampoInputEmail(String email) {
        inputEmail.sendKeys(email);
    }

    public void informarCampoPassword(String password) {
        inputPasword.sendKeys(password);
    }

    public void informarCampoAddressFirstName(String firstname) {
        inputAddressFirstName.sendKeys(firstname);
    }

    public void informarCampoAddressLastName(String lastname) {
        inputAddressLastName.sendKeys(lastname);
    }

    public void informarCampoAddress(String address) {
        inputAddress.sendKeys(address);
    }

    public void informarCampoCity(String city) {
        inputCity.sendKeys(city);
    }

    public void informarCampoState(String stateName) {
        Select state = new Select(optionState);
        state.selectByVisibleText(stateName);
    }

    public void informarCampoZipCode(String zipcode) {
        inputZipCode.sendKeys(zipcode);
    }

    public void informarCampoPhoneMobile(String phone) {
        inputPhoneMobile.sendKeys(phone);
    }

    public void cadastrarUsuario() {
        botaoSubmitAccount.click();
    }


}

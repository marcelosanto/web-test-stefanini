package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class TelaInicialPage extends BasePage {

    public void acionarBotaoSingin() {
        botaoSignin.click();
    }

    @FindBy(id = "email_create")
    public WebElement inputEmailAddress;

    @FindBy(id = "SubmitCreate")
    public WebElement botaoCreateAnAccount;

    public void informarCampoEmail(String email) {
        inputEmailAddress.sendKeys(email);
    }

    public void acionarBotaoCreateAnAccount() {
        botaoCreateAnAccount.click();
    }
}

package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginUsuarioPage {
    @FindBy(id = "email")
    public WebElement inputLoginEmail;

    @FindBy(id = "passwd")
    public WebElement inputLoginPassword;

    @FindBy(id = "SubmitLogin")
    public WebElement inputLoginSubmitLogin;

    public void informarLoginEmail(String email) {
        inputLoginEmail.sendKeys(email);
    }

    public void informarLoginSenha(String senha) {
        inputLoginPassword.sendKeys(senha);
    }

    public void acionarBotaoLogar() {
        inputLoginSubmitLogin.click();
    }

    public void realizarLogin(String email, String senha) {
        informarLoginEmail(email);
        informarLoginSenha(senha);
        acionarBotaoLogar();
    }

}

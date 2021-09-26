package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.openqa.selenium.By;
import pageObjects.LoginUsuarioPage;
import pageObjects.TelaInicialPage;

import static org.junit.Assert.assertTrue;
import static utils.Utils.Na;
import static utils.Utils.driver;

public class LoginUsuarioSteps {

    @Quando("acionar o botao Sign in")
    public void acionarOBotaoSignIn() {
        Na(TelaInicialPage.class).acionarBotaoSingin();
    }

    @Quando("adicionar o email {string} em ALREADY REGISTERED?")
    public void adicionarOEmailEmALREADYREGISTERED(String email) {
        Na(LoginUsuarioPage.class).informarLoginEmail(email);
    }

    @Quando("informar senha no campo password {string}")
    public void informarSenhaNoCampoPassword(String senha) {
        Na(LoginUsuarioPage.class).informarLoginSenha(senha);
    }

    @Entao("vou logar no sistema")
    public void vouLogarNoSistema() {
        Na(LoginUsuarioPage.class).acionarBotaoLogar();
    }

    @Entao("o sistema exibe a mensagem de erro")
    public void oSistemaExibeAMensagemDe() {
        assertTrue(driver.findElement(By.xpath("//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]")).isDisplayed());
        //assertTrue(driver.findElement(By.xpath("//li[contains(text(),'Authentication failed.')]")).isDisplayed());

    }

    public void realizarLogin(String email, String senha) {
        adicionarOEmailEmALREADYREGISTERED(email);
        informarSenhaNoCampoPassword(senha);
        vouLogarNoSistema();
    }

}

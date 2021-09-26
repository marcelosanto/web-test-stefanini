package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import pageObjects.LoginUsuarioPage;

import static utils.Utils.*;

public class Hooks {

    @Before(value = "not @ComprasUsuario")
    public void funcionalidadeLogin() {
        acessarSistema();
    }

    @Before(value = "@ComprasUsuario")
    public void setUp() {
        acessarSistema();
        Na(LoginUsuarioPage.class).realizarLogin("lols@gmail.com", "12345678");
    }

    @After()
    public void tearDown(Scenario scenario) {
        capturarTela(scenario);
        driver.quit();
    }
}

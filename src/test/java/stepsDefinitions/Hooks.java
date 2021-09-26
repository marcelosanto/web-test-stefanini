package stepsDefinitions;

import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;

import static utils.Utils.*;

public class Hooks {

    @Before
    public void funcionalidadeLogin() {
        acessarSistema();
    }

    /*@Before(value = "not @LogarUsuario or not @CadastrarUsuario")
    public void setUp() {
        acessarSistema();
        Na(LoginUsuarioPage.class).realizarLogin("lols@gmail.com", "12345678");
    }*/

    @After()
    public void tearDown(Scenario scenario) {
        capturarTela(scenario);
        driver.quit();
    }
}

package stepsDefinitions;

import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import pageObjects.CadastrarUsuarioPage;
import pageObjects.TelaInicialPage;

import static utils.Utils.Na;

public class CadastrarUsuarioSteps {
    @Quando("eu acionar o botao Sign in")
    public void euAcionarOBotaoSignIn() {
        Na(TelaInicialPage.class).acionarBotaoSingin();
    }

    @Quando("adicionar o email {string} em CREATE AN ACCOUNT")
    public void adicionarOEmailEmCREATEANACCOUNT(String email) {
        int numeroAletorio = (int) (Math.random() * (1000 - Math.random()));
        Na(TelaInicialPage.class).informarCampoEmail(numeroAletorio + email);
    }

    @Quando("acionar o botao CREATE AN ACCOUNT")
    public void acionarOBotaoCREATEANACCOUNT() {
        Na(TelaInicialPage.class).acionarBotaoCreateAnAccount();
    }

    @Quando("informar no campo First name {string}")
    public void informarNoCampoFirstName(String firstname) {
        Na(CadastrarUsuarioPage.class).informarCampoCustomerFirstName(firstname);
    }

    @Quando("informar no campo Last name {string}")
    public void informarNoCampoLastName(String lastname) {
        Na(CadastrarUsuarioPage.class).informarCampoCustomerLastName(lastname);
    }

    @Quando("informar no campo password {string}")
    public void informarNoCampoPassword(String password) {
        Na(CadastrarUsuarioPage.class).informarCampoPassword(password);
    }

    @Quando("informar no campo First name YOU ADDRESS {string}")
    public void informarNoCampoFirstNameYOUADDRESS(String name) {
        Na(CadastrarUsuarioPage.class).informarCampoAddressFirstName(name);
    }

    @Quando("informar no campo Last name YOU ADDRESS {string}")
    public void informarNoCampoLastNameYOUADDRESS(String lastname) {
        Na(CadastrarUsuarioPage.class).informarCampoAddressLastName(lastname);
    }

    @Quando("informar o Address  {string}")
    public void informarOAddress(String address) {
        Na(CadastrarUsuarioPage.class).informarCampoAddress(address);
    }

    @Quando("informar o City do meu endereco {string}")
    public void informarOCityDoMeuEndereco(String city) {
        Na(CadastrarUsuarioPage.class).informarCampoCity(city);
    }

    @Quando("informar o State do meu endereco {string}")
    public void informarOStateDoMeuEndereco(String state) {
        Na(CadastrarUsuarioPage.class).informarCampoState(state);
    }

    @Quando("informar o Postal Code {string}")
    public void informarOZipPostalCode(String codepostal) {
        Na(CadastrarUsuarioPage.class).informarCampoZipCode(codepostal);
    }

    /*@Quando("informar o Country {string}")
    public void informarOCountry(String country) {
        Na(CadastrarUsuarioPage.class).informarCampoCountry(country);
    }*/

    @Quando("informar o Mobile phone {string}")
    public void informarOMobilePhone(String phone) {
        Na(CadastrarUsuarioPage.class).informarCampoPhoneMobile(phone);
    }

    @Entao("o sistema cadastra o usuario")
    public void oSistemaCadastraOUsuario() {
        Na(CadastrarUsuarioPage.class).cadastrarUsuario();
    }


}

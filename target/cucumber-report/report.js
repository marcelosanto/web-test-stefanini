$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CadastrarUsuario.feature");
formatter.feature({
  "name": "Cadastrar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    }
  ]
});
formatter.scenario({
  "name": "cadastrar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@cadastro"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "eu acionar o botao Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.euAcionarOBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o email \"lols@gmail.com\" em CREATE AN ACCOUNT",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.adicionarOEmailEmCREATEANACCOUNT(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao CREATE AN ACCOUNT",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.acionarOBotaoCREATEANACCOUNT()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo First name \"Maquerle\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoFirstName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo Last name \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoLastName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo First name YOU ADDRESS \"Maquerle\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoFirstNameYOUADDRESS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar no campo Last name YOU ADDRESS \"Santos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarNoCampoLastNameYOUADDRESS(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Address  \"Rua Travessa dos Marrecos\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOAddress(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o City do meu endereco \"Serra\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOCityDoMeuEndereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o State do meu endereco \"Nevada\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOStateDoMeuEndereco(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Postal Code \"00000\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOZipPostalCode(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar o Mobile phone \"+5527999999999\"",
  "keyword": "E "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.informarOMobilePhone(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema cadastra o usuario",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaCadastraOUsuario()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});
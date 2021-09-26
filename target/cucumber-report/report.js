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
  "name": "email invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@CadastrarUsuario"
    },
    {
      "name": "@cadastroInvalido"
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
  "name": "adicionar o email \"koasdkoskadoksado\" em CREATE AN ACCOUNT",
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
  "name": "o sistema exibe a mensagem de \"Invalid email address.\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "CadastrarUsuarioSteps.oSistemaExibeAMensagemDe(String)"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
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
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/LoginUsuario.feature");
formatter.feature({
  "name": "Logar usuario",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@LogarUsuario"
    }
  ]
});
formatter.scenario({
  "name": "usuario invalido",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@LogarUsuario"
    },
    {
      "name": "@loginInvalido"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginUsuarioSteps.acionarOBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o email \"teste@teste.com\" em ALREADY REGISTERED?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginUsuarioSteps.adicionarOEmailEmALREADYREGISTERED(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar senha no campo password \"125484848484\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginUsuarioSteps.informarSenhaNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o sistema exibe a mensagem de erro",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginUsuarioSteps.oSistemaExibeAMensagemDe()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "logar usuario",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@LogarUsuario"
    },
    {
      "name": "@loginSucesso"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "acionar o botao Sign in",
  "keyword": "Quando "
});
formatter.match({
  "location": "LoginUsuarioSteps.acionarOBotaoSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "adicionar o email \"lols@gmail.com\" em ALREADY REGISTERED?",
  "keyword": "E "
});
formatter.match({
  "location": "LoginUsuarioSteps.adicionarOEmailEmALREADYREGISTERED(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "informar senha no campo password \"12345678\"",
  "keyword": "E "
});
formatter.match({
  "location": "LoginUsuarioSteps.informarSenhaNoCampoPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou logar no sistema",
  "keyword": "Entao "
});
formatter.match({
  "location": "LoginUsuarioSteps.vouLogarNoSistema()"
});
formatter.result({
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
});
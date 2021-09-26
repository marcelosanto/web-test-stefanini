#language: pt
  #enconding: UTF-8

@LogarUsuario
Funcionalidade: Logar usuario

  @loginInvalido
  Cenario: usuario invalido
    Quando acionar o botao Sign in
    E adicionar o email "teste@teste.com" em ALREADY REGISTERED?
    E informar senha no campo password "125484848484"
    Entao o sistema exibe a mensagem de erro

  @loginSucesso
  Cenario: logar usuario
    Quando acionar o botao Sign in
    E adicionar o email "lols@gmail.com" em ALREADY REGISTERED?
    E informar senha no campo password "12345678"
    Entao vou logar no sistema

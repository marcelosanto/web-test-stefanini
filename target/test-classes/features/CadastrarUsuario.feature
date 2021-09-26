#language: pt
  #enconding: UTF-8

@CadastrarUsuario
Funcionalidade: Cadastrar usuario

  @cadastroInvalido
  Cenario: email invalido
    Quando eu acionar o botao Sign in
    E adicionar o email "koasdkoskadoksado" em CREATE AN ACCOUNT
    E acionar o botao CREATE AN ACCOUNT
    Entao o sistema exibe a mensagem de "Invalid email address."

  @cadastro
  Cenario: cadastrar usuario
    Quando eu acionar o botao Sign in
    E adicionar o email "lols@gmail.com" em CREATE AN ACCOUNT
    E acionar o botao CREATE AN ACCOUNT
    E informar no campo First name "Maquerle"
    E informar no campo Last name "Santos"
    E informar no campo password "12345678"
    E informar no campo First name YOU ADDRESS "Maquerle"
    E informar no campo Last name YOU ADDRESS "Santos"
    E informar o Address  "Rua Travessa dos Marrecos"
    E informar o City do meu endereco "Serra"
    E informar o State do meu endereco "Nevada"
    E informar o Postal Code "00000"
    E informar o Mobile phone "+5527999999999"
    Entao o sistema cadastra o usuario

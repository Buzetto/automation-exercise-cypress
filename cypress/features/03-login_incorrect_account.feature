Funcionalidade: Acessar a conta com o email e senha incorretos
    Como um cliente cadastrado
    Quero poder acessar minha conta
    Para conseguir realizar compras na plataforma

    Cenário: Tentar acessar com a conta correta, email e senha
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Signup / Login"
        Então verifico que a sessão "Login to your account" esta visível
        Quando digito o email e a senha incorretos
        E clico no botão de Login
        Então verifico que a mensagem "Your email or password is incorrect!" está visível
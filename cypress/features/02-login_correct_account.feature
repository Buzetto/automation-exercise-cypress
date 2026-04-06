Funcionalidade: Acessar a conta com o email e senha correta
    Como um cliente cadastrado
    Quero poder acessar minha conta
    Para conseguir realizar compras na plataforma

    Cenário: Acessar com a conta correta, email e senha
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Signup / Login"
        E verifico que a sessão "Login to your account" esta visível
        Quando digito o email e a senha corretamente
        E clico no botão de Login
        Então verifico que a mensagem "Logged in as username" está visível
        Quando clico no botão "Delete Account"
        Então verifico que a mensagem "ACCOUNT DELETED" está visível
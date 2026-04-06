Funcionalidade: Registrar usuário
    Como um novo visitante no site
    Quero poder criar uma conta
    Para conseguir realizar compras na plataforma

    Cenário: Registrar um novo usuário com sucesso
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando eu clico no botão "Signup / Login"
        E verifico que a sessão "New User Signup!" está visível
        Quando digito o "name" e "email address"
        E clico no botão "Signup"
        Então verifico que a mensagem "ENTER ACCOUNT INFORMATION" está visível
        Quando eu preencho os detalhes da conta: Título, Nome, Senha, Data de Nascimento
        E seleciono a caixa de seleção "Sign up for our newsletter!"
        E seleciono a caixa de seleção "Receive special offers from our partners!"
        E peencho os dados adicionais do Endereço
        E clico no botão "Create Account"
        Então verifico que a mensagem "ACCOUNT CREATED" está visível
        Quando clico no botão "Continue"
        Então verifico que a mensagem "Logged in as username" está visível
        Quando clico no botão "Delete account"
        Então verifico que a mensagem "ACCOUNT DELETED" está visível
        E clico no botão "Continue"
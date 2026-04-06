Funcionalidade: Fazer logout após acesso correto
    Como um cliente cadastrado
    Quero poder sair da minha conta
    Para garantir que minhas credenciais não fiquem expostas no navegador

    Cenário: Fazer logout de minha conta
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Signup / Login"
        Então verifico que a sessão "Login to your account" esta visível
        Quando digito o e-mail e a senha corretamente
        E clico no botão "Login"
        Então verifico que a mensagem "Logged in as username" está visível
        Quando clico no botão "Logout"
        Então verifico que o usuário é redirecionado para a página de login
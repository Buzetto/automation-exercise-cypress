Funcionalidade: Registrar usuário com um email ja existente
    Como um novo visitante no site
    Quero que o sistema valide meu email durante o cadastro
    Para evitar contas duplicadas com o mesmo endereço de e-mail

    Cenário: Tentar registrar usuário com um e-mail já cadastrado
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando eu clico no botão "Signup / Login"
        Então verifico que a sessão "New User Signup!" está visível
        Quando digito o "name" e "email address" já cadastrado anteriormente
        E clico no botão "Signup"
        Então verifico que a mensagem "Email Address already exist!" está visível
Funcionalidade: Enviar um formulário de contato
    Como um usuário precisando de ajuda
    Quero enviar um formulário de contato para a equipe de suporte
    Para conseguir suporte em minha dúvida

    Cenário: Preencher o formulário de contato
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão de "Contact Us"
        Então verifico que a mensagem "GET IN TOUCH" está visível
        Quando digito "name", "email", "subject" e a "message"
        E envio um arquivo
        E clico no botão de "Submit"
        E confirmo o alerta clicando no botão "OK"
        Então verifico que a mensagem "Success! Your details have been submitted successfully." está visível
        Quando clico no botão "Home" 
        Então verifico que sou redirecionado para a página inicial com sucesso
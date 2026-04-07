Funcionalidade: Verificar as informações de Endereço
    Como um usuário cadastrado
    Quero verificar as minhas informações de Endereço
    Para poder comprar os produtos e recebe-los corretamente

    Cenário: Verificar as informações de endereço se batem com as do cadastro
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Signup / Login"
        E preencho os campos com as informações 
        E clico no botão "creat account"
        Então verifico a mensagem "ACCOUNT CREATED" 

        Quando clico no botão "Continue"
        Então verifico a mensagem "Logged in as [Seu Nome]" no topo da página

        Quando adiciono produtos no carrinho
        E clico no botão "Cart"
        Então verifico que a página de carrinho está visível

        Quando clico para prosseguir com o pagamento
        Então verifico que as informações de endereços são iguais a de cadastro
        E verifico que as informações de pagamento são iguais a de cadastro

        Quando clico no botão "Delete Account"
        Então verifico a mensagem "ACCOUNT DELETED"
        Quando clico em "Continue"
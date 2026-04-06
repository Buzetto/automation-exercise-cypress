Funcionalidade: Procurar um produto
    Como um usuário cadastrado
    Quero procurar um produto específico
    Para realizar a compra do mesmo

    Cenário: Verificar se a pesquisa de produto está funcionando
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão de produtos
        Então sou direcionado para a página "ALL PRODUCTS" com sucesso
        Quando digito o nome do produto na barra de pesquisa
        E clico no botão de procurar
        Então verifico que a seção de "SEARCHED PRODUCTS" está visível
        E verifico todos os produtos relacionados ao texto da pesquisa
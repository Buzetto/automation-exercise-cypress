Funcionalidade: Buscar produtos e verificar carrinho após login
    Como um usuário da loja
    Quero buscar produtos, adicioná-los ao carrinho e fazer login
    Para garantir que os itens continuem no meu carrinho apos acessar minha conta

    Cenário: Manter itens no carrinho após realizar o login
        Dado que estou na página inicial do Automation Exercise

        Quando clico no botão "Products"
        Então sou direcionado para a página "ALL PRODUCTS" com sucesso
        Quando digito o nome do produto na barra de pesquisa
        E clico no botão de pesquisar
        Então verifico que a seção "SEARCHED PRODUCTS" está visível
        E verifico que todos os produtos relacionados à pesquisa estão visíveis

        Quando adiciono os produtos pesquisados ao carrinho
        E clico no botão "Cart"
        Então verifico que os produtos estão visíveis no carrinho

        Quando clico no botão "Signup / Login"
        E preencho os dados de login corretamente
        E clico no botão "Login"
        E clico novamente no botão "Cart"
        Então verifico que os produtos continuam visíveis no carrinho
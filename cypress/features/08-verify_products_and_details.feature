Funcionalidade: Encontrar todos os produtos e seus detalhes
    Como um usuário cadastrado
    Quero ver todos os produtos e seus detalhes
    Para seguir com as minhas compras dentro do site

    Cenário: Verificar se todos os produtos e seus detalhes estão acessíveis corretamente
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão de produtos
        Então sou direcionado para a página "ALL PRODUCTS" com sucesso
        E a lista de produtos está vísivel
        Quando clico no botão "View Product" do primeiro produto
        E sou direcionado para a página de detalhes
        Então verifico que os detalhes "product name", "category", "price", "availability", "condition", "brand" estão visíveis
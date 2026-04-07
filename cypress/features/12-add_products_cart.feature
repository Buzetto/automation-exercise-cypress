Funcionalidade: Adicionar produtos no carrinho
    Como um cliente da loja
    Quero adicionar produtos no carrinho
    Para realizar as minhas compras de uma só vez

    Cenário: Adicionar dois produtos e validar os valores no carrinho
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Products"
        E passo o mouse por cima do primeiro produto e clico no botão "Add to cart"
        E clico no botão "Continue Shopping"
        E passo o mouse por cima do segundo produto e clico no botão "Add to cart"
        E clico no botão "View Cart"
        Quando clico no botão "View Cart"
        Então verifico que ambos os produtos foram adicionados ao carrinho
        E verifico que os preços, a quantidade e o preço total estão corretos

Funcionalidade: Colocar produto no carrinho através das recomendações
    Como usuario da loja
    Quero adicionar os produtos em meu carrinho das recomendações
    Para comprar e testar se é bem recomendado

    Cenário: Adicionar produtos no carrinho de compra através da sessão recomendados
        Dado que estou na página inicial do Automation Exercise
        Quando navego até o fim da página
        Então verifico que a sessão "RECOMMENDED ITENS" está visível
        Quando clico no botão "Add to Cart" no produto recomendado
        E clico no botão "View Cart"
        Então verifico que a página de carrinho e o produto adicionado está visível
Funcionalidade: Verificar a quantidade de produtos no carrinho
    Como um cliente da loja
    Quero verificar a quantidade de produtos em meu carrinho
    Para me decidir o que comprar ou não 

    Cenário: Verifiar a quantidade de produtos adicionados no carrinho
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "View Product" em qualquer produto da página
        Então verifico que os detalhes do produto se abriu
        Quando aumento a quantidade desse produto para 4
        E clico no botão "Add to cart"
        E clico no botão "View Cart"
        Então verifico que o produto está visível na página com a quantidade igual a 4
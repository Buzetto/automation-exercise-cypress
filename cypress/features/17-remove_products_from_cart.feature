Funcionalidade: Remover produto do carrinho
    Como um usuário da loja
    Quero remover alguns produtos do carrinho
    Para economizar e comprar somente o necessário

    Cenário: Remover os produtos do carrinho
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando adiciono alguns produtos no carrinho
        E clico no botão "Cart"
        Então verifico que a página do carrinho está visível
        Quando clico no botão "X" correspondente ao produto
        Então verifico que o produto foi removido do carrinho
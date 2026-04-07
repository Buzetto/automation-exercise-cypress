Funcionalidade: Comprar os produtos do carrinho
    Como um usuário da loja
    Quero comprar os produtos do carrinho
    Para poder pagar e receber em casa

    Cenário: Realizar a compra completa cadastrando antes de prosseguir com a compra
        Dado que estou na página inicial do Automation Exercise
        E verifico que a página inicial está visível
        Quando clico no botão "Signup / Login"
        E preencho os campos com as informações 
        E clico no botão "creat account"
        Então verifico a mensagem "ACCOUNT CREATED" 

        Quando clico no botão "Continue"
        Então verifico a mensagem "Logged in as [Seu Nome]" no topo da página

        Quando adiciono os produtos no carrinho
        E clico no botão "Cart"
        Então verifico que a página do carrinho está visível

        Quando clico no botão "Proceed to Checkout"
        Então verifico as seções de Detalhes do Endereço e Revisar seu Pedido

        Quando escrevo a descrição no campo de comentário 
        E clico em "Place Order"
        E adiciono os detalhes de pagamento: Nome no cartão, Numero do cartão, CVV, Data de Expiração
        E clico no botão "Pay and Confirm Order"
        Então verifco a mensagem de sucesso "Your order has been placed successfully"

        Quando clico no botão "Delete Account"
        Então verifico a mensagem "ACCOUNT DELETED"
        Quando clico em "Continue"
Funcionalidade: Baixar a nota após a compra
    Como cliente da loja
    Quero baixar a nota de compra 
    Para ter o documento comprovando a compra

    Cenário: Baixar a Invoice após a compra dos produtos do carrinho
        Dado que estou na página inicial do Automatio Exercise
        E verifico que a página inicial está visível
        Quando adiciono os produtos no carrinho
        E clico no botão "Cart"
        Então verifico que a página do carrinho está visível

        Quando clico no botão "Proceed to Checkout"
        E clico no botão "Register / Login"
        E preencho os campos com as informações
        E clico no botão "Signup"
        Então verifico a mensagem "ACCOUNT CREATED" 

        Quando clico no botão "Continue"
        Então verifico a mensagem "Logged in as [Seu Nome]" no topo da página

        Quando clico no botão "Cart"
        E clico no botão "Proceed to Checkout"
        Então verifico as informações de entrega
        E verifico os produtos selecionados do carrinho

        Quando escrevo a descrição no campo de comentário 
        E clico em "Place Order"
        E adiciono os detalhes de pagamento: Nome no cartão, Numero do cartão, CVV, Data de Expiração
        E clico no botão "Pay and Confirm Order"
        Então verifco a mensagem de sucesso "Your order has been placed successfully"

        Quando clico no botão "Download Invoice"
        E verifico que o arquivo foi baixado corretamente
        E clico no botão "Continue"
        E clico no botão "DELETE ACCOUNT"
        Então verifico a mensagem "ACCOUNT DELETED"
        Quando clico no botão "Continue"
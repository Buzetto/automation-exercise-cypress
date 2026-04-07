Funcionalidade: Adicionar uma análise de um produto
    Como usuario da loja
    Quero adicionar uma análise de produto
    Para insentivar as outras pessoas a comprarem

    Cenário: Criar um review em um produto
        Dado que estou na página inicial do Automation Exercise
        Quando clico no botão "Product"
        Então verifico que sou direcionado para a página de "ALL PRODUCTS" com sucesso
        Quando clico no botão "View Product"
        Então verifico que o campo "Write Your Review" esta visível
        Quando adiciono o nome, email e a analise no campo
        E clicno no botão "Submit"
        Então verifico a mensagem "Thank you for your review."
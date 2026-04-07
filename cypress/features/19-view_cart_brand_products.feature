Funcionalidade: Procurar produto por marca
    Como um usuário da loja
    Quero procurar alguns produtos por marca
    Para encontrar somente o que estou procurando

    Cenário: Verificar as categorias e sua navegação
        Dado que estou na página inicial do Automation Exercise
        E verifico que as categorias estão visíveis
        Quando clico no botão "Products"
        Então verifico que as Marcas estão visíveis no barra à esquerda
        Quando clico em qualquer marca
        Então verifico que sou direcionado a página da marca
        E os produtos estão visíveis
        Quando clico em qualquer outra marquina na barra à esquerda
        Então verifico que sou direcionado a página da marca
        E consigo ver os produtos
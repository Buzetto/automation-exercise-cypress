Funcionalidade: Procurar produto por categoria
    Como um usuário da loja
    Quero procurar alguns produtos por categoria
    Para encontrar somente o que estou procurando

    Cenário: Verificar as categorias e sua navegação
        Dado que estou na página inicial do Automation Exercise
        E verifico que as categorias estão visíveis
        Quando clico na categoria "Women"
        E clico em qualquer categoria abaixo da categoria "Women", como "Dress"
        Então verifico que a pagina de categoria esta visível
        E confirmo que o título "WOMEN - TOPS PRODUCTS" está visível
        Quando clico em qualquer sub-categoria de "Men" na barra do lado esquerdo
        Então verifico que sou direcionado para a pagina de categoria correta
Funcionalidade: Navegar na página
    Como cliente da loja
    Quero navegar pela página
    Para verificar todos os produtos visiveis

    Cenário: Navegar até o fim da pagina com Scroll e navegar ao topo sem o botão de seta
        Dado que estou na página inicial do Automatio Exercise
        E verifico que a página inicial está visível
        Quando navego para o fim da página com o Scroll
        Então verifico que a sessão "SUBSCRIPTION" está visível
        Quando navego para o topo com o Scroll
        Então verifico que a página é direcionada para o topo
        E verifico que o texto "Full-Fledged practice website for Automation Engineers" está visível
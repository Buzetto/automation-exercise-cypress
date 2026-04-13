describe('Massa de testes do carrinho de compras', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        cy.get('.logo').should('be.visible')
    })

    it("TC_12 - Add Producsts in Cart", () => {
        cy.get('a[href="/products"]').click()

        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-body').find('a[href="/view_cart"]').click()

        cy.get('#product-1').should('be.visible')
        cy.get('#product-2').should('be.visible')
    })

    it("TC_13 - Verify Product quantity in Cart", () => {
        cy.get('a[href="/products"]').click()
        
        cy.get('a[href="/product_details/1"]').click()
        cy.get('.product-details').should('be.visible')

        cy.get('#quantity').clear().type("4")
        cy.get('button.cart').click()

        cy.get('.modal-body').find('a[href="/view_cart"]').click()

        cy.get('.cart_quantity button').should('have.text', '4')
    })

    it("TC_17 - Remove Products From Cart", () => {
        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.get('.modal-body').find('a[href="/view_cart"]').click()

        //Loop de repetição para clicar 3x no botão delete e aguardar 2s entre os cliques
        for(let i = 0; i < 3; i++) {
            cy.get('.cart_quantity_delete').first().click()
            cy.wait(2000)
        }

        cy.get('#empty_cart').should('be.visible')
    })

    it('TC_20 - Search Products and Verify Cart After Login', () => {
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')

        cy.get('#search_product').type('Blue Top')
        cy.get('#submit_search').click()
        cy.contains('h2', 'Searched Products').should('be.visible')

        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()

        cy.get('li > a[href="/login"]').click()
        cy.get('[data-qa="login-email"]').type('teste@teste.teste.com.br')
        cy.get('[data-qa="login-password"]').type('Senha123')
        cy.get('[data-qa="login-button"]').click()

        cy.get('li > a[href="/view_cart"]').click()

        cy.get('#product-1').should('be.visible')
    })
})
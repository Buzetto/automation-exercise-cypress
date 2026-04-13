describe ("Testes sobre os produtos", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
        cy.get('.logo').should('be.visible')
    })

    it("TC_08 - Verify All Products and product detail page", () => {
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')
        cy.contains('h2', 'All Products').should('be.visible')

        cy.get('a[href="/product_details/1"]').click()

        cy.url().should('include', '/product_details')

        cy.contains('h2', 'Blue Top').should('be.visible')
        cy.contains('p', 'Category: Women > Tops').should('be.visible')
        cy.contains('span', 'Rs. 500').should('be.visible')
        cy.contains('b', 'Availability:').should('be.visible')
        cy.contains('b', 'Condition:').should('be.visible')
        cy.contains('b', 'Brand:').should('be.visible')
    })

    it("TC_09 - Search Product", () => {
        cy.get('a[href="/products"]').click()
        cy.url().should('include', '/products')
        cy.get('#search_product').type('Blue Top')
        cy.get('#submit_search').click()
        cy.contains('h2', 'Searched Products').should('be.visible')

        cy.contains('p', 'Blue Top').should('be.visible')
    })

    it("TC_18 - View Category Products", () => {
        cy.contains('h2', 'Category').should('be.visible')
        cy.get('a[href="#Women"]').click()
        cy.get('a[href="/category_products/1"]').click()
        cy.contains('h2', 'Women - Dress Products').should('be.visible')
        cy.get('a[href="#Men"]').click()
        cy.get('a[href="/category_products/3"]').click()
        cy.contains('h2', 'Men - Tshirts Products').should('be.visible')
    })

    it('TC_19 - View & Cart Brand Products', () => {
        cy.get('a[href="/products"]').click()
        cy.contains('h2', 'Brands').should('be.visible')
        cy.get('a[href="/brand_products/Polo"]').click()
        cy.contains('h2', 'Brand - Polo Products').should('be.visible')
        cy.get('a[href="/brand_products/Babyhug"]').click()
        cy.contains('h2', 'Brand - Babyhug Products').should('be.visible')
        cy.get('.productinfo').should('be.visible')
    })

    it('TC_21 - Add reviw on product', () => {
        cy.get('a[href="/products"]').click()
        cy.contains('h2', 'All Products').should('be.visible')
        cy.get('a[href="/product_details/1"]').click()
        cy.get('a[href="#reviews"]').should('be.visible')
        cy.get('#name').type("Victor")
        cy.get('input[placeholder="Email Address"]').type("teste@teste.com")
        cy.get('#review').type("Produto maravilhoso, com muita qualidade e extremamente confortável no corpo")
        cy.get('#button-review').click()
        cy.contains('span', 'Thank you for your review.', { timeout: 10000 }).should('be.visible')
    })

    it('TC_22 - Add to cart form Recommended items', () => {
        cy.contains('h2', 'recommended items').scrollIntoView().should('be.visible')
        cy.get('.recommended_items').find('a[data-product-id="3"]').click({force: true})
        cy.contains('a', 'View Cart').click()
        cy.get('#product-3').should('be.visible')
    })
})
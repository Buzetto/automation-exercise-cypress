import data from '../fixtures/test-data.json'

describe ("Products Tests", () => {
    
    beforeEach (() => {
        cy.start()
    })

    it("TC_08 - Verify All Products and product detail page", () => {
        cy.productPage()
        cy.searchAndVerify()
    })

    it("TC_09 - Search Product", () => {
        cy.searchProducts()
    })

    it("TC_18 - View Category Products", () => {
        cy.viewCategoryProducts()
    })

    it('TC_19 - View & Cart Brand Products', () => {
        cy.viewCartBrandProducts()
    })

    it('TC_21 - Add review on product', () => {
        cy.addReviewOnProduct(data.temporary_account)
    })    

    it('TC_22 - Add to cart from Recommended items', () => {
        cy.contains('h2', 'recommended items').scrollIntoView().should('be.visible')
        cy.get('.recommended_items').find('a[data-product-id="3"]').click({force: true})
        cy.contains('a', 'View Cart').click()
        cy.get('#product-3').should('be.visible')
    })
})
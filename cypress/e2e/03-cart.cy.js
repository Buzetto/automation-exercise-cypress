import data from '../fixtures/test-data.json'

describe('Cart Tests', () => {
    
    beforeEach (() => {
        cy.start()
    })

    it("TC_12 - Add Products in Cart", () => {
        cy.insertProductsInCart()
    })

    it("TC_13 - Verify Product Quantity in Cart", () => {
        cy.verifyProductQuantityInCart()
    })

    it("TC_17 - Remove Products From Cart", () => {
        cy.removeProductsFromCart()
    })

    it('TC_20 - Search Products and Verify Cart After Login', () => {
        cy.searchProductsAndVerifyCartAfterLogin(data.permanent_account)
    })
})
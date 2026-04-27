import data from '../fixtures/test-data.json'

describe('Massa de testes do finalização de compras', () => {
    
    beforeEach (() => {
        cy.start()
    })

    it('TC_14 - Place Order: Register while Checkout', () => {
        cy.insertProductsInCart()
        cy.registerOnCheckout()
        cy.registerAccount(data.temporary_account)
        cy.continueCheckoutAfterRegister(data.temporary_account)
        cy.deleteAccount()
    })

    it('TC_15 - Place Order: Register before Checkout', () => {
        cy.registerAccount(data.temporary_account)
        cy.insertProductsInCart()
        cy.continueCheckoutAfterRegister(data.temporary_account)
        cy.deleteAccount()
    })

    it('TC_16 - Place Order: Login before Checkout', () => {
        cy.permanentAccount(data.permanent_account)
        cy.insertProductsInCart()
        cy.continueCheckoutAfterRegister(data.temporary_account)
    })

    it('TC_23 - Verify address details in checkout page', () => {
        cy.registerAccount(data.temporary_account)
        cy.insertProductsInCart()

        cy.get('.check_out').click()

        cy.get('.address_firstname').should('contain', data.temporary_account.first_name)
        cy.get('.address_address1').should('contain', data.temporary_account.address)
        cy.get('.address_city').should('contain', data.temporary_account.city)
        cy.get('.address_country_name').should('contain', data.temporary_account.country)
        cy.get('.address_phone').should('contain', data.temporary_account.mobile_number)

        cy.deleteAccount()
    })

    it('TC_24 - Download Invoice after purchase order', () => {
        cy.insertProductsInCart()
        cy.registerOnCheckout()
        cy.registerAccount(data.temporary_account)
        cy.continueCheckoutAfterRegister(data.temporary_account)
        cy.downloadInvoice()
    })
})
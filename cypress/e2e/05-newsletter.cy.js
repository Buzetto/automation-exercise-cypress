import data from '../fixtures/test-data.json'

describe('Massa de testes inscrição newsletter', () => {
    
    beforeEach (() => {
        cy.start()
    })

    it('TC_10 - Verify Subscription in home page', () => {
        cy.verifySubscriptionInHomePage(data.permanent_account)
    })

    it('TC_11 - Verify Subscription in Cart page', () => {
        cy.verifySubscriptionInCartPage(data.permanent_account)
    })
})
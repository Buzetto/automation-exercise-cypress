import data from '../fixtures/test-data.json'

describe('Massa de testes do finalização de compras', () => {

    beforeEach (() => {
        cy.start()
    })

    it('TC_06 - Contact Us Form', () => {
        cy.contactUsForm(data.permanent_account)
    })
  
    it('TC_07 - Verify Test Cases Page', () => {
        cy.get('li > a[href="/test_cases"]').click()
        cy.contains('h2', 'Test Cases').should('be.visible')
    })

    it('TC_25 - Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom')
        cy.contains('h2', 'Subscription').should('be.visible')
        cy.wait(3000)

        cy.get('a[href="#top"]').click()
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible')
    })

    it('TC_26 - Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom')
        cy.wait(3000)
        cy.contains('h2', 'Subscription').should('be.visible')

        cy.scrollTo('top')
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible')
    })
})    

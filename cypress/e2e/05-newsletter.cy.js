describe('Massa de testes inscrição newsletter', () => {
    let massa;

    beforeEach (() => {
        cy.fixture('test-data').then((dados) => {
            massa = dados;
        });

        cy.visit('https://automationexercise.com/')
        cy.get('.logo').should('be.visible')
    })

    it('TC_10 - Verify Subscription in home page', () => {
        cy.scrollTo('bottom')
        cy.contains('h2', 'Subscription').should('be.visible')

        cy.get('#susbscribe_email').type(massa.permanent_account.email)
        cy.get('#subscribe').click()
        cy.wait(500)
        cy.get('.alert-success').should('be.visible')
    })

    it('TC_11 - Verify Subscription in Cart page', () => {
        cy.get('a[href="/products"]').click()

        cy.scrollTo('bottom')
        cy.contains('h2', 'Subscription').should('be.visible')

        cy.get('#susbscribe_email').type(massa.permanent_account.email)
        cy.get('#subscribe').click()
        cy.wait(500)
        cy.get('.alert-success').should('be.visible')
    })
})
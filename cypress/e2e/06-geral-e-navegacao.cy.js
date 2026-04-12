describre('Massa de testes do finalização de compras', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        cy.get('.logo').should('be.visible')
    })

    it('06 - Contact Us Form', () => {
        cy.get('a[href="/contact_us"]').click()
        cy.contains('h2', 'Get In Touch').should('be.visible')

        cy.get('[data-qa="name"]').type('Victor')
        cy.get('[data-qa="email"]').type('teste@teste.teste.com.br')
        cy.get('[data-qa="subject"]').type('Dúvida sobre Automação')
        cy.get('[data-qa="message"]').type('Estou testando o upload de arquivos via Cypress.')

        cy.get('input[name="upload_file"]').selectFile('cypress/fixtures/anexo.txt')
        cy.get('[data-qa="submit-button"]').click()

        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')

        cy.contains('span', 'Home').click()
        cy.url().should('eq', 'https://automationexercise.com/')
    })
  
    it('07 - Verify Test Cases Page', () => {
        cy.get('a[href="/test_cases"]').click()
        cy.contains('h2', 'Test Cases').should('be.visible')
    })

    it('25 - Verify Scroll Up using Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom')
        cy.contains('h2', 'Subscription').should('be.visible')

        cy.get('#scrollUP').click()
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible')
    })

    it('26 - Verify Scroll Up without Arrow button and Scroll Down functionality', () => {
        cy.scrollTo('bottom')
        cy.contains('h2', 'Subscription').should('be.visible')

        cy.scrollTo('top')
        cy.contains('h2', 'Full-Fledged practice website for Automation Engineers').should('be.visible')
    })
})    

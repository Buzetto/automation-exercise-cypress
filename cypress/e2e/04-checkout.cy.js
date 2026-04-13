describe('Massa de testes do finalização de compras', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/')
        cy.get('.logo').should('be.visible')
    })

    it('TC_14 - Place Order: Register while Checkout', () => {
        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()
        cy.get('#cart_items').should('be.visible')

        cy.get('.check_out').click()
        cy.get('.modal-content').should('be.visible')
        cy.contains('a', 'Register / Login')
        cy.get('.modal-body').find('a[href="/login"]').click()

        cy.get('[data-qa="signup-name"]').type("Victor")
        cy.get('[data-qa="signup-email"]').type("victor.test@email.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('b', 'Enter Account Information')

        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type('Senha123')
        cy.get('[data-qa="days"]').select('26')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type('Victor')
        cy.get('[data-qa="last_name"]').type('Augusto')
        cy.get('[data-qa="company"]').type('Empresa Teste')
        cy.get('[data-qa="address"]').type('Rua Teste do teste, 541')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('São Paulo')
        cy.get('[data-qa="city"]').type('Teste')
        cy.get('[data-qa="zipcode"]').type('13253-700')
        cy.get('[data-qa="mobile_number"]').type('+5511954674567')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('li > a[href="/view_cart"]').click()
        cy.get('.check_out').click()

        cy.contains('h3', 'Your delivery address').should('be.visible')
        cy.contains('h3', 'Your billing address').should('be.visible')

        cy.get('.form-control').type('Facilidade em comprar os produtos nessa loja')
        cy.get('a[href="/payment"]').click()
        cy.contains('h2', 'Payment').should('be.visible')

        cy.get('[data-qa="name-on-card"]').type('Joao da Silva')
        cy.get('[data-qa="card-number"]').type('1111 2222 3333 4444')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('01')
        cy.get('[data-qa="expiry-year"]').type('2060')
        cy.get('[data-qa="pay-button"]').click()
        cy.wait(1000)
        cy.get('[data-qa="order-placed"]').should('be.visible')

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it('TC_15 - Place Order: Register before Checkout', () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'New User Signup!').should('be.visible')

        cy.get('[data-qa="signup-name"]').type("Victor")
        cy.get('[data-qa="signup-email"]').type("victor.test@email.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('b', 'Enter Account Information')

        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type('Senha123')
        cy.get('[data-qa="days"]').select('26')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type('Victor')
        cy.get('[data-qa="last_name"]').type('Augusto')
        cy.get('[data-qa="company"]').type('Empresa Teste')
        cy.get('[data-qa="address"]').type('Rua Teste do teste, 541')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('São Paulo')
        cy.get('[data-qa="city"]').type('Teste')
        cy.get('[data-qa="zipcode"]').type('13253-700')
        cy.get('[data-qa="mobile_number"]').type('+5511954674567')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()
        cy.get('#cart_items').should('be.visible')

        cy.get('.check_out').click()

        cy.contains('h3', 'Your delivery address').should('be.visible')
        cy.contains('h3', 'Your billing address').should('be.visible')

        cy.get('.form-control').type('Facilidade em comprar os produtos nessa loja')
        cy.get('a[href="/payment"]').click()
        cy.contains('h2', 'Payment').should('be.visible')

        cy.get('[data-qa="name-on-card"]').type('Joao da Silva')
        cy.get('[data-qa="card-number"]').type('1111 2222 3333 4444')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('01')
        cy.get('[data-qa="expiry-year"]').type('2060')
        cy.get('[data-qa="pay-button"]').click()
        cy.wait(1000)
        cy.get('[data-qa="order-placed"]').should('be.visible')

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it('TC_16 - Place Order: Login before Checkout', () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste@teste.teste.com.br')
        cy.get('[data-qa="login-password"]').type('Senha123')

        cy.get('[data-qa="login-button"]').click()
        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()
        cy.get('#cart_items').should('be.visible')

        cy.get('.check_out').click()

        cy.contains('h3', 'Your delivery address').should('be.visible')
        cy.contains('h3', 'Your billing address').should('be.visible')

        cy.get('.form-control').type('Facilidade em comprar os produtos nessa loja')
        cy.get('a[href="/payment"]').click()
        cy.contains('h2', 'Payment').should('be.visible')

        cy.get('[data-qa="name-on-card"]').type('Joao da Silva')
        cy.get('[data-qa="card-number"]').type('1111 2222 3333 4444')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('01')
        cy.get('[data-qa="expiry-year"]').type('2060')
        cy.get('[data-qa="pay-button"]').click()
        cy.wait(1000)
        cy.get('[data-qa="order-placed"]').should('be.visible')
    })

    it('TC_23 - Verify address details in checkout page', () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'New User Signup!').should('be.visible')

        cy.get('[data-qa="signup-name"]').type("Victor")
        cy.get('[data-qa="signup-email"]').type("victor.test@email.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('b', 'Enter Account Information')

        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type('Senha123')
        cy.get('[data-qa="days"]').select('26')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type('Victor')
        cy.get('[data-qa="last_name"]').type('Augusto')
        cy.get('[data-qa="company"]').type('Empresa Teste')
        cy.get('[data-qa="address"]').type('Rua Teste do teste, 541')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('São Paulo')
        cy.get('[data-qa="city"]').type('Teste')
        cy.get('[data-qa="zipcode"]').type('13253-700')
        cy.get('[data-qa="mobile_number"]').type('+5511954674567')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()

        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.wait(5000)
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.wait(5000)
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.wait(5000)
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()
        cy.get('#cart_items').should('be.visible')

        cy.get('.check_out').click()

        cy.get('.address_firstname').should('contain', 'Victor Augusto')
        cy.get('.address_address1').should('contain', 'Rua Teste do teste, 541')
        cy.get('.address_city').should('contain', '13253-700')
        cy.get('.address_country_name').should('contain', 'Canada')
        cy.get('.address_phone').should('contain', '+5511954674567')

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it('TC_24 - Download Invoice after purchase order', () => {
        cy.get('.product-overlay .add-to-cart').eq(0).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(1).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.close-modal').click()

        cy.get('.product-overlay .add-to-cart').eq(3).click({force: true})
        cy.get('.modal-content').should('be.visible')
        cy.get('.modal-body').find('a[href="/view_cart"]').click()
        cy.get('#cart_items').should('be.visible')

        cy.get('.check_out').click()
        cy.get('.modal-content').should('be.visible')
        cy.contains('a', 'Register / Login').click()

        cy.get('[data-qa="signup-name"]').type("Victor")
        cy.get('[data-qa="signup-email"]').type("victor.test@email.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('b', 'Enter Account Information')

        cy.get('#id_gender1').check()
        cy.get('[data-qa="password"]').type('Senha123')
        cy.get('[data-qa="days"]').select('26')
        cy.get('[data-qa="months"]').select('May')
        cy.get('[data-qa="years"]').select('1990')

        cy.get('#newsletter').check()
        cy.get('#optin').check()

        cy.get('[data-qa="first_name"]').type('Victor')
        cy.get('[data-qa="last_name"]').type('Augusto')
        cy.get('[data-qa="company"]').type('Empresa Teste')
        cy.get('[data-qa="address"]').type('Rua Teste do teste, 541')
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type('São Paulo')
        cy.get('[data-qa="city"]').type('Teste')
        cy.get('[data-qa="zipcode"]').type('13253-700')
        cy.get('[data-qa="mobile_number"]').type('+5511954674567')

        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('li > a[href="/view_cart"]').click()
        cy.get('.check_out').click()

        cy.contains('h3', 'Your delivery address').should('be.visible')
        cy.contains('h3', 'Your billing address').should('be.visible')

        cy.get('.form-control').type('Facilidade em comprar os produtos nessa loja')
        cy.get('a[href="/payment"]').click()
        cy.contains('h2', 'Payment').should('be.visible')

        cy.get('[data-qa="name-on-card"]').type('Joao da Silva')
        cy.get('[data-qa="card-number"]').type('1111 2222 3333 4444')
        cy.get('[data-qa="cvc"]').type('123')
        cy.get('[data-qa="expiry-month"]').type('01')
        cy.get('[data-qa="expiry-year"]').type('2060')
        cy.get('[data-qa="pay-button"]').click()
        cy.get('[data-qa="order-placed"]').should('be.visible')

        cy.contains('a', 'Download Invoice').click()

        cy.readFile('cypress/downloads/invoice.txt', { timeout: 15000 }).should('exist')
        cy.get('[data-qa="continue-button"]').click()

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })
})
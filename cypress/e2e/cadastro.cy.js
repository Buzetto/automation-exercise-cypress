describe ("Testes de cadastro", () => {

    beforeEach (() => {
        cy.visit('https://automationexercise.com/')
        cy.get('.logo').should('be.visible')
    })


    it("TC_01 - Register User", () => {
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

        cy.get('a[href="/delete_account"]').click()
        cy.get('[data-qa="account-deleted"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
    })

    it("TC_02 - Login User with correct email and password", () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste@teste.teste.com.br')
        cy.get('[data-qa="login-password"]').type('Senha123')

        cy.get('[data-qa="login-button"]').click()
        cy.contains('a', 'Logged in as').should('be.visible')
    })

    it("TC_03 - Login User with incorrect email and password", () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste@ashdusahd.com')
        cy.get('[data-qa="login-password"]').type('asudhsakjfn')

        cy.get('[data-qa="login-button"]').click()
        cy.contains('p', 'Your email or password is incorrect!').should('be.visible')
    })

    it("TC_04 - Logout User", () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'Login to your account').should('be.visible')

        cy.get('[data-qa="login-email"]').type('teste@teste.teste.com.br')
        cy.get('[data-qa="login-password"]').type('Senha123')
        cy.get('[data-qa="login-button"]').click()
        cy.contains('a', 'Logged in as').should('be.visible')

        cy.get('a[href="/logout"]').click()
        cy.get('.logo').should('be.visible')
    })

    it("TC_05 - Register User with existing email", () => {
        cy.get('a[href="/login"]').click()
        cy.contains('h2', 'New User Signup!').should('be.visible')

        cy.get('[data-qa="signup-name"]').type("Victor")
        cy.get('[data-qa="signup-email"]').type("teste@teste.teste.com.br")
        cy.get('[data-qa="signup-button"]').click()
        cy.contains('p', 'Email Address already exist!').should('be.visible')
    })
})
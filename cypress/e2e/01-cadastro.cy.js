import data from '../../cypress/fixtures/test-data.json'

describe ("Login and Register Account", () => {

    beforeEach (() => {
        cy.start()
    })

    it("TC_01 - Register User", () => {
        cy.registerAccount(data.temporary_account)
        cy.deleteAccount()
    })

    it("TC_02 - Login User with correct email and password", () => {
        cy.permanentAccount(data.permanent_account)
    })

    it("TC_03 - Login User with incorrect email and password", () => {
        cy.wrongAccount(data.wrong_login)
    })

    it("TC_04 - Logout User", () => {
        cy.permanentAccount(data.permanent_account)

        cy.get('a[href="/logout"]').click()
        cy.get('.logo').should('be.visible')
    })

    it("TC_05 - Register User with existing email", () => {
        cy.accountExist(data.permanent_account)
    })
})
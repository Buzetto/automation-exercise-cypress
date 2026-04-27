//Register on checkout
Cypress.Commands.add("registerOnCheckout", () => {
  cy.get(".check_out").click();
  cy.get(".modal-content").should("be.visible");
  cy.contains("a", "Register / Login");
  cy.get(".modal-body").find('a[href="/login"]').click();
});

//Continue Checkout after register
Cypress.Commands.add("continueCheckoutAfterRegister", (userDataTemporary) => {
  cy.get('li > a[href="/view_cart"]').click();
  cy.get(".check_out").click();

  cy.contains("h3", "Your delivery address").should("be.visible");
  cy.contains("h3", "Your billing address").should("be.visible");

  cy.get(".form-control").type("Facilidade em comprar os produtos nessa loja");
  cy.get('a[href="/payment"]').click();
  cy.contains("h2", "Payment").should("be.visible");

  cy.get('[data-qa="name-on-card"]').type(userDataTemporary.name_on_card);
  cy.get('[data-qa="card-number"]').type(userDataTemporary.card_number);
  cy.get('[data-qa="cvc"]').type(Cypress.env("cardCVC"));
  cy.get('[data-qa="expiry-month"]').type(userDataTemporary.card_expiry_month);
  cy.get('[data-qa="expiry-year"]').type(userDataTemporary.card_expiry_year);
  cy.get('[data-qa="pay-button"]').click();
  cy.wait(1000);
  cy.get('[data-qa="order-placed"]').should("be.visible");
});

//Download Invoice
Cypress.Commands.add("downloadInvoice", () => {
  cy.contains("a", "Download Invoice").click();

  cy.readFile("cypress/downloads/invoice.txt", { timeout: 15000 }).should("exist");
  cy.get('[data-qa="continue-button"]').click();

  cy.get('a[href="/delete_account"]').click();
  cy.get('[data-qa="account-deleted"]').should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});

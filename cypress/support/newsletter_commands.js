//Verify Subscription in home page
Cypress.Commands.add("verifySubscriptionInHomePage", (userDataExist) => {
  cy.scrollTo("bottom");
  cy.contains("h2", "Subscription").should("be.visible");

  cy.get("#susbscribe_email").type(userDataExist.email);
  cy.get("#subscribe").click();
  cy.wait(500);
  cy.get(".alert-success").should("be.visible");
});

//Verify Subscription in cart page
Cypress.Commands.add("verifySubscriptionInCartPage", (userDataExist1) => {
  cy.get('a[href="/products"]').click();

  cy.scrollTo("bottom");
  cy.contains("h2", "Subscription").should("be.visible");

  cy.get("#susbscribe_email").type(userDataExist1.email);
  cy.get("#subscribe").click();
  cy.wait(500);
  cy.get(".alert-success").should("be.visible");
});

//Contact Us Form
Cypress.Commands.add("contactUsForm", (userDataExist) => {
  cy.get('a[href="/contact_us"]').click();
  cy.contains("h2", "Get In Touch").should("be.visible");

  cy.get('[data-qa="name"]').type(userDataExist.name);
  cy.get('[data-qa="email"]').type(userDataExist.email);
  cy.get('[data-qa="subject"]').type("Dúvida sobre Automação");
  cy.get('[data-qa="message"]').type(
    "Estou testando o upload de arquivos via Cypress.",
  );

  cy.get('input[name="upload_file"]').selectFile("cypress/fixtures/anexo.txt");
  cy.get('[data-qa="submit-button"]').click();

  cy.get(".status").should(
    "have.text",
    "Success! Your details have been submitted successfully.",
  );

  cy.contains("span", "Home").click();
  cy.url().should("eq", "https://automationexercise.com/");
});

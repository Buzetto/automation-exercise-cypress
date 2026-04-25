// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("start", () => {
  cy.viewport("macbook-16");
  cy.visit("https://automationexercise.com/");
  cy.get(".logo").should("be.visible");
});

//Register Account
Cypress.Commands.add("registerAccount", (userData) => {
  cy.get('a[href="/login"]').click();
  cy.contains("h2", "New User Signup!").should("be.visible");

  cy.get('[data-qa="signup-name"]').type(userData.first_name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("b", "Enter Account Information");

  cy.get("#id_gender1").check();
  cy.get('[data-qa="password"]').type(Cypress.env("system_password"));
  cy.get('[data-qa="days"]').select(userData.birthday_day);
  cy.get('[data-qa="months"]').select(userData.birthday_month);
  cy.get('[data-qa="years"]').select(userData.birthday_year);

  cy.get("#newsletter").check();
  cy.get("#optin").check();

  cy.get('[data-qa="first_name"]').type(userData.first_name);
  cy.get('[data-qa="last_name"]').type(userData.last_name);
  cy.get('[data-qa="company"]').type(userData.company);
  cy.get('[data-qa="address"]').type(userData.address);
  cy.get('[data-qa="country"]').select(userData.country);
  cy.get('[data-qa="state"]').type(userData.state);
  cy.get('[data-qa="city"]').type(userData.city);
  cy.get('[data-qa="zipcode"]').type(userData.zipcode);
  cy.get('[data-qa="mobile_number"]').type(userData.mobile_number);

  cy.get('[data-qa="create-account"]').click();
  cy.get('[data-qa="account-created"]').should("be.visible");
  cy.get('[data-qa="continue-button"]').click();

  cy.contains("a", "Logged in as").should("be.visible");
});

//Login with an account created
Cypress.Commands.add("permanentAccount", (userDataCorrect) => {
  cy.get('a[href="/login"]').click();
  cy.contains("h2", "Login to your account").should("be.visible");

  cy.get('[data-qa="login-email"]').type(userDataCorrect.email);
  cy.get('[data-qa="login-password"]').type(Cypress.env("system_password"));

  cy.get('[data-qa="login-button"]').click();
  cy.contains("a", "Logged in as").should("be.visible");
});

//Login with a wrong account
Cypress.Commands.add("wrongAccount", (userDataWrong) => {
  cy.get('a[href="/login"]').click();
  cy.contains("h2", "Login to your account").should("be.visible");

  cy.get('[data-qa="login-email"]').type(userDataWrong.email);
  cy.get('[data-qa="login-password"]').type(Cypress.env("system_password"));

  cy.get('[data-qa="login-button"]').click();
  cy.contains("p", "Your email or password is incorrect!").should("be.visible");
});

//Register with an email that already exist
Cypress.Commands.add("accountExist", (userDataExist) => {
  cy.get('a[href="/login"]').click();
  cy.contains("h2", "New User Signup!").should("be.visible");

  cy.get('[data-qa="signup-name"]').type(userDataExist.name);
  cy.get('[data-qa="signup-email"]').type(userDataExist.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("p", "Email Address already exist!").should("be.visible");
});

//Delete Account
Cypress.Commands.add("deleteAccount", () => {
  cy.get('a[href="/delete_account"]').click();
  cy.get('[data-qa="account-deleted"]').should("be.visible");
  cy.get('[data-qa="continue-button"]').click();
});

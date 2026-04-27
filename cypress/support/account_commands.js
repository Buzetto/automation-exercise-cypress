Cypress.Commands.add("start", () => {
  cy.viewport("macbook-16");
  cy.visit("https://automationexercise.com/");
  cy.get(".logo").should("be.visible");
});

//Register Account
Cypress.Commands.add("registerAccount", (userDataTemporary) => {
  cy.get('a[href="/login"]').click();
  cy.contains("h2", "New User Signup!").should("be.visible");
  cy.get('[data-qa="signup-name"]').type(userDataTemporary.first_name);
  cy.get('[data-qa="signup-email"]').type(userDataTemporary.email);
  cy.get('[data-qa="signup-button"]').click();
  cy.contains("b", "Enter Account Information");

  cy.get("#id_gender1").check();
  cy.get('[data-qa="password"]').type(Cypress.env("system_password"));
  cy.get('[data-qa="days"]').select(userDataTemporary.birthday_day);
  cy.get('[data-qa="months"]').select(userDataTemporary.birthday_month);
  cy.get('[data-qa="years"]').select(userDataTemporary.birthday_year);

  cy.get("#newsletter").check();
  cy.get("#optin").check();

  cy.get('[data-qa="first_name"]').type(userDataTemporary.first_name);
  cy.get('[data-qa="last_name"]').type(userDataTemporary.last_name);
  cy.get('[data-qa="company"]').type(userDataTemporary.company);
  cy.get('[data-qa="address"]').type(userDataTemporary.address);
  cy.get('[data-qa="country"]').select(userDataTemporary.country);
  cy.get('[data-qa="state"]').type(userDataTemporary.state);
  cy.get('[data-qa="city"]').type(userDataTemporary.city);
  cy.get('[data-qa="zipcode"]').type(userDataTemporary.zipcode);
  cy.get('[data-qa="mobile_number"]').type(userDataTemporary.mobile_number);

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

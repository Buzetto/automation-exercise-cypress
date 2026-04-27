//Product Page
Cypress.Commands.add("productPage", () => {
  cy.get('a[href="/products"]').click();
  cy.url().should("include", "/products");
  cy.contains("h2", "All Products").should("be.visible");
});

//Search Product and Verify Product Detail
Cypress.Commands.add("searchAndVerify", () => {
  cy.get('a[href="/product_details/1"]').click();

  cy.url().should("include", "/product_details");

  cy.contains("h2", "Blue Top").should("be.visible");
  cy.contains("p", "Category: Women > Tops").should("be.visible");
  cy.contains("span", "Rs. 500").should("be.visible");
  cy.contains("b", "Availability:").should("be.visible");
  cy.contains("b", "Condition:").should("be.visible");
  cy.contains("b", "Brand:").should("be.visible");
});

//Search Products
Cypress.Commands.add("searchProducts", () => {
  cy.get('a[href="/products"]').click();
  cy.url().should("include", "/products");
  cy.get("#search_product").type("Blue Top");
  cy.get("#submit_search").click();
  cy.contains("h2", "Searched Products").should("be.visible");

  cy.contains("p", "Blue Top").should("be.visible");
});

//View Category Products
Cypress.Commands.add("viewCategoryProducts", () => {
  cy.contains("h2", "Category").should("be.visible");
  cy.get('a[href="#Women"]').click();
  cy.get('a[href="/category_products/1"]').click();
  cy.contains("h2", "Women - Dress Products").should("be.visible");
  cy.get('a[href="#Men"]').click();
  cy.get('a[href="/category_products/3"]').click();
  cy.contains("h2", "Men - Tshirts Products").should("be.visible");
});

//View Cart & Brand Products
Cypress.Commands.add("viewCartBrandProducts", () => {
  cy.get('a[href="/products"]').click();
  cy.contains("h2", "Brands").should("be.visible");
  cy.get('a[href="/brand_products/Polo"]').click();
  cy.contains("h2", "Brand - Polo Products").should("be.visible");
  cy.get('a[href="/brand_products/Babyhug"]').click();
  cy.contains("h2", "Brand - Babyhug Products").should("be.visible");
  cy.get(".productinfo").should("be.visible");
});

//Add a Review on a Product
Cypress.Commands.add("addReviewOnProduct", (userData) => {
  cy.get('a[href="/products"]').click();
  cy.contains("h2", "All Products").should("be.visible");
  cy.get('a[href="/product_details/1"]').click();
  cy.get('a[href="#reviews"]').should("be.visible");
  cy.get("#name").type(userData.first_name);
  cy.get('input[placeholder="Email Address"]').type(userData.email);
  cy.get("#review").type("Produto maravilhoso, com muita qualidade e extremamente confortável no corpo");
  cy.get("#button-review").click();
  cy.contains("span", "Thank you for your review.", { timeout: 10000 }).should("be.visible");
});

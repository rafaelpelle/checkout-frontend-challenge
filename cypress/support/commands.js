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

Cypress.Commands.add('fillCheckoutForm', () => {
  cy.get('[data-cy^=OfferItem]').first().click();
  cy.get('#creditCardNumber').type('5287310747868814');
  cy.get('#creditCardExpirationDate').type('10/30');
  cy.get('#creditCardCVV').type('123');
  cy.get('#creditCardHolder').type('Rafael Pelle');
  cy.get('#creditCardCPF').type('98292385045');
  cy.get('#couponCode').type('98292385045');
});

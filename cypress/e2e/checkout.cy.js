describe('Checkout spec', () => {
  it('should be able to submit form with valid data', () => {
    cy.visit('http://localhost:3000');

    cy.get('button[type=submit]').should('be.disabled');

    cy.get('[data-cy^=OfferItem]').first().click();

    cy.get('#creditCardNumber').type('5287310747868814');
    cy.get('#creditCardExpirationDate').type('10/30');
    cy.get('#creditCardCVV').type('123');
    cy.get('#creditCardHolder').type('Rafael Pelle');
    cy.get('#creditCardCPF').type('98292385045');
    cy.get('#couponCode').type('98292385045');

    cy.get('button[type=submit]').should('not.be.disabled');
    cy.get('button[type=submit]').click();
  });
});

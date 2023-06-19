////////////////////////////////////////////////////////////
// cy.fillCheckoutForm() is a custom command.
// see more at cypress/support/commands.js
////////////////////////////////////////////////////////////

describe('Checkout spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should be able to submit form with valid data', () => {
    cy.get('button[type=submit]').should('be.disabled');
    cy.fillCheckoutForm();
    cy.get('button[type=submit]').should('not.be.disabled');
    cy.get('button[type=submit]').click();

    cy.get('[alt^=Check]').should('be.visible');
    cy.get('[data-cy=Title]').should('have.text', 'Parabéns!');
    cy.get('[data-cy=Subtitle]').should(
      'have.text',
      'Sua assinatura foi realizada com sucesso.',
    );
    cy.get('[data-cy=Link]').should('have.text', 'Gerenciar assinatura');
    cy.get('[data-cy=Button]').should('have.text', 'IR PARA A HOME');
  });

  it('should disable submit with invalid credit card number', () => {
    cy.fillCheckoutForm();
    cy.get('#creditCardNumber').clear();
    cy.get('#creditCardNumber').blur();
    cy.get('[data-cy=creditCardNumberError]').should(
      'have.text',
      'Este valor é inválido',
    );

    cy.get('#creditCardNumber').type('5555444433332222');
    cy.get('#creditCardNumber').blur();
    cy.get('[data-cy=creditCardNumberError]').should(
      'have.text',
      'O número do cartão é inválido',
    );
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('should disable submit with invalid expiration date', () => {
    cy.fillCheckoutForm();
    cy.get('#creditCardExpirationDate').clear();
    cy.get('#creditCardExpirationDate').blur();
    cy.get('[data-cy=creditCardExpirationDateError]').should(
      'have.text',
      'Este valor é inválido',
    );
    cy.get('#creditCardExpirationDate').type('11/20');
    cy.get('#creditCardExpirationDate').blur();
    cy.get('[data-cy=creditCardExpirationDateError]').should(
      'have.text',
      'A data de expiração do cartão é inválida',
    );
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('should disable submit with invalid CVV', () => {
    cy.fillCheckoutForm();
    cy.get('#creditCardCVV').clear();
    cy.get('#creditCardCVV').blur();
    cy.get('[data-cy=creditCardCVVError]').should(
      'have.text',
      'Este valor é inválido',
    );
    cy.get('#creditCardCVV').type('11');
    cy.get('#creditCardCVV').blur();
    cy.get('[data-cy=creditCardCVVError]').should(
      'have.text',
      'O CVV do cartão é inválido',
    );
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('should disable submit with invalid name', () => {
    cy.fillCheckoutForm();
    cy.get('#creditCardHolder').clear();
    cy.get('#creditCardHolder').blur();
    cy.get('[data-cy=creditCardHolderError]').should(
      'have.text',
      'Este valor é inválido',
    );
    cy.get('button[type=submit]').should('be.disabled');
  });

  it('should disable submit with invalid CPF', () => {
    cy.fillCheckoutForm();
    cy.get('#creditCardCPF').clear();
    cy.get('#creditCardCPF').blur();
    cy.get('[data-cy=creditCardCPFError]').should(
      'have.text',
      'Este valor é inválido',
    );
    cy.get('#creditCardCPF').type('98765432101');
    cy.get('#creditCardCPF').blur();
    cy.get('[data-cy=creditCardCPFError]').should(
      'have.text',
      'O CPF é inválido',
    );
    cy.get('button[type=submit]').should('be.disabled');
  });
});

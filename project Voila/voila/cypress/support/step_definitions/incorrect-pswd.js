const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I Open the Login Page', () => { 
    cy.visit('https://voila.id');
});

When('I Submit Login', () => {
    cy.get('[data-test-id="CT-SignIn-Btn"]').click();
});

When('I input username and password', () => {
    cy.get('[data-test-id="CT_component_login_input"]').type('Dvmmy71@gmail.com')
    cy.get('[data-test-id="CT_component_password_input"]').type('a123sss');
    cy.get('[data-test-id="CT_component_login_submit"]').click();
});

Then('I should see error message', () => {
    cy.get('#base').should('be.visible')
      .and('contain.text', 'Your account ID or password is incorrect. Please try again.');
});
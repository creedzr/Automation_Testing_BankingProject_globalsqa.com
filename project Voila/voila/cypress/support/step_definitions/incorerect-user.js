const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the Login Page', () => { 
    cy.visit('https://voila.id');
});

When('I submit Login', () => {
    cy.get('[data-test-id="CT-SignIn-Btn"]').click();
});

When('I input username', () => {
    cy.get('[data-test-id="CT_component_login_input"]').type('Dvmmy@yahoo.com')
    cy.get('[data-test-id="CT_component_login_submit"]').click();
});

Then('I redirect to Register Page', () => {
    cy.get('[data-test-id="CT_component_register_submit"]').should('have.text', 'Register Account');
});
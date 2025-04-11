Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore clevertap not defined error
    if (err.message.includes('clevertap is not defined')) {
      return false;
    }
  });

describe('Daily Regression Test - User Flow Test 3', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com'); 
    });
  
    it('Login, Check Application Status: Pending, Recommendation, Applied. Views Jobs', () => {
        //Login
        cy.get('.sc-59655bad-2').click();
        cy.get('#filled-required-Email').clear().type("user001@gmail.com");
        cy.get('#filled-required-Password').should('exist').should('not.be.disabled').clear().type('Paassword123');
        cy.get('.sc-7f80a69e-8 > .MuiButtonBase-root').click({ force: true });
        cy.wait(3000);

        //Check Application Status
        cy.visit('https://staging-my.hiredly.com/profile#job-application-history');
        cy.contains("Application Status").should('exist');
        cy.contains('Pending').click();
        cy.contains('Recommendation').click();
        cy.contains('Applied').click();

        //View Jobs
        cy.contains('View Jobs').click();
        cy.wait(3000);
        cy.contains("Similar Jobs For You").should('exist');
    });
});
  
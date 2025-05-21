describe('Daily Regression Test - 3.3 Navigate to Employer Landing Page', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
    });

    it('Check For Employers Button on homepage', () => {
        cy.get('#for-employers-button').click();
        cy.wait(5000);
        cy.get('.css-mwp1sm').should('exist');
    });
});

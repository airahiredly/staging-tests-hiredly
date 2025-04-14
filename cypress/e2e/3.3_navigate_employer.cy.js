describe('Daily Regression Test - 3.3 Check For Employers Button', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
    });

    it('Check For Employers Button on homepage', () => {
        cy.get('#for-employers-button').click();
        cy.wait(3000);
        cy.get('.css-1sk4kp7').should('exist');
    });
});

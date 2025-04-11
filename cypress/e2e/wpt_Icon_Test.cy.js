describe('Daily Regression Test - WPT Icon Test', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
    });

    it('Check WPT Icon on homepage', () => {
        cy.get('.css-0').click({ multiple: true });
    });
});

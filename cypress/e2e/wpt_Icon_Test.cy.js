describe('Daily Regression Test - WPT Icon Test', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
    });

    it('Check WPT Icon on homepage', () => {
        cy.get('[style="opacity: 1; transition: opacity 3800ms cubic-bezier(0.4, 0, 0.2, 1);"]').click();
    });
});

describe('Daily Regression Test - 3.1 Region Change Test', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com/jobs');
    });

    it('Check region change on homepage', () => {
        cy.wait(3000);
    });
    
});

describe('Daily Regression Test - 3.1 Region Change Test', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com/jobs');
    });

    it('Check region change on homepage', () => {
        cy.get('.sc-59655bad-5').click();
        cy.wait(3000);
        cy.get('.MuiList-root > [tabindex="-1"]').click(); // trigger region change
        cy.wait(5000);
    
        cy.origin('https://staging-sg.hiredly.com', () => {
            cy.visit('/'); // must call cy.visit() first inside cy.origin()
            cy.get('.sc-59655bad-5').click();
            cy.get('.MuiList-root > [tabindex="0"]').click(); 
        });
    });    
});

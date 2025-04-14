Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false prevents Cypress from failing the test
    return false;
  });  

describe('Daily Regression Test - 2.5 User Flow Test 5 ', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
    });

    it('Check companies page on homepage', () => {
        cy.get('#mobile-companies-button').click();
        cy.get('.css-9d0drk > :nth-child(2) > .MuiButtonBase-root').click();
        cy.get('.css-gstdj5 > :nth-child(2)').click(); 
        cy.url().should('eq', 'https://staging-my.hiredly.com/companies?state_regions=Kuala+Lumpur');
        cy.get('.css-9d0drk > :nth-child(3) > .MuiButtonBase-root').click();
        cy.get('.css-gstdj5 > :nth-child(4)').click();
        cy.url().should('eq', 'https://staging-my.hiredly.com/companies?state_regions=Kuala+Lumpur&company_sizes=3');
        cy.get('.css-1p02y7z > :nth-child(3) > .MuiButtonBase-root').click();
        cy.url().should('eq', 'https://staging-my.hiredly.com/companies?state_regions=Kuala+Lumpur&company_sizes=3&page=2');
    });
});

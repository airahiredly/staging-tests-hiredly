Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore clevertap not defined error
    if (err.message.includes('clevertap is not defined')) {
      return false;
    }
  });

describe('Daily Regression Test - 2.4 User Flow Test 4', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com/');
    });

    it('Login, Navigate to Jobs page. Check Search Filter.', () => {
        //login
        cy.get('.sc-59655bad-2').click();
        cy.get('#filled-required-Email').clear().type("user001@gmail.com");
        cy.get('#filled-required-Password').clear().type('Paassword123');
        cy.get('.sc-7f80a69e-8 > .MuiButtonBase-root').click({ force: true });
        cy.wait(5000);

        //navigate to Jobs Page
        cy.get('#mobile-jobs-button').click();
        cy.get('.css-dwyj58').should('exist');

        //search job
        cy.get('.css-rohuh6').click();
        cy.get('.MuiBadge-root > .MuiButtonBase-root').click();
        cy.get(':nth-child(5) > .css-3g02yh').click();
        cy.get('input[type="checkbox"].PrivateSwitchBase-input').check({ force: true });
        cy.get(':nth-child(2) > .css-1v8dqrk > .css-1e0j3z2 > .css-69avll > .css-1qvvesz > .css-13uuchu > .css-1nsfdkm > .css-1sd0r98').should('exist');
        cy.get(':nth-child(2) > .css-121g4g9').click();
        cy.get('.css-xieyt > .MuiTypography-root').should('exist');
        cy.wait(3000);
        cy.visit('https://staging-my.hiredly.com/');
        cy.wait(3000);

        //logout
        cy.get('.css-5rvsge').click();
        cy.get('#log-out-button').click();
        cy.wait(3000);

        //repeat testing process for non-login user
        cy.get('#mobile-jobs-button').click();
        cy.get('.css-rohuh6 > span').click();
        cy.get('.css-qwka59').should('exist');
        cy.get('.css-rohuh6').click();
        cy.get('.MuiBadge-root > .MuiButtonBase-root').click();
        cy.get(':nth-child(5) > .css-3g02yh').click();
        cy.get('input[type="checkbox"].PrivateSwitchBase-input').check({ force: true });
        cy.get(':nth-child(2) > .css-1v8dqrk > .css-1e0j3z2 > .css-69avll > .css-1qvvesz > .css-13uuchu > .css-1nsfdkm > .css-1sd0r98').should('exist');
        cy.get(':nth-child(2) > .css-121g4g9').click();
        cy.get('.css-xieyt > .MuiTypography-root').should('exist');
    });
});

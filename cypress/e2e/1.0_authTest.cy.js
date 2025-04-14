Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore clevertap not defined error
  if (err.message.includes('clevertap is not defined')) {
    return false;
  }
});

describe('Daily Regression Test - 1.0 Authentication Test', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com'); 
    });
  
    it('Sign up, Password Reset, Invalid Login, Login', () => {
        //Check for Sign Up
        cy.get('.sc-59655bad-3').click();   
        cy.get('#filled-required-Email').type("user001@gmail.com");
        cy.get('#filled-required-Password').should('not.be.disabled').type('Paassword123');    
        cy.get('input[type="checkbox"]').check({ force: true });
        cy.get('.MuiDialogContent-root > .MuiButton-root').click({ force: true });
        cy.contains('Error').should('be.visible'); 
        cy.get('.css-hvl76n > :nth-child(2) > .MuiButtonBase-root').click({ force: true });
        cy.get('.sc-7f80a69e-26 > .MuiButtonBase-root').click();

        //Check Password Reset
        cy.get('.sc-59655bad-2').click();
        cy.get('.sc-7f80a69e-4 > .MuiTypography-root').click({ force: true });
        cy.get('#filled-required-email').type("oklahok1@gmail.com");
        cy.get('.sc-8e3c4ec1-3 > .MuiButtonBase-root').click({ force: true });
        cy.get('body').then(($body) => {
          const text = $body.text();
        
          const performLoginTests = () => {
            // Check for invalid login
            cy.wait(3000);
            cy.get('.sc-59655bad-2').should('exist').should('not.be.disabled').click({ force: true });
            cy.get('#filled-required-Email').should('exist').should('not.be.disabled').type("user002@gmail.com");
            cy.get('#filled-required-Password').should('exist').should('not.be.disabled').type('P@assword123');
            cy.get('.sc-7f80a69e-8 > .MuiButtonBase-root').click({ force: true });
            cy.contains("Error").should('exist');
        
            // Check for valid login
            cy.get('#filled-required-Email').clear().type("user001@gmail.com");
            cy.get('#filled-required-Password').clear().type('Paassword123');
            cy.get('.sc-7f80a69e-8 > .MuiButtonBase-root').click({ force: true });
          };
        
          const openLoginModal = () => {
            cy.get('.sc-59655bad-2').click({ force: true });
            cy.get('.sc-7f80a69e-26 > .MuiButtonBase-root').click();
            cy.get('.sc-59655bad-2').click({ force: true });
          };

          //logout
          const logout = () => {
            cy.get('.css-5rvsge').click();
            cy.get('#log-out-button').click();
          }
        
          if (text.includes('Success')) {
            cy.log('Success');
            openLoginModal();
            performLoginTests();
            logout();
          } else {
            cy.get('.sc-7f80a69e-26 > .MuiButtonBase-root').click();
            cy.get('.sc-59655bad-2').click({ force: true });
            performLoginTests();
            logout();
          }
        });       
    });
});
  
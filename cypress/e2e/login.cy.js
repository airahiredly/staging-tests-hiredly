describe('User Login Test', () => {
  beforeEach(() => {
      cy.visit('https://staging-my.hiredly.com'); 
  });

  it('should log in successfully with valid credentials', () => {
      cy.contains('Log In').click();
      cy.get('#filled-required-Email').type('testj18@gmail.com'); //fill in email for test here
      cy.get('#filled-required-Password').type('password', { log: false }); //fill in password for test here 

      cy.get('.MuiButton-containedPrimary').contains('Log In').click();
      });
      
  });


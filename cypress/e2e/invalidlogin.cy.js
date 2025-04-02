describe('User Invalid Login Test', () => {
  beforeEach(() => {
      cy.visit('https://staging-my.hiredly.com'); 
    });

  it('should prevent log in with invalid credentials', () => {
      cy.contains('Log In').click();
      cy.get('#filled-required-Email').type('testj@gmail.com'); 
      cy.get('#filled-required-Password').type('password1', { log: false }); 

      cy.get('.MuiButton-containedPrimary').contains('Log In').click();

      // verify login fail by checking for error message
      cy.contains('Invalid email or password.').should('be.visible');
  });
});


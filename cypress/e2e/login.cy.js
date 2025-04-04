describe('User Login Test', () => {
  it('should log in successfully with valid credentials', () => {
    cy.login('testj18@gmail.com', 'password');
  });
});

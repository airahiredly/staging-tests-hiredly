describe('Testing resume upload from homepage.', () => {
  beforeEach(() => {
      cy.visit('https://staging-my.hiredly.com'); 
  });

  it('Resume upload from homepage', () => {
    cy.get('.css-134xd8p > .MuiGrid-root > .MuiButtonBase-root').click();  //click upload resume button
    cy.get('input[type=file]').selectFile('./staginng-tests-hiredly/cypress/fixtures/resume.pdf', { force: true });//select resume file
      cy.on("window.alert", (message) => {
        expect(message).to.equal("Your resume is uploaded"); //done upload
      })
      });
      
  });

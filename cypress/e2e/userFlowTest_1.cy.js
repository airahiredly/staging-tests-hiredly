describe('Daily Regression Test - User Flow Test 1', () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com'); 
    });
  
    it('Job Search, Quick Apply, Login, Resume Upload', () => {
        //check job search
        cy.get('.MuiInputBase-input').type("test");
        cy.get('[data-testid="SearchIcon"]').click();
        cy.contains("TEST COMPANY 1234").should('exist');

        //check quick apply 
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
              win.location.href = url;  // Open the URL in the same tab
            });
          });
          cy.contains("TEST").click();
          cy.contains("Quick Apply").click();
          cy.get('.css-1uz15p4').click();

          //Login
          cy.get(':nth-child(1) > .MuiInputBase-root').type("user001@gmail.com");
          cy.get(':nth-child(2) > .MuiInputBase-root').type("Paassword123");
          cy.get('.css-1ah1vqg').click({ force: true });
          cy.contains("Job already applied").should('exist');
          cy.get('.css-z4by9g').click();
           
        //check resume upload
        cy.get('.css-134xd8p > .MuiGrid-root > .MuiButtonBase-root').click();  
        cy.get('input[type=file]').selectFile("cypress/fixtures/resume.pdf", { force: true });
        cy.get('.jss19').click();
        cy.on("window.alert", (message) => {
        cy.contains("Resume under review").should('exist');
      })
    });
});
  

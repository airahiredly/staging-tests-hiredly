describe('Daily Regression Test - 2.2 User Flow Test 2', () => {
  beforeEach(() => {
      cy.visit('https://staging-my.hiredly.com'); 
  });

  it('Job Search, Quick Apply, Sign up, Resume Upload', () => {
      //check job search
      cy.get('.MuiInputBase-input').type("test");
      cy.get('[data-testid="SearchIcon"]').click();
      cy.wait(3000);
      cy.contains("test").should('exist');

      //check quick apply 
      cy.window().then((win) => {
          cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url;  // Open the URL in the same tab
          });
        });
        cy.wait(3000);
      cy.visit("https://staging-my.hiredly.com/jobs/jobs-malaysia-gmail3-job-test?origin=job_list");
      cy.wait(3000);
      cy.contains("Quick Apply").click();
      cy.wait(3000);
        
      //Sign up
      cy.get(':nth-child(1) > .MuiInputBase-root').type("user001@gmail.com");
      cy.get(':nth-child(2) > .MuiInputBase-root').type("P@assword123");
      cy.get('input[type="checkbox"]').check({ force: true });
      cy.get('.css-1ah1vqg').click({ force: true });
      cy.contains("Email already exists").should('exist');
      cy.get('.css-z4by9g').click();
         
      //check resume upload
      cy.get('.css-134xd8p > .MuiGrid-root > .MuiButtonBase-root').click();  
      cy.get('input[type=file]').selectFile("cypress/fixtures/resume.pdf", { force: true });
      cy.get('.jss19').click();
      cy.on("window.alert", (message) => {
      cy.contains("Your resume is uploaded").should('exist');
      })
  });
});

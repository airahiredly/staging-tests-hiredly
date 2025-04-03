
//LOGIN - DONE
Cypress.Commands.add("login", (email, password) => {
    cy.visit("https://staging-my.hiredly.com");
    cy.contains("Log In").click();
    cy.get("#filled-required-Email").type(email); //example: .type('jylliantest1@hiredly.com');
    cy.get("#filled-required-Password").type(password, { log: false }); 
    cy.get(".MuiButton-containedPrimary").contains("Log In").click();
    cy.get('[alt="user-profile-image"]').should('be.visible'); 
  });

//SIGNUP - DONE
Cypress.Commands.add("signup", () => {
      const timestamp = Date.now();
      const email = `testuser${timestamp}@gmail.com`;

      cy.visit("https://staging-my.hiredly.com");
      cy.contains('Sign Up').click();
      cy.get('#filled-required-Email').type(email); 
      cy.get('#filled-required-Password').type('password', { log: false }); 
      cy.get('input[type="checkbox"]').check();
      cy.get('.MuiDialogContent-root > .MuiButton-root').click();
      cy.wait(1000);
});


//SEARCH - DONE
Cypress.Commands.add("search", (inputText) => {
  cy.get('input[placeholder="Search by job titles, companies or skills"]', { timeout: 10000, scrollBehavior: false})
    .scrollIntoView()
    .should('be.visible')
    .click()
    .type(`${inputText}{enter}`);
  cy.wait(3000);
  cy.url().as('searchResultsUrl');
});

//JOB APPLICATION - DONE 
Cypress.Commands.add("applyJob", function() {
    const urlToVisit = this.filterResultsUrl || this.searchResultsUrl; //determine which to visit
    
    if (urlToVisit){
      cy.visit(urlToVisit);
    }
    else {
      cy.log('No search or filter, fetching first job card')
    }
   
  
    cy.get('.css-oiffn2').first().then(($jobCard) => {
      const jobUrl = $jobCard.prop('href') ||
                     $jobCard.attr('onclick')?.match(/window\.open\('(.*?)'/)?.[1];
  
      if (jobUrl) { 
        cy.log('Extracted Job URL:', jobUrl);
        cy.visit(jobUrl);
      } else {
        cy.log('No valid job URL found, clicking instead');
        cy.wrap($jobCard).click(); 
      }
    });
  
    cy.wait(1000);
    cy.get('button[aria-label="apply-job-button"]').click();
  });

//VIEW ALL JOBS FROM BULK APPLY
Cypress.Commands.add("viewAllJobs", function() {
    cy.contains("View All Jobs").click();
});

//VIEW SIMILAR JOBS
Cypress.Commands.add("viewSimilarJobs", function() {
  cy.contains("View Similar Jobs").click();
});

//UPLOAD RESUME FROM HP - DONE
import 'cypress-file-upload';
Cypress.Commands.add("uploadResumeHP", (name, email, password)=> {
  cy.get('.css-k88g6 > .MuiButtonBase-root').click();
  const myFile = 'resume.pdf'; //this is a test resume included in the file for testing purposes 
  cy.get('input[type="file"]').attachFile({
    filePath: myFile,
    encoding: 'base64' //ensure pdf doesn't get corrupted 
});
  cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').type(name)
  cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type(email)
  cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root').type(password)
  cy.get('input[type="checkbox"]').eq(1).click();
  cy.get('.jss53 > .MuiButtonBase-root').click();
});

//UPLOAD RESUME FROM PROFILE - DONE
import 'cypress-file-upload';
Cypress.Commands.add("uploadResumeProfile", function() {
    cy.get('[alt = "user-profile-image"]', {timeout:10000}).should('be.visible').click();
    cy.get('#user-view-profile-button').click(); // open profile section
    cy.get('.css-18bz13y').click(); 

    const myFile = 'resume.pdf'; //this is a test resume included in the file for testing purposes 

    cy.get('.MuiList-root > :nth-child(3)').click(); // Click "Reupload Resume"
    
    cy.get('input[type="file"]').attachFile({
        filePath: myFile,
        encoding: 'base64' //to ensure pdf doesn't get corrupted
    }); 
    return cy.contains('Replace Resume', { timeout: 5000 }) // wait for confirmation button 
        .should('be.visible')
        .click(); 
});

//UPLOAD RESUME FROM SIGNUP - DONE
import 'cypress-file-upload';
Cypress.Commands.add("uploadResumeSignup", function() {
  const myFile = 'resume.pdf'; 
  cy.contains('Upload Resume').click();
  cy.get('input[type="file"]').attachFile({
    filePath: myFile,
    encoding: 'base64' //to ensure pdf doesn't get corrupted
});
  });
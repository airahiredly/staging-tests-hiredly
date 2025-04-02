describe('Job Application Test', () => {

  it('should log in successfully with valid credentials', () => {
    cy.login('testj18@gmail.com', 'password')
  cy.get('input[placeholder="Search by job titles, companies or skills"]', { timeout: 10000 })
    .should('be.visible')
    .click()
    .type('marketing{enter}');
    
  cy.wait(3000);
  cy.url().as('searchResultsUrl'); //save state of search results 
  cy.get('@searchResultsUrl').then((theUrl) => {
    cy.visit(theUrl);              // now we have the actual string URL
  });
  cy.contains('button', 'Filter').click();
  cy.contains('button', 'State').click();
  cy.contains('button', 'Kuala Lumpur').click();
  cy.contains('button', 'Apply').click({ force: true });

  cy.wait(3000);
  cy.url().as('filterResultsUrl');
  cy.get('@filterResultsUrl').then((theUrl) => {
    cy.visit(theUrl); 
  });

  cy.get('.css-oiffn2').first().then(($jobCard) => {
      const jobUrl = $jobCard.prop('href') || $jobCard.attr('onclick')?.match(/window\.open\('(.*?)'/)?.[1];

      if (jobUrl) {
          cy.log('Extracted Job URL:', jobUrl);
          cy.visit(jobUrl); 
      } else {
          cy.log('No valid job URL found, clicking instead');
          cy.wrap($jobCard).click(); 
      }
  });

  cy.get('button[aria-label="apply-job-button"]')
  .should('be.visible')
  .click();
  });


  // it('search for "marketing" jobs and verifies results', () => {
  //   cy.get('button.css-1bhvgib', { timeout: 5000 })
  //     .should('be.visible')
  //     .click();
  //   cy.get('input[placeholder="Search by job titles, companies or skills"]', { timeout: 10000 })
  //     .should('be.visible')
  //     .click()
  //     .type('marketing{enter}');
      
  //   cy.wait(3000);
  //   cy.url().as('searchResultsUrl'); //save state of search results 
  // });
  
  // it('filter for jobs in KL', function () {
  //   cy.visit(this.searchResultsUrl);
  //   cy.contains('button', 'Filter').click();
  //   cy.contains('button', 'State').click();
  //   cy.contains('button', 'Kuala Lumpur').click();
  //   cy.contains('button', 'Apply').click({ force: true });

  //   cy.wait(3000);
  //   cy.url().as('filterResultsUrl');
  // });

//   it('apply for job - first job listed', function () {
//     cy.visit(this.filterResultsUrl);

//     cy.get('.css-oiffn2').first().then(($jobCard) => {
//         const jobUrl = $jobCard.prop('href') || $jobCard.attr('onclick')?.match(/window\.open\('(.*?)'/)?.[1];

//         if (jobUrl) {
//             cy.log('Extracted Job URL:', jobUrl);
//             cy.visit(jobUrl); 
//         } else {
//             cy.log('No valid job URL found, clicking instead');
//             cy.wrap($jobCard).click(); 
//         }
//     });

//     cy.get('button[aria-label="apply-job-button"]')
//     .should('be.visible')
//     .click();
// });

});



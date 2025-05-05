// cypress/e2e/4.0_responseTime.cy.js

describe('Website Response Time Measurement', () => {
    // --- Configuration ---
    // Add the URLs you want to test here
    const urlsToTest = [
      'https://www.google.com', // Replace with your actual URLs
      'https://www.cypress.io',
      // Add more URLs as needed
      // 'https://your-staging-site.com',
      // 'https://your-production-site.com/specific-page'
    ];
  
    // Where to save the results
    const outputFilePath = 'cypress/reports/response-times.json';
    // --- End Configuration ---
  
    const responseTimes = []; // Array to store results: { url: string, responseTimeMs: number }
  
    // Dynamically create a test for each URL
    urlsToTest.forEach((url) => {
      it(`should measure response time for ${url}`, () => {
        const startTime = performance.now(); // Record start time
  
        // Visit the URL. Allow a longer timeout if pages load slowly.
        // Fail the test if the visit command itself fails (e.g., 404, 500)
        cy.visit(url, { timeout: 30000 }) // 30 second timeout for visit
          .then(() => {
            const endTime = performance.now(); // Record end time after page load event fires
            const duration = endTime - startTime;
  
            // Log to Cypress Command Log for real-time feedback
            cy.log(`Response time for ${url}: **${duration.toFixed(2)} ms**`);
  
            // Store the result
            responseTimes.push({
              url: url,
              responseTimeMs: parseFloat(duration.toFixed(2)) // Store as number
            });
          });
  
          // Optional: Add a basic assertion to ensure the page didn't just error out immediately
          // You might want more specific assertions depending on the page
          cy.location('href').should('include', url.split('/').slice(2, 3)[0]); // Check hostname part
      });
    });
  
    // After all tests in this suite have run...
    after(() => {
      // Check if responseTimes array has data before writing
      if (responseTimes.length > 0) {
        // Write the collected data to the specified JSON file
        // The 'writeFile' command automatically creates directories if they don't exist.
        cy.writeFile(outputFilePath, responseTimes, 'utf8')
          .then(() => {
              cy.log(`Response time results saved to ${outputFilePath}`);
              // Also log to the terminal console (visible in CI logs)
              console.log(`Response time results saved to ${outputFilePath}`);
              console.table(responseTimes);
          });
  
        // Log a summary table to the Cypress Command Log
        cy.log('--- Response Time Summary ---');
        responseTimes.forEach(result => {
           cy.log(`${result.url}: ${result.responseTimeMs} ms`);
        });
        cy.log('-----------------------------');
  
      } else {
        cy.log('No response times were recorded. Skipping file write.');
        console.warn('No response times were recorded. Skipping file write.');
      }
    });
  });
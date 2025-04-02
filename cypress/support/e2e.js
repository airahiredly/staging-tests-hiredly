import 'cypress-file-upload';
import './commands';

//to ignore clevertap error 
Cypress.on("uncaught:exception", (err, runnable) => {
    if (err.message.includes("clevertap is not defined")) {
      return false; // Ignore the error so tests don't fail
    }
  });

//block requests
Cypress.Commands.add("blockTrackingRequests", () => {
    cy.intercept("POST", "https://f.clarity.ms/collect", {
      statusCode: 204, // Block Clarity tracking requests
      body: {},
    }).as("blockClarity");
  });
  
  // Apply to all tests
  beforeEach(() => {
    Cypress.on('window:before:load', (win) => {
        if (!win.__openStubbed) {
          cy.stub(win, 'open').callsFake((url) => {
            win.location.href = url;
          });
          win.__openStubbed = true;
        }
      });
    // cy.blockTrackingRequests();
  });
  

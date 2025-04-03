describe ("Job Application Flow 2: Search, Apply, Signup", () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
      });
    
      it("search job and apply as visitor", () => {
        const timestamp = Date.now();
        const email = `testuser${timestamp}@gmail.com`;
      
        cy.search('testing');
        cy.applyJob();
        cy.wait(1000);
      
        cy.get('#filled-required-Email\\*').should('be.visible').first().type(email);
        cy.get('input#filled-required-Password\\*').should('be.visible').type('password');
        cy.get('.PrivateSwitchBase-input').click();
        cy.get('.css-1ah1vqg').click();
        cy.wait(1000);
        
        cy.get('input.MuiInputBase-input').first().type('TestName');
        cy.get('.PhoneInputInput').type('111111111');
        cy.get('#nationality-select').click();
        cy.get('#nationality-select-option-0').click();
        cy.uploadResumeSignup();
        cy.contains('Continue to Apply').click({force:true});
        cy.wait(1000);
      });      
});
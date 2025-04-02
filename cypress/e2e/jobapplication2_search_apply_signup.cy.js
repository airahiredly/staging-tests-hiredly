describe ("Job Application Flow 2: Search, Apply, Signup", () => {
    beforeEach(() => {
        cy.visit('https://staging-my.hiredly.com');
      });
    
      it("search job and apply as visitor", () => {
        cy.search('testing');
        cy.applyJob();
      });
})
describe('Job Application Flow 1: Login, Search, Apply', () => {
    beforeEach(() => {
        cy.login("testj@gmail.com", "password");
      });
    
      it("Login, Search and Apply for a Testing Job", () => {
        cy.get('[alt="user-profile-image"]', {timeout: 10000}).should("be.visible");
        cy.search('testing');
        cy.applyJob();
      });
})
describe('Job Application Flow 1: Login, Search, Apply', () => {
    beforeEach(() => {
        cy.login("testj@gmail.com", "password");
      });
    
      it("login and search testing job", () => {
        cy.get('[alt="user-profile-image"]', {timeout: 10000}).should("be.visible");
        cy.search('testing');
        cy.applyJob();
      });
})
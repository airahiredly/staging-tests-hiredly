describe("test run using commands", () => {
    beforeEach(() => {
        cy.login("testj@gmail.com", "password");
      });
    
      it("login and search testing job", () => {
        cy.get('[alt="user-profile-image"]', {timeout: 10000}).should("be.visible");
        cy.search('content creator');
      });
});



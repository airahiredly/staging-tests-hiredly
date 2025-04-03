describe('Upload Resume at Homepage', () => {
  beforeEach(() => {
      cy.visit('https://staging-my.hiredly.com'); 
  });

  it('should upload resume at homepage', () => {
      cy.uploadResumeHP("jylltest", "uploadresume1@gmail.com", "password");
      });
      
  });

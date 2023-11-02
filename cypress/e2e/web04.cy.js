
    describe('FEEDSTOCK CONTRACT Application', () => {
        beforeEach(() => {
          cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
          cy.visit("http://web04/TEST-TPSContractManagement/Pages/Deals")
          cy.viewport(1800, 1400)
        })
      
it('FEEDSTOCK  ', (done) =>{
        cy.get('img').should("be.visible")
        cy.url().should ('include','/Pages/Deals')
        .then(() => {
            done()    
}) 
    })
  })
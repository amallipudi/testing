describe('FEEDSTOCK CONTRACT Application', () => {
    beforeEach(() => {
      cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
      cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
      cy.viewport(1800, 1400)
    })
  
it('FEEDSTOCK  ', (done) =>{
    cy.get('img').should("be.visible")
    cy.get(':nth-child(1) > :nth-child(16) > #lnkbtnEditDetails > .far').click()
    cy.get('#txtBxDealNotes').clear().type('Default pool: Use it to register self-hosted agents that you')
    cy.get('#lnkUpdateDeal').click()
    cy.get('.breadcrumb > :nth-child(1) > a').click()
    cy.url().should ('include','/Pages/Deals')
    .then(() => {
        done()    
}) 
})
})

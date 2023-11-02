
    describe('PULSES CONTRACT Application', () => {
        beforeEach(() => {
          cy.ntlm(["web04"], Cypress.env("username") , Cypress.env("password"));
          cy.visit("http://web04/TEST-TPSContractManagement/Pages/Deals")
        })
      it('PULSES CONTRACT Application', () => {
        
        cy.get('#lnkbtnAdd').click(); // ADD NEW DEAL
        cy.get('.p-l-5 > .btn-group > .btn > .filter-option').click(); // Great Plains Company
        cy.get('.p-l-5 > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click();
    
        cy.get('#cphContent_rblDealType > tbody > tr > :nth-child(1) > label').click(); // deal type
it('Check weather Enable Single or multiple Document Upload feature in BIO Europe Logistics App. ', (done) =>{
        cy.get('img').should("be.visible")
        cy.get('#lnkbtnAdd').click()
        //cy.get('.confirm').click()
        
})
it('empty ', (done) =>{
     
    
})
})
    })

describe('BioEuropeLogistics', () => { 
    beforeEach(() => {
    cy.ntlm(["web04"], Cypress.env('username') , Cypress.env('password'));
       cy.visit("http://web04/TEST-TFSContractManagement/Pages/Deals")
       cy.viewport(1800, 1400)
       Cypress.on('uncaught:exception', (err, runnable) => {
           return false
       })
    })
it('Check weather Enable Single or multiple Document Upload feature in BIO Europe Logistics App. ', (done) =>{
        cy.get('img').should("be.visible")
        cy.get('#lnkbtnAdd').click()
        //cy.get('.confirm').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
})
})
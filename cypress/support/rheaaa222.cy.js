 
describe('RHEA Application', () => { 
    beforeEach(() => {
      cy.loginToAAD(Cypress.env('aad_username'), Cypress.env('aad_password'))
        
      cy.visit('https://targray-corp-uat.crm3.dynamics.com/main.aspx?appid=5a338062-8977-ed11-81ac-0022486df36c&pagetype=entitylist&etn=tar_strip&viewid=65e28876-255c-ed11-9562-000d3af4fee0&viewType=1039')
      cy.viewport(1800, 1400)
          Cypress.on('uncaught:exception', (err, runnable) => {
              // returning false here prevents Cypress from
              // failing the test
              return false
          })
          
        })
      it('verifies the title', () => { 
        cy.get('#okButtonText_1').click()
         
          cy.get('[aria-rowindex="4"] > [aria-colindex="2"] > .ms-Shimmer-container > .ms-Shimmer-dataWrapper > .containerEditableStyles-273 > .ms-Stack > .truncatableText-290 > .ms-Label > .ms-TooltipHost').dblclick()
        
      })
    
  
      it('verifies the name', () => { 
        
        cy.get('#okButtonText_1').click()
         
        cy.get('#id__7').click()
      })
      
      it('verifies the user ', () => { 
        
          cy.get('#quickFind_text_0').type('TCTS-1003{enter}')
    
  })
})
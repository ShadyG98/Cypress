describe('Comandas',{testIsolation:false}, () => {
    
    
    beforeEach('Visitar la pagina', () => {
        
            cy.visit('https://automationintesting.online/')
         }
    ) 
  
    it('Comandas', () => {
        
       cy.completeForm('invalid',400)
    
       cy.checkErrorMessages() 
       cy.completeForm('valid',201)
    }   
    )   

})
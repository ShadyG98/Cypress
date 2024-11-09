describe('First test', () =>{
    //por cada IT se va refrescando el sitio, entonces mejor utilizamos BeforeEach
    beforeEach('should visit', () => {
        cy.visit('https://www.google.com.ar/');
    });
    it('Should contain image of avatar', () => {
        //cy.get('img').contains('alt="Google"');
        cy.get('img').should('be.visible');
        cy.get('textarea').eq('0').type('First Test');
    });
})
describe('Prueba Api', () => {
    it('Crear Usuario OK', () => {
        cy.intercept('POST', '/api/users').as('userCreado') //Dar un alias al conjunto de la api
        cy.visit('https://conduit.bondaracademy.com/');
        cy.contains(/sign up/i).click(); //Este es un expresión regular que se utiliza para buscar el texto dentro del DOM. La parte /sign up/ es la cadena que se busca, y la bandera i indica que la búsqueda debe ser insensible a mayúsculas y minúsculas.
        cy.get('[Placeholder=Username]').type('testa');
        cy.get('[Placeholder=Email]').type('test@test.com');
        cy.get('[Placeholder=Password]').type('test');
        cy.get('.btn').click();
        cy.wait('@userWrong').then((interception) => {
            expect(interception.response.statusCode).to.equal(422) //201 es usuario nuevo //422, error de usuario creado
        })
    });
});
describe('Usuario erroneo', () => {
    it('Crear Usuario OK', () => {
        cy.intercept('POST', '/api/users').as('userErroneo')
        cy.contains(/sign up/i).click(); 
        cy.get('[Placeholder=Username]').type('Sinarroba');
        cy.get('[Placeholder=Email]').type('Sinarroba');
        cy.get('[Placeholder=Password]').type('Brenda');
        cy.get('.btn').click();
        cy.wait('@userCreado').then((interception) => {
            expect(interception.response.statusCode).to.equal(403)
        })
     });
});
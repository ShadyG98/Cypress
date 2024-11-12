describe('prueba', () => {
    it('capturar tags', () => {
        cy.intercept('GET','/api/tags',{fixture:'tags.json'}) //Fixture es el comando que utiliza cypress para identificar un archivo dentro de la carpeta fixtures
        cy.visit('https://conduit.bondaracademy.com/');
        cy.contains('Polo')
    });
});
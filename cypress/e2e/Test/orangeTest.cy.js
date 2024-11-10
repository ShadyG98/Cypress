import './commandsTest.cy'

// describe('First test Google', () => {
//     //por cada IT se va refrescando el sitio, entonces mejor utilizamos BeforeEach
//     beforeEach('should visit', () => {
//         cy.visit('https://www.google.com.ar/');
//     });
//     it('Should contain image of avatar', () => {
//         //cy.get('img').contains('alt="Google"');
//         cy.get('img').should('be.visible');
//         cy.get('textarea').eq('0').type('First Test');
//     });
//atajo comentario control + k + c
// })

//testisolation, viene de aislar, está aislando cada IT, para que no suceda lo dejamos en false y va uno tras otro
before('Should to Say Puchuflito, before all actions',() => {
    cy.log('Puchuflito');
});
describe('Orange Test', { testIsolation: false }, () => {
    //el beforeEach, por cada IT va a volver a login nuevamente, pero queremos conservar el login
    //es mas util para paginas estaticas, que no hay drama en recargar, pero en éste caso no, pierde el login
    beforeEach(() => {
        cy.clearCookies(); //las cookies en éste sitio tiran la bronca
    });
    //por cada it cypress blanquea la memoria, bye caché
    it('Test Login', () => {
        const admin = 'Admin';
        const password = 'admin123';
        //cy.get('.oxd-sheet > :nth-child(2)').contains('Password : admin123'); //automatizado por cypress,feo
        cy.loginPuchuflito(admin, password);
        cy.wait(2000);
    });
    it('Test with wrong password', () => {
        cy.get('h6').contains('Dashboard');
        cy.get('.oxd-userdropdown-tab').click();
        cy.get('.oxd-userdropdown-link').contains('Logout').click();
        cy.wait(1000);
    });
});
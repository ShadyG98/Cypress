Cypress.Commands.add('loginPuchuflito', (user, password) => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(user);
    cy.get('input[name="password"]').type(password);
    cy.get('.oxd-button').click();
})

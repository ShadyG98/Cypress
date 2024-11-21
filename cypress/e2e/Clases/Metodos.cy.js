describe('Algunos métodos',{testIsolation:false},()=>{

    it('Visitar la página y verificar el título de la página',()=>{

        cy.visit('https://demoqa.com/')
        cy.title().should('eq','DEMOQA')
        
    })

    it('Ir al form',()=>{
        cy.get('h5').contains('Elements').click()
        cy.get('span').contains('Forms').click()
        cy.get('span').contains('Practice Form').click()

        // Validamos la imagen estpa visible
        cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
    })

    it('Validar y completar form',()=>{

        // Validar envío de form con campos vacíos
        cy.get('#submit').click()
        cy.get('#firstName:invalid').should('exist')
        cy.get('#lastName:invalid').should('exist')

        // Completar campos requeridos
        cy.get('#firstName').type('Juan')
        cy.get('#lastName').type('Perez')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('1234567890')
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__day--013').click()

        // Marcamos un check
        cy.get('#hobbies-checkbox-1').check({force: true})

        // Marcamos y desmarcamos un check
        cy.get('#hobbies-checkbox-2').check({force: true})
        cy.get('#hobbies-checkbox-2').uncheck({force: true})

        // Subir un archivo -> Recuerden que el archivo debe estar alojado en la carpeta fixtures
        cy.get('#uploadPicture').selectFile('cypress/fixtures/test.png')

        // Validamos que el input Select city está como disable
        cy.get('#city').should('not.be.enabled')

        // Seleccionamos un estado
        cy.get('div').contains('Select State').click()
        cy.get('#react-select-3-option-1').click()

        // Enviamos el form y esperamos 2 segundos
        cy.get('#submit').click()
        cy.wait(2000)

        // Validamos que el mensaje de envío de form se muestra correctamente
        cy.get('#example-modal-sizes-title-lg').contains('Thanks for submitting the form').should('be.visible')



    })

})
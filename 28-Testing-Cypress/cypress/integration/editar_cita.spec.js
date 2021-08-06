/// <reference types="cypress" />

describe('Nueva cita y la edita', () => {
    it('Nueva cita', () => {

        cy.visit('index.html');

        //Escribir en los campos

        cy.get('[data-cy="mascota-input"]')
            .type('Perro')

        cy.get('[data-cy="propietario-input"]')
            .type('Adrian') 

        cy.get('[data-cy="telefono-input"]')
            .type('989898998')

        cy.get('[data-cy="fecha-input"]')
            .type('2021-05-08')
         
        cy.get('[data-cy="hora-input"]')
            .type('20:05')
        
        cy.get('[data-cy="sintomas-textarea"]')
            .type('Solo duerme')

        //Presionar boton

        cy.get('[data-cy="submit-cita"]')
            .click()

        //Valida si existe un texto 
        cy.get('[data-cy=citas-heading]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
        
        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Se agregó correctamente');

        cy.get('[data-cy=alerta]')
            .should('have.class', 'alert-success');
        
    });

    it('Edita la cita', () => {

         //Presionar boton
        cy.get('[data-cy="btn-editar"]')
            .click()

        //Escribir en los campos

        cy.get('[data-cy="mascota-input"]')
            .clear()
            .type('Gato')
        
        cy.get('[data-cy="submit-cita"]')
            .click()

        cy.get('[data-cy=alerta]')
            .invoke('text')
            .should('equal', 'Guardado Correctamente');
    });

});
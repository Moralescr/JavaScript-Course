/// <reference types="cypress" />

describe('Validar formulario', () => {
    it('Validar formulario', () => {

        cy.visit('index.html');

        cy.get('[data-cy="formulario"]')
            .submit();

        //Alerta verifica texto
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios');

        //Verifica una clase
        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger');
        
    });

});
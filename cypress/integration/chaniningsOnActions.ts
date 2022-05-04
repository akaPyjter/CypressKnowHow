/// <reference types="cypress" />

describe('test', () =>{

    it('chaining on wrap element', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').then($element =>{
            cy.wrap($element).type("Cypress")
            cy.wrap($element).type('{enter}')
        })
        cy.checkIfRedirected('https://www.google.pl/')
    })

    it('chaining on cy element', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('.gLFyf').type("Cypress").type('{enter}')
        cy.checkIfRedirected('https://www.google.pl/')
    })
})
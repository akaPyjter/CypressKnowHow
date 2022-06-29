/// <reference types="cypress" />

describe('test', () =>{

    it('gettingText', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('[class=ktLKi]').then(element =>{
            const elementText = element.text()
            cy.log(elementText)
        })
        cy.get('[class=ktLKi]').invoke('text').then(sometext =>{
            cy.log(sometext.toString())
        })
        cy.get('[class=ktLKi]').invoke('val').then(sometext =>{
            cy.log(sometext.toString())
        })
    })
})
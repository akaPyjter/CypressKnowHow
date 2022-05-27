
/// <reference types="cypress" />

describe('test', () =>{

    it('gettingControls', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('#L2AGLb > .QS5gu').click()
        
        // by tag name
        cy.get('input')

        // by ID
        cy.get('#inputID')

        // by className
        cy.get('.className')

        //by Attribute name
        cy.get('[placeholder]')

        //by Attribute name and value
        cy.get('[placeholder="value"]')

        //by Class name and value
        cy.get('[class="classValue"]')

        //by tag name and attribute with value
        cy.get('input[placeholder="value"]')

        // by two different attributes
        cy.get('[placeholder="value"][type="email"]')

        // by tag name, Attribute with value, ID and class name
        cy.get('input[placeholder="value"]#inputID.className')

        // by text
        cy.contains('some text')

        // by text and attribute with value
        cy.contains('[status="warning"]', 'Some text')

        // mixed finding
        cy.get('#someID').parent('get parent of element by tagname eg.form').find('use chaining here to get some elements')


        // re-use locators
        cy.contains('[status="warning"]', 'Some text').then(element =>{
            const element1 = element.find('anylocator')
        })
    })
})

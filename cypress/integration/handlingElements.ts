/// <reference types="cypress" />

describe('test', () =>{

    it('intro', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('#L2AGLb > .QS5gu').click()
        cy.get('[class=ktLKi]').invoke('attr', 'class').should('contain', 'checked')
    })


    it('radio and checkboxes', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('[type="radio"]').check({force: true}).then(radioButton =>{
            cy.wrap(radioButton).should('be.checked')
            cy.wrap(radioButton).should('not.be.checked')
            cy.wrap(radioButton).should('be.disabled')
            cy.wrap(radioButton).uncheck({force: true})
            cy.wrap(radioButton).click() // <- not recommeneded but possible
        })   
    })

    it('list and dropdown', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('element').click()
        cy.get('.option-list').contains('Dark').click()

        //or
        cy.get('element').then(element => {
            cy.wrap(element).click()
            cy.get('.option-list').contains('Dark').click()
        })
    })

    it('radio and checkboxes', ()=>{
        cy.visit('https://www.google.pl/')
        cy.get('tbody').contains('tr', 'Larry').then(tableRow => {
            cy.wrap(tableRow).find('somebutton').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').type('23')
            cy.wrap(tableRow).find('td').eq(6).should('contain', '23')
        })
    })

    it('popup', ()=>{
        cy.visit('https://www.google.pl/')
        cy.on('window:confirm', (confirm) =>{
            expect(confirm).to.equal('Are you sure you want delete')
        } )
        cy.on('window:confirm', () => false)
        
    })

})
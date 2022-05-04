/// <reference types="cypress" />

Cypress.Commands.add('checkIfRedirected', (notExpectedUrl: string) => {
  cy.url().should('not.equal', notExpectedUrl)
})

Cypress.Commands.add('doChaining', {prevSubject: 'element'}, ($element: JQuery<HTMLElement>, nameOrOptions?: any) =>{
  return cy.wrap($element)
})
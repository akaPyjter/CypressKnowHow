/// <reference types="cypress" />

// @ts-ignore
export declare global {
    export namespace Cypress {
      export interface Chainable {
        checkIfRedirected(notExpectedUrl: string): void,
        doChaining(nameOrOptions: any): any
      }
    }
  }
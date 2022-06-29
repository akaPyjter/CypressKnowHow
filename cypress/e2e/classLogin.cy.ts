class LoginPage{
    
    navigate(){
        cy.fixture('urls.json').then((url) => {
            cy.visit(url.baseUrl);
        })
    }

    checkIfRedirected(){
        cy.reload()
        cy.fixture('urls.json').then((url) => {
            cy.url().should('equal', url.claimUrl)
        })
    }

}
export default LoginPage;
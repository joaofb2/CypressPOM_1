export class MainPagePO {
    Visit() {
        cy.visit('https://www.amazon.es/-/pt')
    }

    AcceptCookies(){
        cy.get('[id^=sp-cc-accept]').click()        
    }
    
    SearchFail() {
        cy.get('#twotabsearchtextbox').type('++++')
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-size-medium').should('have.text','Não há resultados para')        
    }

    SearchPass() {
        cy.get('[id^=twotabsearchtextbox]').type('mouse')
        cy.get('[id^=nav-search-submit-button]').click()
    }
    
}
/// <reference types="cypress" />

describe('Funcionalidades detalhes da conta', () => {
    beforeEach(() => {
        cy.visit("minha-conta/edit-account")
        cy.fixture("perfil").then(login =>{
        cy.login(login.usuario , login.senha)
        })
       
    });
    it('deve mudar detalhes da conta com sucesso', () => {
        cy.detalheConta("TESTE" , " QA ", " TESTEQA")
        cy.get('.woocommerce-message').should("contain" , "Detalhes da conta modificados com sucesso.")
    });
});
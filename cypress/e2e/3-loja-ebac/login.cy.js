/// <referece types="cypress"/>

describe("funcionalidade: login", ()=> {

    it("deve fazer login com sucesso", ()=>{
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type("teste@qa.com")
        cy.get('#password').type("teste123")
        cy.get('.inline').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("contain" , "Olá, teste-5265 (não é teste-5265? Sair)")

    })


})
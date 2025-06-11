/// <referece types="cypress"/>

describe("funcionalidade: login", ()=> {
beforeEach(() => {
cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
})
afterEach(() => {
    cy.screenshot()
 })
it("deve fazer login com sucesso", ()=>{
    cy.get('#username').type("teste@qa.com")
    cy.get('#password').type("teste123")
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should("exist")
    })
it('Deve fazer login com email invalido', () => {
    cy.get('#username').type("testeerrado@qa.com")
    cy.get('#password').type("teste123")
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should("contain" , "Endereço de e-mail desconhecido.")
})
it('Deve fazer login com senha invalida', () => {
    cy.get('#username').type("teste@qa.com")
    cy.get('#password').type("senhainvalida123")
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should("contain" , "Erro: A senha fornecida para o e-mail teste@qa.com está incorreta. Perdeu a senha?")
 })
})
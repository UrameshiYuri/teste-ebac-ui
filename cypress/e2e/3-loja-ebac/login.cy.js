/// <referece types="cypress"/>
const perfil = require("../../fixtures/perfil.json")
describe("funcionalidade: login", ()=> {
beforeEach(() => {
cy.visit("minha-conta")
});
afterEach(() => {
    cy.screenshot()
 });
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
});
it('Deve fazer login com senha invalida', () => {
    cy.get('#username').type("teste@qa.com")
    cy.get('#password').type("senhainvalida123")
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should("contain" , "Erro: A senha fornecida para o e-mail teste@qa.com está incorreta. Perdeu a senha?")
 });
 it('deve fazer login com sucesso com massa de dados', () => {
    cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should("exist")
 });
  it.only('deve fazer login com sucesso usando fixture', () => {
    cy.fixture("perfil").then(dados => {  
    cy.get('#username').type(dados.usuario , {log: false})
    cy.get('#password').type(dados.senha , { log: false})
    cy.get('.inline').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('a > .hidden-xs').should("exist")

     }) 
 });
})
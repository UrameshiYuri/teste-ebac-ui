/// <referece types="cypress"/>
import { faker } from '@faker-js/faker';
describe('Deve cadastrar contas novas no site da EBAC shop com faker', () => {
beforeEach(() => {
    cy.visit("minha-conta")
});   
it('Deve Fazer cadastro com faker', () => {
   var nome = faker.person.firstName() 
   var email = faker.internet.email(nome)
   var sobrenome = faker.person.lastName()
   var senha = faker.internet.password()
   cy.get('#reg_email').type(email)
   cy.get('#reg_password').type(senha)
   cy.get(':nth-child(4) > .button').click() 
   cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should("exist")
   cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
   cy.get('#account_first_name').type(nome)
   cy.get('#account_last_name').type(sobrenome)
   cy.get('.woocommerce-Button').click()
   cy.get('.woocommerce-message').should("contain" , "Detalhes da conta modificados com sucesso.")
 });

 it.only('deve completar o cadastro com sucesso usando comando customizado', () => {
  cy.preCadastro(faker.internet.email(), faker.internet.password(), faker.person.firstName(), faker.person.lastName() )
  cy.get('.woocommerce-message').should("contain" , "Detalhes da conta modificados com sucesso.")
 });
 
});
/// <referece types="cypress"/>

describe('deve clicar nos produtos da lista', () => {
beforeEach(() => {
  cy.visit("produtos")
});    
    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.image-hover').first()
        .click()
        cy.get('#tab-title-description > a').should("contain" , "Descrição")
    });
    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('.image-hover').last()
        .click()
        cy.get('#tab-description > :nth-child(1)').should("contain" , "From weekend warrior to Warrior Pose II")
    });
    it('Deve selecionar o terceiro item da lista', () => {
        cy.get('.image-hover').eq(2)
        .click()
        cy.get('#tab-description > :nth-child(1)').should("contain" , "The Aether Gym Pant is built for the studio")
    });
    it('Deve pegar o item especifico da lista', () => {
        cy.get(' .name').contains("Ajax Full-Zip Sweatshirt")
        .click()
        cy.get('#tab-title-description').should("exist")
    });
});
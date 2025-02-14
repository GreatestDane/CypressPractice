/// <reference types="cypress" /> 

describe('Cypress E2E testing demo', () => {
  //assert url 
  it('Assert url', () => {
    cy.visit('https://example.com/'); 
    cy.url().should('contain', 'example.com');
  });

  //Get title 
  it('Assert title', () =>{
    cy.visit('https://example.com/');
    cy.title().should('contain', 'Example Domain'); 
  });

  // Get elements 
  it('Assert element', () => {
    cy.visit('https://example.com/');
    cy.get('h1').should('be.visible');
    cy.wait(10000)
    cy.get('p').should('be.visible');
  });

  //reloads and logs
  it('reload and logs', () => {
    cy.visit('https://example.com/');
    cy.log('before reload'); 
    cy.reload();
    cy.log('after reload');
  })
});



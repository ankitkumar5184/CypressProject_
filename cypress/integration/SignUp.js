/// <reference types = "cypress"/>



const URL = "https://www.demoblaze.com/index.html";
const username = "admin45";
const password = "admin8956";

it('Signup',function()
{
    cy.visit(URL)
    cy.get('#signin2').click()
    cy.get('#sign-username').type(username)
    cy.get('#sign-password').type(password)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    
})



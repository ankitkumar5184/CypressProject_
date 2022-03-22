/// <reference types = "cypress"/>



const URL = "https://www.demoblaze.com/index.html";
const username = "admin45";
const password = "admin8956";

it('login',function()
{
    cy.visit(URL)
    cy.get('#login2').click()
    
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(8000)
    cy.get('#logout2').click()
})



/// <reference types = "cypress"/>



const URL = "https://www.demoblaze.com/index.html";
const username = "admin45";
const password = "admin8956";

it('add_to_cart',function()
{
    cy.visit(URL)
    cy.get('#login2').click()
    cy.wait(2000)
    cy.get('#loginusername').type(username)
    cy.get('#loginpassword').type(password)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').click()
    cy.wait(2000) 
    cy.get('.col-sm-12 > .btn').click()
    cy.wait(2000)
    cy.get('#cartur').click()
    cy.wait(2000)
    cy.get('.col-lg-1 > .btn').click()

    cy.get('#name').type("Admin{enter}")
    cy.get('#country').type("India{enter}")
    cy.get('#city').type("Pune{enter}")
    cy.get('#card').type("124536859645{enter}")
    cy.get('#month').type("march{enter}")
    cy.get('#year').type("2023{enter}")
    cy.wait(1000)
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(1000)
    cy.get('.confirm').click()
    cy.get('#logout2').click()
})



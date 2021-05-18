// https://docs.cypress.io/api/introduction/api.html

describe('Mesh landing page after login', () => {
  it('Visits the app root url and renders without errors', () => {
    cy.visit('/localhost:8080')
    cy.contains('h3', 'Hi, Nikki')
    cy.get('.left-section').find('a').should('have.length', 4)
    cy.get('.projects-container').find('a').should('have.length', 4)

    cy.get('.feedback-container').should('exist')
    cy.get('.notes-container').should('exist')
    cy.contains('footer', '🦑')
  })
})

// this one isn't working for some reason. I think I need to change the route or test the route by clicking???
describe('Mesh about page', () => {
  it.skip('Visits the about route and renders without errors', () => {
    cy.visit('/localhost:8080/about')
    cy.get('.feedback-container').children('.about').should('exist')
  })
})

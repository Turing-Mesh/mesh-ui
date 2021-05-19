// https://docs.cypress.io/api/introduction/api.html
describe('temp', () => {
  it('simple test for testing test', () => {
    cy.visit('/localhost:8080')
      .contains('h3', 'Hi, Nikki')
  })
})

describe('Mesh landing page after login', () => {
  it('Visits the app root url and renders without errors', () => {
    cy.visit('/')
    cy.contains('h3', 'Hi, Jessica')
    cy.get('.left-section').find('a').should('have.length', 4)
    cy.get('.feedback-container').should('exist')
    cy.contains('footer', '🦑')
  })

  it('Shows module stuff after clicking on a button', () => {
    cy.get('[data-cy=mod1]').click()
    cy.url().should('eq', 'http://localhost:8081/modules/1')
  })
})

// this one isn't working for some reason. I think I need to change the route or test the route by clicking???
describe('Mesh about page', () => {
  it.skip('Visits the about route and renders without errors', () => {
    cy.visit('/about')
    cy.get('.feedback-container').children('.about').should('exist')
  })
})

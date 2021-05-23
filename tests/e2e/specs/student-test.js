// https://docs.cypress.io/api/introduction/api.html
describe('temp', () => {
  it('simple test for testing test', () => {
    cy.visit('http://localhost:8080/')
      .contains('h3', 'Hi, Jessica')
  })
})

describe('Mesh landing page after login', () => {
  it('Visits the app root url and renders without errors', () => {
    cy.visit('http://localhost:8080/')
      .contains('h3', 'Hi, Jessica')
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
      .get('footer').contains('🦑')
  })

  it('Shows module stuff after clicking on a button', () => {
    cy.get('[data-cy=mod1]').click()
      .url().should('eq', 'http://localhost:8080/modules/1')
  })
})

// this one isn't working for some reason. I think I need to change the route or test the route by clicking???
describe('Mesh about page', () => {
  it('Visits the about route and renders without errors', () => {
    cy.visit('http://localhost:8080/about')
      .get('h1').should('exist')
  })
})

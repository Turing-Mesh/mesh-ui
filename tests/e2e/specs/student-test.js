// https://docs.cypress.io/api/introduction/api.html
describe('Student dashboard', () => {
  // TODO beforeEach to .visit

  it('Should have a header', () => {
    cy.visit('http://localhost:8080/')
      // TODO logo
      // TODO date
      .contains('h3', 'Hi, Jessica')

      // TODO move to separate test
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
      .get('footer').contains('🦑')
  })

  it('Should have a sidebar', () => {
    cy.visit('http://localhost:8080/')
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
      .get('footer').contains('🦑')
  })

  it('Should have a main feedback section', () => {
    cy.visit('http://localhost:8080/')
    // TODO should have four projects listed
    // TODO rework these tests
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
  })

  it('Should have a footer', () => {
    cy.visit('http://localhost:8080/')
    // TODO add more tests
      .get('footer').contains('🦑')
  })

  it('Shows module stuff after clicking on a button', () => {
    cy.get('[data-cy=mod1]').click()
      .url().should('eq', 'http://localhost:8080/modules/1')
  })
})

describe('Student feedback', () => {
  // TODO beforeEach to .visit
  it('Shows module stuff after clicking on a button', () => {
    cy.get('[data-cy=mod1]').click()
      .url().should('eq', 'http://localhost:8080/modules/1')
  })

  // TODO test for adding notes
})

describe('About page', () => {
  it('Visits the about route and renders without errors', () => {
    cy.visit('http://localhost:8080/about')
    // TODO flesh this out
    // TODO also test actually clicking on something to get to about route
      .get('h1').should('exist')
  })
})

// https://docs.cypress.io/api/introduction/api.html
describe('Student dashboard', () => {
  // TODO beforeEach to .visit

  it('Should have a header', () => {
    cy.visit('http://localhost:8080/')
      .get('img').should('have.class', 'logo rotating')
      .get('.date').contains(/\d\d\d\d/) //regex to find four digits in a row
      .get('h3').contains(/Hi\,\s[A-Z][a-z]/) //regex to find "Hi,", space, capital letter, lowercase letter
  })

  it('Should have a sidebar', () => {
    cy.visit('http://localhost:8080/')
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
      .get('[data-cy=mod1').contains('Module 1')
      .get('[data-cy=mod2').contains('Module 2')
      .get('[data-cy=mod3').contains('Module 3')
      .get('[data-cy=mod4').contains('Module 4')
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

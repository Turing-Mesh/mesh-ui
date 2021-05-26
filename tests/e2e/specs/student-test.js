// https://docs.cypress.io/api/introduction/api.html
describe('Student dashboard', () => {
  // TODO beforeEach to .visit

  it('Should have a header', () => {
    cy.visit('http://localhost:8080/')
      .get('img').should('have.class', 'logo rotating')
      .get('.date').contains(/\d\d\d\d/) //regex to find four digits in a row
      .get('h3').contains(/Hi\,\s[A-Z][a-z]/) //regex to find "Hi,", space, capital letter, lowercase letter
  })

  it('Should have a have a subheader', () => {
    cy.visit('http://localhost:8080/')
      .get('h2').contains('Welcome to Mesh.')
      .get('p').contains('see your feedback')
  })

  it('Should have a sidebar', () => {
    cy.visit('http://localhost:8080/')
      .get('.left-section').find('a').should('have.length', 4)
      .get('.feedback-container').should('exist')
      .get('[data-cy=mod1').contains('Module 1')
      .get('[data-cy=mod2').contains('Module 2')
      .get('[data-cy=mod3').contains('Module 3')
      .get('[data-cy=mod4').contains('Module 4')
      .get('a').should('not.contain', 'Module 5')
  })

  it('Should have a main feedback section', () => {
    cy.visit('http://localhost:8080/')
      .get('[data-cy=mod1').click()
      // TODO figure out how to grab container to test for four project buttons
      // .get('.right-section').contains('.feedback-container').contains('.projects-container').contains('a').contains('button').contains('Project 3')
      // .get('.feedback-container')
      // .get('nav').should('have.class', '.projects-container')
      // .get('nav').should('have.class', '.projects-container').find('a').contains('Project 3').click()
      // .get('span').contains('Project 3').click()
      // .get('button').contains('span', 'Project 3').click()
      // .get('button').contains('span', 'Project 3').should('have.class', 'project-btn').contains('Project 3').click()
      // .get('button').find('span', 'Project 3').click()
      // .get('.project-tab').contains('Project 3')
      .wait(2000)
      .get('[data-cy=proj1').contains('Project 1')
      .get('.upper-project')
      .get('.project-name').contains(/[A-Z][a-z]{2}/)
      .get('.feedback-container__category').should('have.length', 4)
      .get('.feedback-container__category--comments').should('have.length', 4)
      .get('.overall-container')
      .get('.overall').contains('Overall')
      .get('.progress-bar-overall')
      .get('.notes-container').contains('Student Notes')
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

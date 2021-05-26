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
      .get('.feedback-container')
      .get('[data-cy=mod2').click()
      .wait(1000)
      .get('[data-cy=mod1').click()
      .wait(1000)
      .get('.project-tab').contains('Project 1')
      .get('.project-tab').contains('Project 2')
      .get('.project-tab').contains('Project 4')
      .get('.project-tab').contains('Project 3').click()
      .wait(1000)
      .get('.upper-project').should('exist')
      .get('.project-name').contains(/[A-Z][a-z]{2}/)
      .get('.feedback-container__category').should('have.length', 4)
      .get('.feedback-row--comments').should('have.length', 4)
      .get('.feedback-row--progress').should('have.length', 4)
      .get('.overall-container').should('exist')
      .get('.overall').contains('Overall')
      .get('.progress-bar-overall').should('exist')
      .get('.notes-container').contains('Student Notes')
  })

  it('Should have a footer', () => {
    cy.visit('http://localhost:8080/')
      .get('footer').contains('Ben')
      .get('footer').contains('Genevieve')
      .get('footer').contains('Jessica')
      .get('footer').contains('Jesus')
      .get('footer').contains('Katie')
      .get('footer').contains('Nikki')
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

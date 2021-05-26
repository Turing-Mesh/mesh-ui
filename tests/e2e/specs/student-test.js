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
      .wait(4000)
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
      .url().should('eq', 'http://localhost:8080/modules/1/project/3')
      .get('[data-cy=mod2').click()
      .get('.project-tab').contains('Project 4').click()
      .url().should('eq', 'http://localhost:8080/modules/2/project/4')
  })

  it('Should accept and display user-entered notes', () => {
    cy.visit('http://localhost:8080/')
    // TODO add tests for entering and seeing notes
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
})

describe('About page', () => {
  it('Should display a giant squid on the about page', () => {
    cy.visit('http://localhost:8080/')
      .get('.name').click()
      .url().should('eq', 'http://localhost:8080/about')
      .get('h1').should('exist')
      .get('.squid').should('exist')
  })
})

describe('navigation e2e tests', () => {
  it('tests sidebar opening and closing buttons', () => {
    cy.visit('/')

    cy.get('[data-id="open-sidebar"]').should('not.exist')
    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.get('[data-id="open-sidebar"]').should('be.visible')
    cy.get('[data-id="close-sidebar-btn"]').click()
    cy.get('[data-id="open-sidebar"]').should('not.exist')
  })

  it('tests sidebar navigation links', () => {
    cy.visit('/')

    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.get('[data-id="about-link"]').click()
    cy.get('[data-id="open-sidebar"]').should('not.exist')
    cy.url().should('include', '/about')
    cy.contains(/about me/i)

    cy.visit('/')

    cy.get('[data-id="open-sidebar-btn"]').click()
    cy.get('[data-id="settings-link"]').click()
    cy.get('[data-id="open-sidebar"]').should('not.exist')
    cy.url().should('include', '/settings')
    cy.contains(/settings/i)

    cy.visit('/')

    cy.url().should('include', '/')
    cy.contains(/home/i)
  })
})

describe('ComponentName.cy.ts', () => {
  it('playground', () => {
    // masuk page
    cy.visit('http://localhost:4200')

    // Login
    cy.get('[data-cy=input-name]').type('Reynaldy')
    cy.wait(1000)
    cy.get('[data-cy=input-password]').type('testtest')
    cy.wait(1000)
    cy.get('[data-cy=btn-login]').click()
    cy.wait(1000)

    // Profile
    cy.get('[data-cy=text-navbar-profile-name]').should('contain', 'Hi')
    cy.wait(1000)

    // Masukin Item ke Cart
    cy.get('[data-cy=btn-add-menu-item-to-cart]').click({multiple: true})
    cy.wait(1500)

    // Checkout
    cy.get('[data-cy=btn-checkout]').click()
    cy.wait(5000)

    // Logout
    cy.get('[data-cy=btn-logout]').click()
    cy.wait(5000)
  })
})




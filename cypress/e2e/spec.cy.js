describe('template spec', () => {
  it('open the app', () => {
    cy.visit('/')
    cy.contains('React')
  })
})

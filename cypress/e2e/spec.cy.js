describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(true)
  })

  it('failure', () => {
    cy.visit('https://example.cypress.io')
    expect(true).to.equal(false)
  })
})
describe('Pokedex', function () {
  beforeEach(
    function () {
      cy.visit('http://localhost:5000')
    }
  )

  it('front page can be opened', function () {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('right content is loaded', function () {
    cy.contains('ivysaur').click()
    cy.contains('ivysaur')
    cy.get('.pokemon-ability-name')
      .should('have.length', 2)
      .then(abilities => {
        cy.wrap(abilities[0]).contains('overgrow')
        cy.wrap(abilities[1]).contains('chlorophyll')
      })
  })
})
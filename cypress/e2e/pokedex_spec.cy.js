/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
    cy.contains('weedle').click()
    cy.wait(1000)
    cy.get('#previous').click()
    cy.contains('butterfree')
    cy.get('#next').click()
    cy.contains('metapod')


  })
})
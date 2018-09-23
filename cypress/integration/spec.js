/// <reference types="Cypress" />

context('Home', () => {
  beforeEach(() => {
    cy.visit('https://bluemodus.com')
  })


  it('Nabigation item count', () => {
    cy.get('body').find('.headerMain-navMainLink')
      .should(($p) => {
        expect($p).to.have.length(6)
      });

  })

  it('Backout', () => {
    cy.screenshot({ capture: 'viewport', blackout: ['.headerMain-navMainLink'] });
  })

})

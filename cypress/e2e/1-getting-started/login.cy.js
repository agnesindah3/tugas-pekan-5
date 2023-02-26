describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://kasirdemo.belajarqa.com')
  })

  it('Login with Valid Input', () => {
    cy.get('[id="email"]').type('jojo551@gmail.com')
    cy.get('[id="password"]').type('jojo551')
    cy.get('.chakra-button').click()
  })

  
  it('Login with inValid Input', () => {
    cy.get('[id="email"]').type('jojo551@gmail.com')
    cy.get('[id="password"]').type('jojo5512')
    cy.get('.chakra-button').click()
  })

})

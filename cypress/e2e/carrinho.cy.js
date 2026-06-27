describe('Carrinho - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve adicionar produto ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('deve adicionar múltiplos produtos ao carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()

    cy.get('.shopping_cart_badge').should('have.text', '2')
  })

  it('deve remover produto do carrinho', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()

    cy.get('.cart_item').should('not.exist')
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('deve completar o fluxo de checkout', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Lucas')
    cy.get('[data-test="lastName"]').type('Frazão')
    cy.get('[data-test="postalCode"]').type('01310-100')
    cy.get('[data-test="continue"]').click()

    cy.get('.summary_info').should('be.visible')
    cy.get('[data-test="finish"]').click()

    cy.get('.complete-header').should('contain', 'Thank you for your order')
  })
})

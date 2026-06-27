describe('Produtos - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
  })

  it('deve exibir lista de produtos após login', () => {
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

  it('deve ordenar produtos por preço (menor para maior)', () => {
    cy.get('[data-test="product_sort_container"]').select('lohi')

    cy.get('.inventory_item_price').then(($precos) => {
      const valores = [...$precos].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      )
      const ordenado = [...valores].sort((a, b) => a - b)
      expect(valores).to.deep.equal(ordenado)
    })
  })

  it('deve abrir a página de detalhes de um produto', () => {
    cy.get('.inventory_item_name').first().click()

    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
    cy.get('[data-test="add-to-cart"]').should('be.visible')
  })

  it('deve fazer logout corretamente', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()

    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
  })
})

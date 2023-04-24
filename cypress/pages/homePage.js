class HomePage {
  visitHomePage() {
    cy.visit('https://www.weld.pl/');
  }

  getProductSearch(product) {
    cy.get('#search').type(product)
    cy.get('#search_btn').click()
  }
}

export default HomePage
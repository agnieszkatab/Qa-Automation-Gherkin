class ProductPage {
    addToCart() {
        cy.get('#add_to_basket').click()
    }

    goToCart() {
        cy.get('.clearfix > :nth-child(2) > a').click()
    }
}


export default ProductPage
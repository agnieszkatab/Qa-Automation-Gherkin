class SearchResultsPage {
    chosenProduct() {
        cy.get(':nth-child(2) > .grid_product_block > a > img').click()
    }
}

export default SearchResultsPage
class CheckoutPage {
    goFurther() {
        cy.get('#gotoStep2').click()
    }

    fillOrderForm() {
        cy.get('#name').type("Imię Nazwisko");
        cy.get('#street').type("ulica");
        cy.get('#home').type("1");
        cy.get('#city').type("miasto");
        cy.get('#email').type("email@email");
        cy.get('#phone').type('123456789');
        cy.get('#agreement_0').click()
        cy.get('#agreement_2').click()
    }

    placeOrderButton() {
        cy.get('#place_order > .rollover').click()
    }
}


export default CheckoutPage
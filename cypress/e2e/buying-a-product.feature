Feature: Searching and purchasing a product in https://www.weld.pl


Scenario: Product search
    Given user is on the home page
    When user enters "lonża" in a search field
    And clicks a search button
    Then user will see a list with searching products

Scenario: Adding product to cart
    Given user is on chosen product page
    When user clicks "add to cart"
    Then user will see a confirmation of the product beeing added

Scenario: Making a purchase
    Given user is on te cart page
    When user clicks "go further" button
    And fills in an order form
    And clicks "I order with obligation to pay" button
    Then user will see a purchase confirmation 

Scenario: Validating the purchase
    Given user has received an order confirmation
    When user checks their email inbox
    Then user will see an email with purchase confirmation
    And verify that the order information is correct

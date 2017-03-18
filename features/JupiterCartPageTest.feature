@jupiterCartPageTest

Feature: Jupiter Toys Website Shopping Page Test

  Background:
    Given I open Jupiter's home page


  Scenario Outline: Verify product price
    Then the cart count should be 0
    When I navigate to shopping page
    And I add the product <ProductName> to cart
    Then the cart count should be 1

    Examples:
      | ProductName |
      | Smiley Bear |

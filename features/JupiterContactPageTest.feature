@jupiterContactPageTest

Feature: Jupiter Toys Contact Page Test

  Background:
    Given I open Jupiter's home page

  Scenario Outline: Verify The Mandatory Field Error Messages
    When I navigate to contact page
    And  I click on submit
    Then I should see the mandatory field error messages
    When I enter the values for <name>, <email>, <phonenum> and <message> fields
    Then I should not see the mandatory field error messages

    Examples:
    | name        | email                       | phonenum  | message   |
    | Munikrishna | mrama@planittesting.com     | 8888      |None      |
    | Santosh     | snanduri@planittesting.com  | 9999      |Nightwatch|

  Scenario Outline: Verify Invalid Field Error Message
    When I navigate to contact page
    When I enter the values for <name>, <email>, <phonenum> and <message> fields
    Then I should see the validation error messages

    Examples:
      | name        | email                      | phonenum  | message    |
      | Munikrishna | mramaplanittesting.com     | aaaa      | None       |
      | Santosh     | snanduri@planittestingcom  | bbbb      | Nightwatch |

  Scenario Outline: Verify the Successful submission
    When I navigate to contact page
    When I enter the values for <name>, <email>, <phonenum> and <message> fields
    And  I click on submit
    Then I should see successful message

    Examples:
      | name        | email               | message    | phonenum|
      | Dan         | dan@jupiter.com     | Hello      |         |

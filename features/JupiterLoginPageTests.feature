@jupiterLoginPageTest

Feature: Jupiter Toys Website Login Test

  Background:
    Given I open Jupiter's home page

  @MediumRisk
  Scenario Outline: Verify The Invalid Login Message
    When I navigate to login page
    And  I Enter <UserName> and <Password>
    And I click the Login button
    Then Login should not be succesful

    Examples:
      | UserName |  Password  |
      | xxx      |  xxx       |

  @HighRisk
  Scenario Outline: Verify a Valid Login
    When I navigate to login page
    And  I Enter <UserName> and <Password>
    And I click the Login button
    And I click the user Menu
    Then I should be able to see the welcome <UserName> message

    Examples:
      | UserName |  Password  |
      | user1    |  letmein   |

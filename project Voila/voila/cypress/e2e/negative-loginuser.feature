Feature: Negative Login Testing
   
@incorrect-user
    Scenario: Login with incorrect username
    Given I open the Login Page
    When I submit Login
    And I input username
    Then I redirect to Register Page
Feature: Negative Login Testing Password

@incorrect-pswd
  Scenario: Login with incorrect password
    Given I Open the Login Page
    When I Submit Login
    And I input username and password
    Then I should see error message
    
    
   

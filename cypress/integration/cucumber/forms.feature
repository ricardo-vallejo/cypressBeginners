@forms
Feature: Fill Forms
    Fill the forms
    Scenario: Filling the first form
    Given the form page
    Then fill the first name "Ricardo" 
    And fill the first message "Texto"
    And submit the first button

    Scenario: Filling the second form
    Given the form page
    Then fill the second name "Ricardo" 
    And fill the second message "Texto"
    And solve the captcha
    And submit the second button
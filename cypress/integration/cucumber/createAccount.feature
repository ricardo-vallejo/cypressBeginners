@createAccount
Feature: Create a new account

    Create new accounts in the courses page

    Scenario: Create new member account
    Given the sign up page
    And I write my information
    And I check the terms of use
    When I sign up
    Then The server return a captcha
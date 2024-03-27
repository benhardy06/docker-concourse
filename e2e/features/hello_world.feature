Feature: Checking for Hello, World! text on a webpage

  Scenario: Verify presence of Hello, World! text
    Given I open the webpage
    Then I should see "Hello, World!" text
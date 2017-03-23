Feature: Testing Wikipedia
    As Troll
    I want to test Wikipedia

  @watch @critical
  Scenario: Open the Chimpy page
    Given I visit "https://en.wikipedia.org/wiki/Chimpanzee"
    Then The text of "#mw-content-text > p:nth-child(3) > b:nth-child(1)" is "Chimpanzees"


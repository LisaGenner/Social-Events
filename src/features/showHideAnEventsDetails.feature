Feature: Show/hide an event details

Scenario: An event element is collapsed by default
Given user has searched for a city
When the events are listed
Then the event details should be collapsed by default

Scenario: User can expand an event to see its details
Given the city-search list is displayed
When a user clicks on the details button
Then the event details should expand displaying its details

Scenario: User can collapse an event to hide its details
Given an event details are expanded
When user clicks collapse button
Then the details should collapse within the specific event, hiding its details

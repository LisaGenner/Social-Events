Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number
Given a blank number of events field
When a user clicks search
Then show the default number of 32 events to be displayed

Scenario: User can change the number of events they want to see
Given a user enters a number in the number of events field
When the user is on the event search page
Then display the number of events specified by the user

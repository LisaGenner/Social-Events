# Social-Events

# Objective
To build a serverless, using FaaS.  A progressive web application (PWA) with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.

# Key Features

1. Filter events by city.

2. Show/hide event details.

3. Specify number of events.

4. Use the app when offline.

5. Add an app shortcut to the home screen.

6. View a chart showing the number of upcoming events by city.


# User Stories

1. As a user, I would like to be able to filter events by city, so I can view the list of events that take place in a city.

2. As a user, I would like to be able to show/hide the event details, so I can see more/less details abount an event.

3. As a user, I would like to specify the number of events I can view in the app, so I can see more/less events in the event list at once.

4. As a user, I would like to be able to use the app when offline, so I see view the events I viewed the last time I was online

5. As a user, I would like to be able to add the app shortcut to the home screen, so I can open the app faster.

6. As a user, I would like to be able to see a chart showing the upcoming events in each city, so I know which events are organised in each city

# User Stories
FEATURE 1: FILTER EVENTS BY CITY 

User story: As a user, I would like to be able to filter events by city so that I can see the events that take place in that city.

Scenario 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events
Scenario 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed
Scenario 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

User story: As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
Scenario 1: An event element is collapsed by default
Given the app loaded
When user will receive a list of upcoming events for the specific city in search
Then event details are not visible for	 user
Scenario 2: User can expand an event to see its details
Given the user received general info about upcoming events
When the user pushes the details button to see more info
Then the specific event is expanded with additional details
Scenario 3: User can collapse an event to hide its details
Given specific event was expanded to show details 
When the user pushes the back button
Then the specific event details will not be visiable to the user.

FEATURE 3: SPECIFY NUMBER OF EVENTS

User story: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the app loaded and the user received a list of upcoming events in specific city
When the user hasn't specified a number of events to be displayed
Then the user receives the first 32 events on the app
Scenario 2: User can change the number of events they want to see
Given the app loaded, user recieved a list of upcoming events in specified city
When the user hasn't specified  the number of events.  User is provided with options to choose the number of events to display (32, 64 or 96)
Then the user will receive the first (32, 64 or 96) events to be displayed based on the number specified.

FEATURE 4: USE THE APP WHEN OFFLINE

User story: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online
Scenario 1: Show cached data when there’s no internet connection
Given the users had previously open the app with a internet connection
When the user opens the app without internect connection
Then the user will receive cached data from the last session when loaded with active internet.
Scenario 2: Show error when user changes the settings (city, time range)
Given the user opened the app without internect connection and received cached data from the last session.
When user changes the setting to city and time range
Then the user receives an error message stating the data is not available without an internect connection.
FEATURE 5: DATA VISUALIZATION
User story: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
Scenario 1: Show a chart with the number of upcoming events in each city
Given app is loaded, the user received a list of upcoming events for a specificed city.
When user pushes the "visualize" button
Then the user will see a chart showing the number of upcoming events in that city and category queried.


# Technical Requirements:

● The app must be a React application.

● The app must be built using the TDD technique.

● The app must use the Google Calendar API and OAuth2 authentication flow.

● The app must use serverless functions (AWS lambda is preferred) for the authorization server
instead of using a traditional server. 

Reasons for utilizing serverless:  
Going serverless for my Event Social app will allow me to have a fast and easy deployment.  this way i dont need to implement the code from scratch.  FaaS allows more servers to be allocated to the app during high traffic times. This way I dont have to realy on actual servers which could crash if the traffic exceeds the limit.  Also the for the cost saving, you are only charged when the app is being used.

● The app’s code will be hosted in a Git repository on GitHub.

● The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well
as on IE11.

● The app must display well on all screen sizes (including mobile and tablet) widths of 1920px
and 320px.

● The app must pass Lighthouse’s PWA checklist.

● The app will work offline or in slow network conditions with the help of a service worker.

● Users may be able to install the app on desktop and add the app to their home screen on
mobile.

● The app must be deployed on GitHub Pages.

● The API call must use React axios and async/await.

● The app must implement an alert system using an OOP approach to show information to the
user.

● The app must make use of data visualization (recharts preferred).

● The app must be covered by tests with a coverage rate >= 90%.

● The app must be monitored using an online monitoring tool.

# Serverless Function
This app will use a token for authorization, which will be generated in an authorization server. This server will host Lambda functions created to deliver authorization tokens to users. With this token, users will have access to event data from Google Calendar API.

# Live URL
https://lisagenner.github.io/Social-Events/

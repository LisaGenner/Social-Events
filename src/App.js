// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { WarningAlert } from "./Alert";
import { getEvents, extractLocations } from "./api";
import './nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    selectedCity: null,
    eventCount: 32,
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
      this.setState({ events, locations: extractLocations(events) });
    }
});
}

componentWillUnmount(){
  this.mounted = false;
}

updateEvents = (location, eventCount) => {
  if (!eventCount) {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.eventCount);
      this.setState({
        events: shownEvents,
        selectedCity: location,
      });
    });
  } else if (eventCount && !location) {
    getEvents().then((events) => {
      const locationEvents = events.filter((event) =>
        this.state.locations.includes(event.location)
      );
      const shownEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: shownEvents,
        eventCount: eventCount,
      });
    });
  } else if (this.state.selectedCity === "all") {
    getEvents().then((events) => {
      const locationEvents = events;
      const shownEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: shownEvents,
        eventCount: eventCount,
      });
    });
  } else {
    getEvents().then((events) => {
      const locationEvents =
        this.state.locations === "all"
          ? events
          : events.filter(
              (event) => this.state.selectedCity === event.location
            );
      const shownEvents = locationEvents.slice(0, eventCount);
      this.setState({
        events: shownEvents,
        eventCount: eventCount,
      });
    });
  }
};

  render() {
    return (
      <div className='App'>
        <h1>Meet Events App</h1>
        <h4>Choose your nearest city</h4>
        <WarningAlert text={this.state.offlineText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          selectedCity={this.state.selectedCity}
          query={this.state.eventCount}
          updateEvents={this.updateEvents}
        />
        <h4>Number of Events</h4>
        
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;

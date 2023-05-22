// src/App.js

import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import EventGenre from './EventGenre';
import WelcomeScreen from './WelcomeScreen';
import { WarningAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import {   ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './nprogress.css';
import logo from "./images/meet_logo.png.PNG";

class App extends Component {
  state = {
    events: [],
    locations: [],
    selectedCity: null,
    eventCount: 32,
    showWelcomeScreen: undefined
  }
  
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
    true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    // if ((code || isTokenValid) && this.mounted) 
    // {
    getEvents().then((events) => {
    if (this.mounted) {
    this.setState({ events, locations: extractLocations(events) });
    }
    });
    // }
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

getData = () => {
  const {locations, events} = this.state;
  const data = locations.map((location)=>{
    const number = events.filter((event) => event.location === location).length
    const city = location.split(', ').shift()
    return {city, number};
  })
  return data;
};

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className='App'>
        <img src={logo} className="App-logo" alt="logo" />
        <h4>Choose your nearest city</h4>
        <WarningAlert text={this.state.offlineText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
           <h4>Number of Events</h4>
        <NumberOfEvents
          selectedCity={this.state.selectedCity}
          query={this.state.eventCount}
          updateEvents={this.updateEvents}
        />
     <div className="data-vis-wrapper">
      <EventGenre events={this.state.events} />
        <ResponsiveContainer height={400} >
        <ScatterChart
            margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="category" dataKey="city" name="city"  />
          <YAxis allowDecimals={false}type="number" dataKey="number" name="number of events"  />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={this.getData()} fill="#8884d8" />
        </ScatterChart>
        </ResponsiveContainer>
</div>        

        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
getAccessToken={() => { getAccessToken() }} />
</div>
);
}
}

export default App;

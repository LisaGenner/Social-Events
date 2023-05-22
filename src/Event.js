// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false
  };

  handleDetailsClick = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;
   
    return (
    <div className="event">
      <h1 className="summary">{event.summary}</h1>
      <p className="event-start">
        {new Date(event.start.dateTime).toString()}
        </p>
        <p className="event-location">{`@${event.summary} | ${event.location}`}</p>
      {showDetails && (
        <>
          <div className="details">
        <h2 className="about">About Event:</h2>
      <a className="link" href={event.htmlLink}>
               See details on Google Calendar
             </a>
        <p className="description">{event.description}</p>
        </div>
            </>
      )}
        <button className="details-btn" onClick={this.handleDetailsClick}>
        {showDetails ? 'Hide Details' : 'Show Details'}
         </button>
       </div>
      );
    }
    }
export default Event;

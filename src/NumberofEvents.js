import React, { Component } from "react";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
    };
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 1 || value <= 32) {
      this.setState({
        query: value,
      });
      this.props.updateEvents(this.props.selectedCity, value);
    }
  };

  render() {
    return (
      <div>
        <input
          type='number'
          className='numberOfEvents'
          min={1}
          max={32}
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}
 export default NumberOfEvents;
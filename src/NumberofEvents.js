import React, { Component } from "react";

 class NumberOfEvents extends Component {
   state = { number: 10 };

   changeNum(value) {
     this.setState({ num: value });
   }

   render() {
     const {number } = this.state;

     return (
       <input
         className="number"
         type="number"
         value={number}
         onChange={(event) => {
           this.changeNum(event.target.value);
         }}
       ></input>
     );
   }
 }

 export default NumberOfEvents;
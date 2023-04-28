import React, { Component } from "react";

 class NumberOfEvents extends Component {
   state = { num: 10 };

   changeNum(value) {
     this.setState({ num: value });
   }

   render() {
     const { num } = this.state;

     return (
       <input
         className="num"
         type="number"
         value={num}
         onChange={(event) => {
           this.changeNum(event.target.value);
         }}
       ></input>
     );
   }
 }

 export default NumberOfEvents;
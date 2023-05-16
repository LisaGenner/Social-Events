import React from "react";
import ReactDOM from 'react-dom';
// import { render } from "react-dom";
import "./index.css";
import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import * as serviceWorker from './serviceWorker';
import reportWebVitals from "./reportWebVitals";
import * as atatus from 'atatus-js';


// const root = document.getElementById("root");
// render(<App />, root);
ReactDOM.render(<App />, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.register();
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

atatus.config('a83f725ad20c48b0a92ac205f28d315d').install();

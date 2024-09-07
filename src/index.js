// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./CustomButtonWC"; // Importing the web component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

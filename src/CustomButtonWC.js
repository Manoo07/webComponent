// src/CustomButtonWC.js
import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import CustomButton from "./CustomButton";

// Define CustomButton as a web component with prop definitions
const CustomButtonWC = reactToWebComponent(CustomButton, React, ReactDOM, {
  props: ["label", "onClick"],
});

customElements.define("custom-button", CustomButtonWC);

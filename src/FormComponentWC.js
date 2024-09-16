import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import FormComponent from "./FormComponent";

// Convert FormComponent to a Web Component with props
const FormComponentWC = reactToWebComponent(FormComponent, React, ReactDOM, {
  props: ["initialName", "initialEmail", "initialPassword", "onFormSubmit"],
});

// Register the custom element
customElements.define("form-component", FormComponentWC);

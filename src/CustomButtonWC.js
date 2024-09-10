import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import CustomButton from "./CustomButton";

// Custom WebComponent
const CustomButtonWC = reactToWebComponent(CustomButton, React, ReactDOM, {
  props: ["label", "onClick"],
});

customElements.define("custom-button", CustomButtonWC);

// src/App.js
import React, { useEffect } from "react";
import "./CustomButtonWC";
function App() {
  useEffect(() => {
    const customButton = document.querySelector("custom-button");
    customButton?.addEventListener("click", () => {
      alert("Web Component Button Clicked!");
    });
  }, []);

  return (
    <div>
      <h1>Testing the Custom Button Web Component</h1>
      <custom-button label="Hi there "></custom-button>
    </div>
  );
}

export default App;

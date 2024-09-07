// src/CustomButton.js
import React from "react";

const CustomButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        color: "black",
      }}
    >
      {label}
    </button>
  );
};

export default CustomButton;

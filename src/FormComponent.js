import React, { useState, useEffect } from "react";

const FormComponent = ({ initialName = "", initialEmail = "", initialPassword = "", onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: initialName,
    email: initialEmail,
    password: initialPassword
  });

  useEffect(() => {
    // Update formData when props change
    setFormData({
      name: initialName,
      email: initialEmail,
      password: initialPassword
    });
  }, [initialName, initialEmail, initialPassword]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (onFormSubmit) {
      // Call the parent function passed as prop
      onFormSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

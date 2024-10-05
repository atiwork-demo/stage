// Form.js
import React from "react";

const Form = ({ handleChange, handleSubmit, handleLogoChange }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="userclass"
        placeholder="User Class"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="campus"
        placeholder="Campus"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleChange}
        required  
      />
      <input type="file" name="logo" onChange={handleLogoChange} />
      <button type="submit">Generate Card</button>
    </form>
  );
};

export default Form;

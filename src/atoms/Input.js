import React from "react";

import Form from "react-bootstrap/Form";

function Input({ value, style, placeholder, field, type, handleChange, name }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label style={style}>{field}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        name={name}
        required={true}
      />
    </Form.Group>
  );
}

export default Input;

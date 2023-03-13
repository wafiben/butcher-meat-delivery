import React from "react";
import Form from "react-bootstrap/Form";

function CheckboxForm() {
  return (
    <Form>
      <Form.Check type="switch" id="custom-switch" label="active" />
    </Form>
  );
}

export default CheckboxForm;

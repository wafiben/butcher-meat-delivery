import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DropDownListUnit from "./DropDownListUnit";

function AddProduct() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of Product</Form.Label>
        <Form.Control type="text" placeholder="name of product" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>price</Form.Label>
        <Form.Control type="number" placeholder="price" />
        <DropDownListUnit />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddProduct;

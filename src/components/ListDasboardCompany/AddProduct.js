import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import DropDownListUnit from "./DropDownListUnit";
import addImagePhoto from "../../assets/images/add-photo-article.png";
import "../../assets/style/file.css";

function AddProduct({
  handleQuantity,
  quantity,
  handleChange,
  unit,
  handleUnit,
}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name of Product</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="name of product"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>price</Form.Label>
          <Form.Control
            name="price"
            type="number"
            placeholder="price"
            onChange={handleChange}
          />
          <DropDownListUnit unit={unit} handleUnit={handleUnit} />
        </Form.Group>
      </Form>
      <div className="container-quantity">
        <button className="quantity" onClick={() => handleQuantity("+")}>
          +
        </button>
        <span>{quantity}</span>
        <button className="quantity" onClick={() => handleQuantity("-")}>
          -
        </button>
      </div>
      <div className="photo-container">
        <span> drag your photo from Device</span>
        <img src={addImagePhoto} alt="add-product" />
      </div>
    </>
  );
}

export default AddProduct;

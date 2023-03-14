import React, { useState } from "react";
import AddProduct from "./AddProduct";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addProduct } from "../../redux/actions/productAction";
import { useDispatch } from "react-redux";
function AddProducModal({ show, handleClose }) {
  const handleQuantity = (operation) => {
    switch (operation) {
      case "+":
        setSingleProduct({ ...singleProduct, qte: singleProduct.qte + 1 });
        break;
      case "-":
        if (singleProduct.qte > 0) {
          setSingleProduct({ ...singleProduct, qte: singleProduct.qte - 1 });
        } else {
          return;
        }
        break;
      default:
        return;
    }
  };
  const [singleProduct, setSingleProduct] = useState({
    name: "",
    price: 0,
    operation: "",
    qte: 0,
    unit: "unit",
  });
  const handleChange = (e) => {
    setSingleProduct({
      ...singleProduct,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();
  const handleUnit = (unit) => {
    setSingleProduct({ ...singleProduct, unit: unit });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddProduct
            handleQuantity={handleQuantity}
            quantity={singleProduct.qte}
            handleChange={handleChange}
            handleUnit={handleUnit}
            unit={singleProduct.unit}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button className="action-product" onClick={handleClose}>
            Close
          </Button>
          <Button
            className="action-product"
            onClick={() => {
              dispatch(addProduct(singleProduct));
              handleClose();
            }}
          >
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddProducModal;

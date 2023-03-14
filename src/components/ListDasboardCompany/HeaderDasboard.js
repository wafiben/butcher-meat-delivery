import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../../assets/style/file.css";
import AddProducModal from "./AddProducModal";

function HeaderDasboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-header">
      <h3 className="title-header">List of product (total : 8)</h3>
      <Button className="action-product" onClick={handleShow}>
        Add Product
      </Button>
      <AddProducModal handleClose={handleClose} show={show} />
    </div>
  );
}

export default HeaderDasboard;

import React from "react";
import Table from "react-bootstrap/Table";
import imageProduct from "../../assets/images/imageProduct.jpg";
import "../../assets/style/file.css";
import CheckboxForm from "./CheckboxForm";
import Button from "react-bootstrap/Button";
import "../../assets/style/file.css";
import HeaderDasboard from "./HeaderDasboard";
function ListDasboardCompany() {
  return (
    <>
      <HeaderDasboard />
      <Table>
        <thead>
          <tr>
            <th> Product</th>
            <th>Status</th>
            <th>Unit price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {" "}
              <img
                src={imageProduct}
                alt="image-product"
                width="50"
                className="image-product"
              />{" "}
              product 1
            </td>
            <td>
              <CheckboxForm />
            </td>
            <td>0000</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>

            <td>Stock</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>Stock</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ListDasboardCompany;

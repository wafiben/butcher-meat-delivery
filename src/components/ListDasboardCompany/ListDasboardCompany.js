import React from "react";
import Table from "react-bootstrap/Table";
import imageProduct from "../../assets/images/imageProduct.jpg";
import "../../assets/style/file.css";
import CheckboxForm from "./CheckboxForm";
import "../../assets/style/file.css";
import HeaderDasboard from "./HeaderDasboard";
import ArticleAction from "./ArticleAction";
import { useSelector } from "react-redux";
function ListDasboardCompany() {
  const { list } = useSelector((state) => state.listReducer);
  console.log(list);
  return (
    <>
      <HeaderDasboard />
      <div className="table-list">
        <Table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Status</th>
              <th>Unit price</th>
              <th>Stock</th>
              <th>unit</th>
              <th>Product actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(({ name, price, qte, unit }) => (
              <tr>
                <td>
                  {" "}
                  <img
                    src={imageProduct}
                    alt="image-product"
                    width="50"
                    className="image-product"
                  />{" "}
                  {name}
                </td>
                <td>
                  <CheckboxForm />
                </td>
                <td>{price}</td>
                <td>{qte}</td>
                <td>{unit}</td>

                <td>
                  <ArticleAction />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ListDasboardCompany;

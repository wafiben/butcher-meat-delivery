import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "../../assets/style/file.css";
function DropDownListUnit() {
  return (
    <Dropdown className="dropdown-list">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">kilo</Dropdown.Item>
        <Dropdown.Item href="#/action-2">unit</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDownListUnit;

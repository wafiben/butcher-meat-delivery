import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
function ArticleAction() {
  return (
    <Dropdown>
      <Dropdown.Toggle className="action-product" id="dropdown-basic">
        Action
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Modify</Dropdown.Item>
        <Dropdown.Item>Delete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ArticleAction;

import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ value, type, field, style, handleClick }) {
  return (
    <Button style={style} onClick={handleClick} type={type}>
      {field}
    </Button>
  );
}

export default CustomButton;

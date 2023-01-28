import React from "react";

function TextFiled({ className, textFiled, style }) {
  return (
    <p className={className} style={style}>
      {textFiled}
    </p>
  );
}

export default TextFiled;

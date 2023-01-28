import React from "react";
import { backgRoundColrNavbar } from "../../styles";
import TextFiled from "../../atoms/textFiled";
import { navbarText } from "../../styles";

function CustomNavbar() {
  return (
    <div style={backgRoundColrNavbar}>
      <TextFiled
        textFiled="About Us"
        className="text-uppercase text-white badge"
        style={navbarText}
      />
      <TextFiled
        textFiled="Contact Us"
        className="text-uppercase text-white badge"
        style={navbarText}
      />
    </div>
  );
}

export default CustomNavbar;

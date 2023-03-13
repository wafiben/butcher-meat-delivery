import React from "react";
import NavbarAfterConnect from "../navbars/NavbarAfterConnect";
import Card from "../Auth/Card";
import ClientSpace from "../../pages/ClientSpace";
function Home() {
  return (
    <div>
      <NavbarAfterConnect />
      <ClientSpace />
    </div>
  );
}

export default Home;

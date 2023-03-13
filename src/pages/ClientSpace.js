import React from "react";
import ListOfRestaurant from "../components/listOfRestaurant/ListOfRestaurant";
import ListOfButcher from "../components/ListOfbutcher/ListOfbutcher";

function ClientSpace() {
  return (
    <div>
      <ListOfRestaurant />
      <ListOfButcher />
    </div>
  );
}

export default ClientSpace;

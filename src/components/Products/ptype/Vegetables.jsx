import React from "react";
import Cards from "../Cards";
import data from "../data";

function Vegetables({ handleCartData, filterProducts }) {
  const dataItem = data.filter((item) => item.category === "vegetables"); // Fixed spelling of "vegetables"

  // Filter the dataItem using the filterProducts function
  const filteredVegetables = filterProducts(dataItem);

  return (
    <div>
      <Cards data={filteredVegetables} handleCartData={handleCartData} />
    </div>
  );
}

export default Vegetables;

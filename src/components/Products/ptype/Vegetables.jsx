import React from "react";
import Cards from "../Cards";
import data from "../data";

function Vegetables({handleCartData}) {
  const dataItem = data.filter((item)=>item.category==="vegitables")
  return (
    <div>
      <Cards data={dataItem} handleCartData={handleCartData} />
    </div>
  );
}

export default Vegetables;

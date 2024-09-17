import React from "react";
import offerData from "./offerData";
function Offer() {
  return (
    <div className="bg-gray-50 flex flex-col items-center py-5">
      <div className="flex flex-wrap items-center justify-center  px-4">
        {offerData.map((a, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/2 xl:w-1/4 px-1 py-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold txt1 ">
                {a.icon}
              </span>
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {a.h1}
              </h1>
            </div>
            <div className="text-sm md:text-base">{a.info}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offer;

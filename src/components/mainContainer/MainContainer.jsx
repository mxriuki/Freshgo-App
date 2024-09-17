import React from "react";
import pic from "../assets/healthyfood.jpg";

function MainContainer() {
  return (
    <div className="flex flex-col md:flex-row my-5 items-center justify-start px-8">
    <div className="md:w-1/2">
      <img src={pic} alt="asd" className="w-full md:max-w-full rounded-lg" />
    </div>
  
    <div className="md:w-1/2 flex flex-col space-y-5 md:pl-8">
      <div className="txt1 font-bold text-lg md:text-xl lg:text-2xl">Our Stories</div>
      <div className="flex flex-col space-y-3">
        <label className="text-4xl md:text-5xl lg:text-6xl font-bold ">We Are <br /> Healthy Food <br /> Organic.</label>
        <p className="text-base md:text-lg lg:text-xl font-semibold max-w-[29rem]">
          We’ve recently updated our entire product portfolio to give
          customers and partners the best products with the newest technology
        </p>
        <label className="txt1 font3 font-bold text-lg md:text-xl lg:text-2xl">FreshGo</label>
      </div>
    </div>
  </div>
  
  
  );
}

export default MainContainer;

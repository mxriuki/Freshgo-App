import React, { useState } from 'react'
import pic2 from "../assets/salad.jpg";

function Salad() {
  const[showDetails1,setShowDetails1] = useState(true)
  const handlerShow1 = ()=>{
    setShowDetails1(!showDetails1)
  }
  return (
    <div className="relative text-white">
      <img src={pic2} className="h-full rounded-xl" alt="Salad Food Recipes" />
      <div className="absolute top-0 md:top-10 right-0 text-right p-2 md:p-4">
        <div className="flex flex-col space-y-2 items-end">
          <label className="text-2xl md:text-5xl font-bold">Salad Food <br /> Recipes</label>
          {!showDetails1 && (
            <div className="text-lg hidden md:block">
              <p>Fresh, nourishing and always delicious. Check out our favorite recipes for a fruity revival.</p>
            </div>
          )}
          <button
            onClick={handlerShow1}
            className="border border-gray-500 rounded-xl px-4 py-1 bg-green-500 hidden md:block"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Salad
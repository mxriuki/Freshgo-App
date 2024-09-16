import React from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
    const navigate=useNavigate()
    const handleButton=()=>{
        navigate('/')
    }
  return (
    <div className="min-h-screen shadow-2xl flex items-center justify-center bg-gray-200 h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Thank you for your purchase! 🎉</h2>
        <p className="text-lg text-center mb-4">
        Your order has been confirmed. We hope you enjoy your products! 🛍️
        </p>
        <div className="text-center">
          <button onClick={handleButton} className="bgcolor1 hover:bg-green-600 text-white py-2 px-4 rounded-full">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buy;

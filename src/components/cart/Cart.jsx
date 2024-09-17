import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart({ info, setInfo }) {
  const [price, setPrice] = useState(0);
  const navigate = useNavigate();
  const [amount, setAmount] = useState({});

   // Initialize the amount state with default values
   useEffect(() => {
    const initialAmount = {};
    info.forEach((item) => {
      initialAmount[item.id] = 1; // Set the default quantity to 1 for each item
    });
    setAmount(initialAmount);
  }, [info]);

  // Function to handle quantity change for a specific item
  const handleQuantityChange = (id, newAmount) => {
    const updateAmount = { ...amount, [id]: newAmount };
    setAmount(updateAmount);
  };

  useEffect(() => {
    // Calculate the total price based on item prices and quantities
    let totalPrice = 0;
    info.forEach((item) => {
      const quantity = amount[item.id] || 0;
      totalPrice += item.price * quantity;
    });
    setPrice(totalPrice);
  }, [info, amount]);

  const handleRemove = (id) => {
    const updatedInfo = info.filter((item) => item.id !== id);
    setInfo(updatedInfo);
  };
  const handleBuy=()=>{
    if(price <= 0){
      return toast.error("Please purchase something.");
    }else{
      return navigate('/buy')
    }
  }

  return (
    <div className="p-4 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font4 font-bold mb-4">Your Cart</h2>
        <h2 className="font4">Total: {price}</h2>
      </div>
      <div>
        {info.length > 0 ? (
          info.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start justify-between mb-4 rounded shadow-xl shadow-neutral-400 p-4 bg-gray-100">
              <div className="sm:flex items-center space-x-4 font4">
                <img src={item.img} alt={item.name} className="w-32 h-32 object-cover rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold font1">{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Type: {item.type}</p>
                </div>
              </div>

              <div className="flex items-center sm:space-x-2 space-y-2 sm:space-y-0 font4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, (amount[item.id] || 0) - 1)}
                    className="w-7 h-7 border-2 border-gray-500 text-xl flex items-center justify-center"
                  >
                    -
                  </button>
                  <button className="w-7 h-7 border-2 border-gray-500 text-xl flex items-center justify-center">
                    {amount[item.id] || 1}
                  </button>
                  <button
                    onClick={() => handleQuantityChange(item.id, (amount[item.id] || 0) + 1)}
                    className="w-7 h-7 border-2 border-gray-500 text-xl flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="text-xl font-bold">Price: {item.price * (amount[item.id] || 1)}</p>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="border-2 text-white px-2 py-1 rounded-md bgcolor1"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg">Your cart is empty. Please add products to your cart.</p>
        )}
        <div className="flex font4 flex-col sm:flex-row items-center sm:justify-end sm:space-x-2 text-2xl font-bold">
          <h1 className="">Total price of your cart: </h1>
          <h2 className=" txt1 sm:mt-0 mt-4">Rs- {price}</h2>
          <button onClick={handleBuy} className="bgcolor1 px-2 py-1 text-white rounded-md">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

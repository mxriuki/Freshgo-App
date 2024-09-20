import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Buy() {
    const navigate = useNavigate();

    const handleButton = () => {
        setTimeout(() => {
            navigate('/home');
        }, 2000);
        navigate('/home');
    };

    return (
        <div className="min-h-screen w-3/4 md:w-2/3 m-auto flex items-center justify-center from-blue-200">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full sm:w-96 transform transition-transform duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                   Thank you for your Purchase 🎉
                </h2>
                <p className="text-lg text-center mb-6 text-gray-600">
                    Your order has been confirmed. We hope you enjoy your products! 🛍️
                </p>
                <div className="text-center">
                    <button 
                        onClick={handleButton} 
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
                        aria-label="Continue Shopping"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Buy;


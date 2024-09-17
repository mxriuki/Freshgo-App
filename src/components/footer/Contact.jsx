import { useState } from "react";
import React from "react";
import news from "../assets/bgcontact.jpg";

function Contact() {
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <div id="contact" className="flex flex-col items-center bg-white py-3">
      <div className="relative">
        <img src={news} alt="" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center font-bold text-center">
            <label className="txt1 font1 text-xl">NEWSLETTER</label>
            <label className="text-center">
              Subscribe to the weekly newsletter for all the latest updates
            </label>
          </div>
        </div>
      </div>
      <div className="bg-white relative xl:-top-32">
        {subscribed ? (
          <div>Thank you for subscribing</div>
        ) : (
          <form className="flex space-x-2" onSubmit={handleSubmit}>
            <input
             
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent shadow-xl py-1 font4 px-2 border rounded focus:outline-none"
            />
            <button className="bgcolor1  text-white px-4 py-2 rounded-lg shadow-xl">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import Contact from "./Contact";

function Footer() {
  return (
    <div>
      <Contact />
      <footer className="bg-green-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold">FreshGo Grocery</p>
          <p className="text-sm">Your One-Stop Grocery Shop</p>
          <div className="mt-4">
            <p>&copy; 2023 FreshGo Grocery </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

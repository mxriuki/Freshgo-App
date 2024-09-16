import React from "react";
import { Link } from "react-router-dom";
import { BsFillBasketFill } from "react-icons/bs";


function Navbar({info}) {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-white p-2 ">
      <div className="text-center md:text-left mb-2 md:mb-0 font4 navbarcolor">
        <h1 className="text-xl font-semibold font4 ">FreshGo</h1>
        <p className=" font3 txt1">Fresh Stores</p>
      </div>
      <ul className="flex space-x-4 font1">
        <li><a href="#home" className=" hover:text-blue-300 transition-colors duration-300">Home</a></li>
        <li className="hover:text-blue-300 transition-colors duration-300"> <a href="#pd"> Products</a> </li>
        <li><a href="#blog" className=" hover:text-blue-300 transition-colors duration-300">Blog</a></li>
        <li><a href="#contact" className=" hover:text-blue-300 transition-colors duration-300">Contact</a></li>
      </ul>
    <div className="flex items-center mt-2 md:mt-0 space-x-4 text-black">
      <div className="text-2xl justify-center flex flex-col"> <span className="bgcolor1 rounded-full text-center text-base text-white">{info.length}</span> <Link to='/cart'> <BsFillBasketFill /></Link>   </div>
    </div>
  </nav>

  );
}

export default Navbar;

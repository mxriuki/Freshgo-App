import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/bg3.jpg';

function Header() {
  return (
    <div 
      className="bg-white flex flex-col md:flex-row p-6 md:p-32 h-auto md:h-screen font-bold text-xl justify-between bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex flex-col items-start space-y-8 md:w-1/2">
        <h1 className="text-2xl md:text-4xl font3 txt1">Delivery in 24h</h1>
        <div className="text-3xl md:text-6xl flex flex-col">
          <label>Organic Food</label>
          <label>EveryDay</label>
        </div>
        <div className="md:w-96 font4">
          Order today and receive your package within 24 hours by FreshGo
        </div>
        <button className="bgcolor1 text-white rounded-lg px-4 py-2 font4 w-1/2 md:w-1/2">
          <Link to='/cart'>Purchase Now</Link>
        </button>
      </div>
      <div className="md:w-1/2"></div>
    </div>
  );
}

export default Header;

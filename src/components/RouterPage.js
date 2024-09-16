import React from "react";
import Header from './header/Header';
import InfoContainer from './infoContainer/InfoContainer';
import MainContainer from './mainContainer/MainContainer';
import Navbar from './navbar/Navbar';
import ProductContainer from './Products/ProductContainer';
import News from './Blogs/News'
import Offer from './offer/Offer';
import Footer from './footer/Footer';

function Router({handleInfo,info}) {
  return (
    <div className="bg-gray-200">
      <Navbar info={info} />
      <Header />
      <MainContainer />
      <ProductContainer handleInfo={handleInfo}/>
      <InfoContainer />
      <News />
      <Offer />
      <Footer />
    </div>
  );
}

export default Router;

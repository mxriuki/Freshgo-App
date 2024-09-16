import './App.css';
import '././components/style.css'
import { Route, Routes } from 'react-router-dom';
import RouterPage from './components/RouterPage';
import Cart from './components/cart/Cart'
import { useState } from 'react';
import Buy from './components/AfterPurchase/Buy';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

function App() {
  const[info,setInfo]=useState([])
  const handleInfo=(item)=>{
    setInfo(item)
  }
  return (
    <div className="overflow-x-hidden">
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path='/' element={<RouterPage handleInfo={handleInfo} info={info}/>} />
        <Route path='cart' element={<Cart info={info} setInfo={setInfo} />} />        
        <Route path='buy' element={<Buy/>} />      
      </Routes>
      
    </div>
  );
}

export default App;

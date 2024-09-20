
import './App.css';
import './components/style.css';
import { Route, Routes } from 'react-router-dom';
import RouterPage from '../src/components/RouterPage';
import Cart from './components/cart/Cart'
import { useState } from 'react';
import Buy from './components/AfterPurchase/Buy';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Recipes from './components/recipes/recipes';
import NotFound from './components/404/404';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

function App() {
  const[info,setInfo]=useState([])
  const handleInfo=(item)=>{
    setInfo(item)
  }
  return (
    <div className="overflow-x-hidden">
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route path='/logout' element={<Logout/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<RouterPage handleInfo={handleInfo} info={info}/>} />
        <Route path='cart' element={<Cart info={info} setInfo={setInfo} />} />        
        <Route path='buy' element={<Buy/>} /> 
        <Route path='recipes' element={<Recipes/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
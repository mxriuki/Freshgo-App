import React, { useState, useEffect } from 'react'
import Fruits from './ptype/Fruits'
import Organic from './ptype/Organic'
import Others from './ptype/Others'
import Vegetables from './ptype/Vegetables'
import { Link } from 'react-router-dom'


function ProductContainer({ handleInfo }) {
    const [toggle, setToggle] = useState(1)
    const [cartdata, setCartData] = useState([])
    const handleToggle = (index) => {
        setToggle(index)
    }
    const handleCartData = (item) => {
        // Check if the item is already in cartdata
        console.log(item)
        if (!cartdata.some((cartItem) => cartItem.name === item.name)) {
            setCartData([...cartdata, item]);
        }
    };
    useEffect(() => {
        handleInfo(cartdata);

    },)


    return (
        <div id='pd' className='flex flex-col items-center py-5'>
            <div className='flex  items-center '>
                <label className='font-bold text-2xl'> <span className='txt1'>Featured</span> Products </label>
                
            </div>
            <div className='flex items-center space-x-3 mt-4'>
                <label onClick={() => handleToggle(1)}>Organic</label>
                <label onClick={() => handleToggle(2)}>Fruits</label>
                <label onClick={() => handleToggle(3)}>Vegetables</label>
                <label onClick={() => handleToggle(4)}>Others</label>
                <label className='font-semibold txt1'><Link to='/cart'> Go to Cart</Link></label>
            </div>
            <div>
                <label className={`${toggle === 1 ? 'visible' : 'hidden'}`}> <Organic handleCartData={handleCartData} /> </label>
                <label className={`${toggle === 2 ? 'visible' : 'hidden'}`}> <Fruits handleCartData={handleCartData} /> </label>
                <label className={`${toggle === 3 ? 'visible' : 'hidden'}`}> <Vegetables handleCartData={handleCartData} /> </label>
                <label className={`${toggle === 4 ? 'visible' : 'hidden'}`}> <Others handleCartData={handleCartData} /> </label>
                
            </div>
        </div>
    )
}

export default ProductContainer
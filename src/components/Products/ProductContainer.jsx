import { useState, useEffect } from 'react';
import Fruits from './ptype/Fruits';
import Organic from './ptype/Organic';
import Others from './ptype/Others';
import Vegetables from './ptype/Vegetables';
import { Link } from 'react-router-dom';

function ProductContainer({ handleInfo }) {
    const [toggle, setToggle] = useState(1);
    const [cartdata, setCartData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleToggle = (index) => {
        setToggle(index);
    };

    const handleCartData = (item) => {
        if (!cartdata.some((cartItem) => cartItem.name === item.name)) {
            setCartData([...cartdata, item]);
        }
    };

    useEffect(() => {
        handleInfo(cartdata);
    }, [cartdata, handleInfo]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter function based on the search query
    const filterProducts = (products) => {
        return products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <div id='pd' className='flex flex-col items-center py-5'>
            <div className='flex items-center'>
                <label className='font-bold text-2xl'>
                    <span className='txt1'>Featured</span> Products
                </label>
            </div>
            <div className='flex items-center space-x-3 mt-4'>
                <button onClick={() => handleToggle(1)}>Organic</button>
                <button onClick={() => handleToggle(2)}>Fruits</button>
                <button onClick={() => handleToggle(3)}>Vegetables</button>
                <button onClick={() => handleToggle(4)}>Others</button>
                <label className='font-semibold txt1'>
                    <Link to='/cart'> Go to Cart</Link>
                </label>
            </div>
            <div className='mt-4'>
                <input
                    type='text'
                    placeholder='Search products...'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className='border rounded p-2'
                />
            </div>
            <div className='mt-4'>
                {toggle === 1 && <Organic handleCartData={handleCartData} filterProducts={filterProducts} />}
                {toggle === 2 && <Fruits handleCartData={handleCartData} filterProducts={filterProducts} />}
                {toggle === 3 && <Vegetables handleCartData={handleCartData} filterProducts={filterProducts} />}
                {toggle === 4 && <Others handleCartData={handleCartData} filterProducts={filterProducts} />}
            </div>
        </div>
    );
}

export default ProductContainer;

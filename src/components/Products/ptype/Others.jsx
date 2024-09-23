import React from 'react';
import Cards from '../Cards';
import data from '../data';

function Others({ handleCartData, filterProducts }) {
    const dataItem = data.filter((item) => item.type2 === 'others');

    // Filter the dataItem using the filterProducts function
    const filteredOthers = filterProducts(dataItem);

    return (
        <div>
            <Cards data={filteredOthers} handleCartData={handleCartData} />
        </div>
    );
}

export default Others;

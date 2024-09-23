import data from "../data";
import Cards from '../Cards';

function Organic({ handleCartData, filterProducts }) {
    const dataItem = data.filter((item) => item.type2 === 'organic');
    
    // Filter the dataItem using the filterProducts function
    const filteredOrganic = filterProducts(dataItem);

    return (
        <div>
            <Cards data={filteredOrganic} handleCartData={handleCartData} />
        </div>
    );
}

export default Organic;

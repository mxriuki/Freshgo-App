import data from "../data";
import Cards from '../Cards';

const Fruits = ({ handleCartData, filterProducts }) => {
  const dataitem = data.filter((item) => item.category === 'fruits');
  
  // Filter the dataitem using the filterProducts function
  const filteredFruits = filterProducts(dataitem);

  return (
    <div className="">
      <Cards data={filteredFruits} handleCartData={handleCartData} />
    </div>
  );
};

export default Fruits;


import data from "../data";
import Cards from '../Cards';

const Fruits = ({handleCartData}) => {
  const dataitem = data.filter((item)=>item.category==='fruits')
  return (
    <div className=" ">
      <Cards data={dataitem}  handleCartData={handleCartData}/>
    </div>
  );
};


export default Fruits;

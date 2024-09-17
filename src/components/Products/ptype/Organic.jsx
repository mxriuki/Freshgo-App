import data from "../data";
import Cards from '../Cards';

function Organic({handleCartData}) {
    const dataItem = data.filter((item)=> item.type2==='organic')
  return (
    <div>
        <Cards data={dataItem} handleCartData={handleCartData}/>
    </div>
  )
}

export default Organic
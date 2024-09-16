import React from 'react'
import Cards from '../Cards'
import data from '../data'

function Others({handleCartData}) {
    const dataItem = data.filter((item)=>item.type2==='others') 
  return (
    <div>
        <Cards data={dataItem} handleCartData={handleCartData}/>
    </div>
  )
}

export default Others;
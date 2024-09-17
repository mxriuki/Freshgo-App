import {useState} from 'react'
import pic3 from "../assets/milk.jpg";

function Milk() {
    
  
  const[showDetails2,setShowDetails2] = useState(true)
  const handlerShow2 = ()=>{
    setShowDetails2(!showDetails2)
  }
  return (
    <div className="relative text-white">
      <img src={pic3} className="h-full rounded-xl " alt="Pure Milk" />
      <div className="absolute top-0 md:top-10 right-0 text-right p-2 md:p-4">
        <div className="flex flex-col space-y-2 items-end">
          <label className="text-2xl md:text-5xl font-bold">Pure Milk</label>
          {!showDetails2 && (
            <div className="text-lg hidden md:block">
              <p>Indulge in the creamy richness of our pure milk, a dairy delight sourced from the heart of nature, delivering pure goodness in every sip. Experience unparalleled freshness and taste with every glass.</p>
            </div>
          )}
          <button
            onClick={handlerShow2}
            className="border border-gray-500 rounded-xl px-4 py-1 bg-green-500 hidden md:block"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Milk
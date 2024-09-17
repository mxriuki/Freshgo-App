import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCartPlus } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

const Cards = ({ data,handleCartData }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of visible cards as needed
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const[cart,setCart]=useState([])
  const handleClick =(item)=>{
    cart.push(item)
    handleCartData(item)
  }

  return (
    <div  className="container  w-screen  py-8 ">
      <div className="overflow-hidden px-14 focus:outline-none">
        <Slider {...settings}>
          {data.map((data, index) => (
            <CardItems data={data} key={index} handleClick={handleClick}/>
          ))}
        </Slider>
      </div>
    </div>
  );
};

function CardItems({ data,handleClick }) {
  const [like, setLike] = useState(false);
  const handleLike = (e) => {
    e.stopPropagation();
    setLike(!like);
  };
  const handleButton=()=>{
    handleClick(data)
  }
  
  return (
    <div onClick={(e) => e.stopPropagation()} className="flex flex-col i border p-4 m-2 w-64 bg-white hover:scale-105 transition-all">
      <div className="h-52 ">
        <img src={data.img} className="w-60 " alt={data.name} />
      </div>
      <div className="flex flex-col items-start text-xl">
        <label className="font-bold txt1 italic">{data.category}</label>
        <label className="font-bold text-gray-800 mt-2">{data.name}</label>
        <label className="text-[#f6a64d] font-bold">{data.price}</label>
        <div className="flex w-full justify-between items-center mt-3 text-base">
          <button onClick={handleButton} className="flex border border-gray-300 rounded-2xl items-center space-x-2 px-2 py-1 btn ">
            <FaCartPlus /> <span>Add to Cart </span>
          </button>
          {like ? (
            <button onClick={handleLike} className="text-red-600 text-2xl ">
              <BsFillHeartFill />
            </button>
          ) : (
            <button onClick={handleLike} className="text-3xl">
              <AiOutlineHeart />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cards;

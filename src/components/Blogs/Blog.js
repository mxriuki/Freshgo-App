import {useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import newsData from "./newsData";

const Blog = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust the number of visible cards as needed
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

  return (
    <div id='blog' className="container mx-auto py-8">
      <div className="overflow-hidden px-10 focus:outline-none">
        <Slider {...settings}>
        {newsData.map((newsItem, index) => (
        <div key={index} className='w-80 rounded-b-2xl px-2'>
          <img src={newsItem.img} className="rounded-t-2xl saturate-150" alt="" />
          <div className="bg-white px-4 py-2 flex flex-col space-y-1 items-start rounded-b-2xl">
            <label className="txt1 font1">{newsItem.category}</label>
            <p className="txt1 font3">{newsItem.date}</p>
            <label>{newsItem.h1}</label>
            <label>{newsItem.info}</label>
            <button className="bgcolor1 text-white p-2 rounded-lg">{newsItem.btn}</button>
          </div>
        </div>
      ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;

import React, { useEffect } from 'react'
import prod1 from '../product1.png';
import prod2 from '../prod2.png';
import prod3 from '../prod3.png';
import prod4 from '../prod4.png';
import prod5 from '../prod5.png';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MoreItems = () => {

    const productItem=[
        {
            id:1,
            img:prod1,
            name:"SNEAKERS",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"120.00",
            type:"Men"
        },
        {
            id:2,
            img:prod2,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"135.00",
            type:"Women"
        },
        {
            id:3,
            img:prod3,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"146.25",
            type:"Unisex"
        },
        {
            id:4,
            img:prod4,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"130.35",
            type:"Men"
        },
        {
            id:5,
            img:prod3,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"280.00",
            type:"Unisex"
        },
        {
            id:6,
            img:prod5,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"230.00",
            type:"Unisex"
        },
        {
            id:7,
            img:prod4,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"240.00",
            type:"Women"
        },
        {
            id:8,
            img:prod2,
            name:"NIKE",
            title:"Nike Air Jordan",
            caption:"Falirues Not an Option it's a Step",
            price:"100.00",
            type:"Men"
        }
        
    ]

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#31363F" ,width:"50px" , height:"50px" , borderRadius:"50px" ,alignItems:'center' , paddingTop:"15px", paddingLeft:"15px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#31363F" ,width:"50px" , height:"50px" , borderRadius:"50px" ,alignItems:'center' , paddingTop:"15px", paddingLeft:"15px"}}
            onClick={onClick}
          />
        );
      }


    const [sliderSettings, setSliderSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 1,
                    slidesToScroll: 1
                });
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 2,
                    slidesToScroll: 2
                });
            } else {
                setSliderSettings({
                    ...sliderSettings,
                    slidesToShow: 3,
                    slidesToScroll: 2
                });
            }
        };

        handleResize();
        window.addEventListener('resize',handleResize);
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    }, []);
      
  return (
    // <div className="mx-auto max-w-7xl px-0 lg:px-10 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-3 xl:grid-cols-3 xl:gap-x-8 h-[500px]">
    <Slider {...sliderSettings} className="mx-auto max-w-7xl py-14 lg:px-10 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-3 xl:grid-cols-3 xl:gap-x-8 h-[500px]">
    {productItem.map(function(item){
               return(
                <>
              <div className={`relative block sm:flex-row flex flex-col rounded-lg w-full bg-[#171717] overflow-hidden border border-1 h-[400px] `}>
                    <div className="w-full pb-10 sm:pb-0 sm:h-full sm:w-full overflow-hidden">
                        <img src={item.img} alt=""className={` ${item.img===prod4?"ml-10 sm:ml-14 mb-10":"ml-0"} ${item.img===prod3 ||  item.img===prod4 || item.img===prod5 ?"mt-0 scale-[0.8] sm:scale-[1.5] sm:mt-20":"h-[250px] ml-16 sm:ml-0  sm:h-full"} `}/>
                    </div>
                    <div className="pb-1 sm:pb-5 text-left sm:text-right rounded-lg border-1 sm:space-y-4 sm:relative">
                        <h1 className="text-white font-medium hidden sm:block pt-5 sm:pr-2">{item.name}<span className="text-white text-2xl "> |</span></h1>
                        <p className="text-white text-lg font-medium pl-4 sm:pl-0 sm:pr-3">{item.title} <p className="text-white hidden sm:block text-sm">{item.caption}</p> </p>
                        <div className="flex space-x-1 pl-3 pr-2 hidden sm:flex">
                        <p className="text-white pr-2">4.0</p>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        </div>
                        <h2 className="text-white text-left pl-4">Price: <span className="text-xl">$</span>{item.price}</h2>
                        <div className="w-full justify-right px-3 space-y-1 sm:space-y-3">
                        <Link to="/Item" state={item}><button className="text-white border border-white px-3 py-2 rounded-lg w-full">Explore</button></Link>
                            <button className="text-black font-medium border border-white px-3 py-2 rounded-lg w-full bg-[#EF9A53]">Add to Cart</button>
                        </div>
                        <p className="hidden md:block text-white absolute right-24 pt-2 w-60 opacity-30 hover:opacity-60">Free Delivery by Mugiwara</p>
                    </div>
                    
                </div>
                </>
            )})}
    </Slider>
    // </div>
  )
}

export default MoreItems
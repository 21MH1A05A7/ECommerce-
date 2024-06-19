import React, { useState } from "react";

import prod1 from '../product1.png';
import prod2 from '../prod2.png';
import prod3 from '../prod3.png';
import prod4 from '../prod4.png';
import prod5 from '../prod5.png';
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Link } from "react-router-dom";

import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';
import TrimProducts from "../TrimData";
import { useContext } from "react";
import cartContext from "../Context/cartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Productcard(props){
    const posScroll = useScrollPosition();
    const context=useContext(cartContext);
    
    const {CartItems,handledata}=context;
    const handleClick=(item)=>{
        handledata(item);
        toast.success("Successfully added to cart")
    }

    return <Fade bottom><section className={`m-auto sm:mt-10 space-y-12 px-2 py-16 sm:px-6 sm:py-24 lg:max-w-10xl lg:px-8 `}>
        <div className="justify-center text-center flex items-center p-5">
            <div className="text-center px-5  px-3 pb-2 border-b border-b-black">
                <h1 className="text-bold text-5xl font-medium">Products</h1>
            </div>
        </div>
        <div className="px-0 lg:px-10 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-3 xl:grid-cols-4 xl:gap-x-8">
            {TrimProducts.map(function(item){
               return <>
              <div className={`relative block sm:flex-row flex flex-col rounded-lg w-full bg-[#171717] overflow-hidden border border-1 h-[400px] sm:h-full `}>
                    <div className="w-full pb-10 sm:pb-0 sm:h-full sm:w-full overflow-hidden">
                        <img src={item.img} alt="" className={`transition ease-in-out delay-100 ${item.img===prod4?"ml-10 sm:ml-16 hover:scale[1.75]":"ml-0"} ${item.img===prod3 ||  item.img===prod4 || item.img===prod5?"mt-0 scale-[0.8] sm:scale-[1.50] sm:mt-20 hover:scale-[1.75]":"h-[250px] ml-16 sm:ml-0  sm:h-full  hover:scale-[1.2]"}`}/>
                    </div>
                    <div className="pb-1 sm:pb-5 text-left sm:text-right rounded-lg border-1 sm:space-y-4 sm:relative">
                        <h1 className="text-white font-medium hidden sm:block pt-5 sm:pr-2">{item.name}<span className="text-white text-2xl "> |</span></h1>
                        <p className="text-white text-lg font-medium pl-4 sm:pl-0 sm:pr-3">{item.title} <p className="text-white hidden sm:block text-sm">{item.caption}</p> </p>
                        <div className="flex space-x-1 pl-3 pr-2 hidden sm:flex">
                        <p className="text-white pr-2">{item.rating}</p>
                            {[...Array(Math.round(item.rating))].map((_, index) => (
                                    <span>&#11088;</span>
                            ))}
                        </div>
                        <h2 className="text-white text-left pl-4">Price: <span className="text-xl">$</span>{item.price}</h2>
                        <div className="w-full justify-right px-3 space-y-1 sm:space-y-3">
                        <Link to="/Item" state={item}><button className="text-white border border-white px-3 py-2 rounded-lg w-full">Explore</button></Link>
                            <button className="text-black font-medium border border-white px-3 py-2 rounded-lg w-full bg-[#EF9A53]" onClick={()=>{handleClick(item)}}>Add to Cart</button>
                        </div>
                    </div>
                    {/* <p className="hidden md:block text-white absolute right-12 bottom-4 pt-2 w-60 opacity-30 hover:opacity-60">Free Delivery by Mugiwara</p> */}
                </div>
                
            </>
            })}
        </div>
        
    </section>
    
    </Fade>
}
export default Productcard;
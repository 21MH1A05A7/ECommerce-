import React from "react";
import "./App.css";
import Carcard from "./Carcard";
import background from "../background.png";
import img from "../running.png";

// B A N N E R

function Carosal(){
    return(
      
        <section className="mx-auto max-w-7xl py-2 px-2 xl:pr-10 pt-5 my-2">
            <div className='relative bg-[#171717] w-full sm:h-[34rem] rounded-2xl flex space-x-0 overscroll-auto h-fit'>
                <div className="relative">
                <div className="px-4 py-2 sm:px-14 sm:py-[2rem] tracking-tight">
                <h1 className="text-white text-5xl "><span className="text-red-500 text-7xl font-medium">D</span>iscover</h1>
                    <h1 className="text-white text-5xl"><span className="text-lime-400 text-7xl font-medium">S</span>hop</h1>
                    <h1 className="text-white text-5xl"><span className="text-red-500 text-7xl font-medium">R</span>epeat</h1>
                </div>
                <div className="px-4 sm:px-14 z-40">
                <div className="flex items-center space-x-2 "> <div><span className="text-white text-3xl">|</span></div><p className="text-white mt-2 font-medium">Crafting Dreams, One Cart at a Time.</p></div>
                        <p className="mt-2 text-white max-w-2xl -translate-x-1/6 -translate-y-1/6">Your <span className="text-lg text-">STYLE</span> journey is as unique as you are. That's why we've built a platform that empowers your evolution, bringing you the latest trends and timeless essentials under one digital roof. Discover the freedom to redefine yourself, one click at a time.</p>
                </div>
                <div className="mt-3 px-10 pb-5 mt-4 sm: space-x-8 flex sm:px-14 sm:mt-7">
                        <button className="text-white flex justify-around rounded-md border border-white px-3 py-3">Connect to Me <span className="hidden sm:block md:pl-3 text-lg">&#x27F6;</span> </button>
                        <button className="border rounded-md flex order-white text-center bg-white px-3 py-3">Connect to Me <span className="hidden sm:block pl-3 text-lg">&#x27F6;</span> </button>
                      
                </div>
                </div>
                <div className="block hidden lg:absolute right-0 lg:flex shrink-0">
                <img src={img} alt="" className="h-[30rem] pl-20 w-[50rem]"/>
                
                </div>
                <div>
<button
    class="rounded-full absolute bottom-0 h-12 w-12 right-2 top-40  md:top-60 z-[1] border-1 ring-2 ring-white flex items-center justify-center border-1  bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span class="inline-block h-8 w-8 justify-center px-1 py-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class=" w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
                </div>
            </div>
        </section>
    );
}
export default Carosal;
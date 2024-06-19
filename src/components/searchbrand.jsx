import React from "react";
import {useState} from "react";
import img from '../women.png';
import g1 from '../grl.png';
import g2 from '../grl2.png';
import nike from '../nike.png';
import gucci from '../Gucci.png';
import puma from '../puma.png';
import addidas from '../addidas.png';
import inst from '../instagram.png';
import tele from '../telegram.png';
import mail from '../mail.png';
import { useScrollPosition } from "../hooks/useScrollPosition";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { useNavigate } from "react-router-dom";

function Searchbrand(){
    const navigate=useNavigate();
    const [brand,setbrand]=useState("");
    const handleChange=(e)=>{
        setbrand(e.target.value);
    }
    const handleClick=(e)=>{
        navigate(
            '/brand',
            {
              state: {
                brand:brand
              }
            }
          )
    }
    
    return(
        <section className={`lg:px-20 lg:py-10 xl:px-40 xl:py-20`}>
        <div className="w-full h-[800px] flex justify-center p-5 sm:p-10">
            <div className="relative w-full rounded-2xl border-2 shadow-lg shadow-[#171717] block lg:flex flex-1">
                <Fade left>
                <div className="w-full sm:ml-10 sm:mt-10 sm:w-[500px] h-full space-y-5">
                    <h1 className="text-7xl font-medium px-3 sm:px-8 py-8">Shopify</h1>
                    <h1 className="text-black text-lg font-medium pl-3 sm:pl-7"><span className="text-black text-4xl">| </span>Unveil the Extraordinary</h1>
                    <p className="w-fit sm:w-[600px] pl-3 sm:pl-8">At Shopify, we pride ourselves on being curators of the extraordinary – products that transcend utility and become extensions of your identity. Join us in celebrating the exceptional in every aspect of your life.</p>
                    <div className="pt-7 sm:pt-10 px-1 sm:px-0 flex sm:w-[550px] space-x-2">
                        <input type="text" placeholder="Search your brand" className="sm:ml-6 p-2 w-full border focus:outline-none ring-1 rounded-full " onChange={handleChange}/>
                        <button className="px-4 border border-black rounded-full bg-[#EF9A53]" onClick={handleClick}>Check</button>
                    </div>
                    <div className="flex flex-row px-3 sm:px-0 sm:ml-6 space-x-5 sm:pt-4">
                        <a href="" className="rounded-full border-[2px] border-black p-2 bg-[#CCC8AA]"><img src={nike} name="Nike" alt="" className="w-10 rounded-full"/></a>
                        <a href="www.nike.com" className="rounded-full border-[2px] border-black p-2 bg-[#CCC8AA]"><img src={gucci} name="Gucci" alt="" className="w-10 mt-2"/></a>
                        <a href="www.nike.com" className="rounded-full border-[2px] border-black p-2 bg-[#CCC8AA]"><img src={puma} alt="" name="Puma" className="w-10 mt-1 rounded-full"/></a>
                        <a href="www.nike.com" className="rounded-full border-[2px] border-black p-2 bg-[#CCC8AA]"><img src={addidas} alt="" className="w-10 mt-1 rounded-full"/></a>
                    </div>
                    
                </div>

                <div className="flex space-x-6 z-[10] sm:space-x-0 sm:block absolute space-y-0 sm:space-y-4 right-[100px] bottom-36 sm:right-10 sm:top-14">
                    <img src={mail} alt="" className="sm:block w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                    <img src={tele} alt="" className="sm:block w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                    <img src={inst} alt="" className="sm:block w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                    
                </div>
                </Fade>
                <Fade right><img src={g2} alt="" className="hidden 2xl:block w-[1150px] h-[850px] ml-3 mt-[63px]"/> </Fade>
            </div>

        </div>

        </section>
    )
}
export default Searchbrand;
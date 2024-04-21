import React from 'react'
import { useLocation } from 'react-router-dom';
import luffy from '../luffy.png';
import shoe from '../shoe.png';
import girl from '../grl.png';
import img from "../ItemShoe.png";
import img2 from "../Item3.png";
import { RadioGroup } from '@headlessui/react';
import Header from './Header';
import MoreItems from './MoreItems';
import Footer from './footer';
const Item = (props) => {
    const location = useLocation();
    const data=location.state;
    // console.log(typeof(data.img));
    return (
<>  
      {/* <Header></Header> */}
        <div className="mx-auto mt-14 max-w-2xl sm:px-2 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-72">
        
          <div className="rounded-lg lg:block sm:w-[600px] md:pl-10">
            <div className='inline-flex items-center space-x-2 sm:space-x-10 '>
            <a href="/" className=""><img
                    className="h-10 w-10 ml-4 sm:ml-0"
                    src={luffy}
                    alt="Your Company"
                  /></a>
          <p className='px-2 sm:px-0'>/ {data.type} / Shoes</p> 
            </div>
            <img
              src={data.img}
              className={`${data.img==="/static/media/prod4.c6ac623ca67e736e2f80.png" ? "" : "w-full h-full object-cover object-center"}`}
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="w-full h-[300px] overflow-hidden rounded-lg border-2">
              <img
                src={img}
                className="h-full w-full object-cover object-center"
              />
              <button
    class="rounded-full absolute bottom-0 h-12 w-12 right-[300px] top-[190px] z-[1] border-1 ring-2 ring-gray flex items-center justify-center border-2  p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span className="">
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
            <div className="w-full h-[300px] overflow-hidden rounded-lg border-2">
              <img
                src={img2}
                className="h-full w-full object-cover object-center"
              />
    <button
    class="rounded-full lg:absolute bottom-0 h-12 w-12 right-[300px] top-[525px] z-[1] border-1 ring-2 ring-gray flex items-center justify-center border-2  p-0 text-center opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:no-underline hover:opacity-90 hover:outline-none focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-te-target="#carouselExampleCaptions"
    data-te-slide="next">
    <span className="">
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
      class=" !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span >
  </button>
            </div>
          </div>

          
    </div>
            {/* Left Conten */}
            <div className='px-2 sm:px-10 mx-auto block sm:grid sm:grid-cols-2 md:max-w-7xl'>
                   <div className='md:max-w-2xl py-4 md:py-0 px-2'>
                        <div>
                            <h1 className='font-medium text-2xl py-3'>{data.name}</h1>
                            <p className=''>The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                            <h2 className='pt-4 font-medium text-1xl'>Highlights</h2>
                            <ul className="list-disc px-6 list-disc-gray">
                                <li>Hand cut and sewn locally</li>
                                <li>Dyed with our proprietary colors</li>
                                <li>Pre-washed & pre-shrunk</li>
                            </ul>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='lg:border-l max-w-2xl py-6 lg:px-14 sm:ml-16'>
                        <div>
                            <h1 className='text-3xl font-medium'>$ 190</h1>
                            <div className="flex space-x-2 py-3 ">
                                <p className=" pr-2 font-small text-lg">4.0</p>
                                <span className='text-lg'>&#11088;</span>
                                <span className='text-lg'>&#11088;</span>
                                <span className='text-lg'>&#11088;</span>
                                <span className='text-lg'>&#11088;</span>
                            </div>

                            <RadioGroup className='block space-y-3'>
                                <RadioGroup.Label className="block text-lg">Choose Your Type</RadioGroup.Label>
                                <div className='flex space-x-6'>
                                    <RadioGroup.Option className="rounded-full ml-3 h-10 w-10 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full focus:outline-none">
                                        <span
                                         aria-hidden="true"
                                        className='h-10 w-10 rounded-full border border-black border-opacity-10 bg-[#fffdd0]'
                                        />
                                    </RadioGroup.Option>
                                    <RadioGroup.Option className="rounded-full ml-3 h-10 w-10 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full focus:outline-none">
                                        <span
                                         aria-hidden="true"
                                        className='h-10 w-10 rounded-full border border-black border-opacity-10 bg-[#262626]'
                                        />
                                    </RadioGroup.Option>
                                    <RadioGroup.Option className="rounded-full ml-3 h-10 w-10 relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full focus:outline-none">
                                        <span
                                         aria-hidden="true"
                                        className='h-10 w-10 rounded-full border border-black border-opacity-10 bg-[#ff7f11]'
                                        />
                                    </RadioGroup.Option>
                                </div>
                            </RadioGroup>
                            <div className='flex md:px-4 py-6 space-x-3 md:space-x-6'>
                                <button className='px-6 md:px-10 rounded-xl font-medium py-2 md:py-4 border border-black'>Buy Now</button>
                                <button className='px-6 md:px-10 rounded-xl font-medium py-2 md:py-4 border border-black bg-[#EF9A53]'>Add to Cart</button> 
                            </div>
                        </div>
                    </div>
                    
            </div>
            <MoreItems></MoreItems>
            <Footer></Footer>
            </>
  )
}

export default Item

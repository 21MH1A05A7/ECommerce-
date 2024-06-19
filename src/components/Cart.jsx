import React, { useEffect, useState } from "react";
import prod3 from '../prod3.png';
import Header from "./Header";
import ItemShoe from "../ItemShoe.png"
import YSneakers from '../YellowSneakers.png'
import BSneakers from '../BlackSneakers.png'
// import productItem from "../data";
// import CartItems from "../CartItems";
import { useContext } from 'react';
import cartContext from "../Context/cartContext";
import luffy from "../luffy.png"
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function Cart(){
  const context=useContext(cartContext);
  const [view,setView]=useState(false);
  // console.log(context);
  const {CartItems,handledata,handleDelete}=context;
  console.log(CartItems);
  const [counts, setCounts] = useState(Array(CartItems.length).fill(1));
  const [popupdata,setpopup]=useState({});

  const handleIncrement = (index) => {
      setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] += 1;
          return newCounts;
      });
  };


  const handleDecrement = (index) => {
      setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] > 1) {
              newCounts[index] -= 1;
          }
          return newCounts;
      });
  };

  const handleDeleteClick=(item)=>{
      handleDelete(item.title);
  }


    return(
      <>
      <Header></Header>
      <div className="h-fit mx-auto w-full">
      <div className="mx-auto sm:px-2 max-w-7xl mt-[50px] sm:mt-[100px]">
            <h1 className="text-5xl pl-4 pb-4 font-[400] tracking-wider">Cart</h1>
        {CartItems && CartItems.length!=0?
            <div className="max-w-7xl p-[5px] mx-auto h-fit space-y-10">
             {CartItems.map((item,index)=>{
              return(
                <div className="relative flex sm:space-x-2">
                <div className="w-[200px] sm:w-[400px] overflow-hidden shadow-lg" style={{height:'auto'}}>
                  <img src={item.img} alt="" className="" />
                </div>
                <div className="w-fit sm:w-full pl-4 space-y-1 xl:pt-4">
                <span className="flex flex-wrap space-x-[2px]"><span className="text-lg font-medium">|</span><h1 className="font-medium text-xl items-center pt-[1px]">{item.name}</h1></span>
                  <h1 className="font-medium">{item.title}</h1>
                  <p className="hidden sm:block">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black".</p>
                  <div className="flex mx-auto space-x-2">
                    <h1 className="pt-[4px]">Price: </h1>
                    <h1 className="pb-[2px] text-2xl font-medium">${item.price}</h1>
                  </div>
                  <div class="xsm:px-2 absolute left-1 bottom-2 sm:relative sm:top-0 sm:left-0 flex space-x-2 items-center">
                    <button class="rounded-md px-4 text-2xl text-center items-center font-medium bg-[#FFAF45]"><p className="pb-[2px]" onClick={()=>{handleDecrement(index)}}>-</p></button>
                    <input type="text" name="" key={index} id="" value={counts[index]} class="w-14 text-center border border-black rounded-md" />
                    <button class="px-4 rounded-md text-2xl font-medium text-center bg-[#673F69] hover:bg-[#673F59]"><p className="pb-[2px]" onClick={()=>{handleIncrement(index)}}>+</p></button>
                  </div>
                  <i className='fas fa-truck'></i>
                  <p>Free Delivery By Mugiwara Staff</p>

                  <div className="flex space-x-2 sm:space-x-4">
                    <button className="px-3 sm:px-12 py-[10px] rounded-md bg-[#DD5746] font-medium tracking-wide" onClick={()=>{handleDeleteClick(item)}}>Delete</button>
                    <button className="px-3 sm:px-12 py-[10px] rounded-md border border-black bg-[#AFD198]" onClick={()=>{setView(true); setpopup(item);}}>Buy Now</button>
                    {view && (
                        <div key={index} class="relative z-10 " role="dialog" aria-modal="true">
                          
                          <div class="fixed inset-0 sm:h-screen hidden bg-gray-400 bg-opacity-40 transition-opacity md:block"></div>

                          <div class="fixed inset-0 sm:z-10 md:w-screen overflow-y-auto">
                            <div class="flex sm:mt-40 md:mt-0 md:min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            
                              <div class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                <div class="relative flex w-full rounded-lg items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                  <button type="button" class="hidden sm:block absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
                                    <span class="sr-only" onClick={()=>{setView(false)}}>Close</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" onClick={()=>{setView(false)}}>
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" onClick={()=>{setView(false)}}/>
                                    </svg>
                                  </button>

                                  <div class="grid w-full grid-cols-1 items-start gap-x-6 gap-y-2 md:gap-y-8 sm:grid-cols-12 lg:gap-x-4">
                                    <div class="h-full overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                      <img src={popupdata.img} alt="Two each of gray, white, and black shirts arranged on table." class="object-cover object-center" className=" mt-14 scale-[1.2]"/>
                                    </div>
                                    <div class="sm:col-span-8 lg:col-span-7">
                                      <h2 class="text-2xl font-bold text-gray-900 sm:pr-12">{popupdata.title}</h2>

                                      <section aria-labelledby="information-heading" class="mt-2">
                                        <h3 id="information-heading" class="sr-only">Product information</h3>

                                        <p class="text-2xl text-gray-900">${popupdata.price}</p>

                                      
                                        <div class="mt-6">
                                          <h4 class="sr-only">Reviews</h4>
                                          <div class="flex items-center">
                                            <div class="flex items-center">
                                            {[...Array(Math.round(popupdata.rating))].map((_, index) => (
                                                            <svg class="text-gray-900 h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                                                          </svg>  
                                            ))}

                                            </div>
                                            <p class="sr-only">3.9 out of 5 stars</p>
                                            <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                                          </div>
                                        </div>
                                      </section>

                                      <section aria-labelledby="options-heading" class="mt-10">
                                        <h3 id="options-heading" class="sr-only">Product options</h3>

                                        <form>

                                          <div>
                                            <h4 class="text-sm font-medium text-gray-900">Color</h4>

                                            <fieldset class="mt-4">
                                              <legend class="sr-only">Choose a color</legend>
                                              <span class="flex items-center space-x-3">
                                                
                                              <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2">
                                                <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                <span id="color-choice-0-label" class="sr-only">White</span>
                                                <span aria-hidden="true" class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10 focus:ring-1"></span>
                                              </label>

                                                
                                              <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                                                  <input type="radio" name="color-choice" value="Gray" class="sr-only" aria-labelledby="color-choice-1-label" />
                                                  <span id="color-choice-1-label" class="sr-only">Gray</span>
                                                  <span aria-hidden="true" class="h-8 w-8 bg-gray-200 rounded-full border border-black border-opacity-10"></span>
                                              </label>
                                  
                                              <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 outline-none ring-gray-900 ring-2    " >
                                                  <input type="radio" name="color-choice" value="Black" class="sr-only" aria-labelledby="color-choice-2-label" />
                                                  <span id="color-choice-2-label" class="sr-only">Black</span>
                                                  <span aria-hidden="true" class="h-8 w-8 bg-gray-900 rounded-full border border-black border-opacity-10"></span>
                                              </label>
                                              
                                              </span>
                                            </fieldset>
                                          </div>

                                        
                                          <div class="mt-10">
                                            <div class="flex items-center justify-between">
                                              <h4 class="text-sm font-medium text-gray-900">Size</h4>
                                              <a href="https://apexfoot.com/shoe-sizing-chart/" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                                            </div>

                                            <fieldset class="mt-4">
                                              <legend class="sr-only">Choose a size</legend>
                                              <div class="grid grid-cols-4 gap-4">

                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 outline-none ring-1 ring-offset-2 sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                  <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                                  <span id="size-choice-2-label">S</span>

                                                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                </label>

                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                  <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label" />
                                                  <span id="size-choice-3-label">M</span>

                                                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                </label>
                                              
                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                  <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label" />
                                                  <span id="size-choice-4-label">L</span>
                            
                                                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                </label>
                                              
                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                  <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label" />
                                                  <span id="size-choice-5-label">XL</span>

                                                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                </label>
                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-pointer bg-white text-gray-900 shadow-sm">
                                                  <input type="radio" name="size-choice" value="XXL" class="sr-only" aria-labelledby="size-choice-6-label" />
                                                  <span id="size-choice-6-label">XXL</span>
                                                  <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                                                </label>

                                                <label class="group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 cursor-not-allowed bg-gray-50 text-gray-200">
                                                  <input type="radio" name="size-choice" value="XXXL" disabled class="sr-only" aria-labelledby="size-choice-7-label" />
                                                  <span id="size-choice-7-label">XXXL</span>
                                                  <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                                                    <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                      <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                                    </svg>
                                                  </span>
                                                </label>
                                              </div>
                                            </fieldset>
                                          </div>
                                            <div className="flex space-x-3 justify-around">
                                            <button class="mt-6 flex w-[170px] sm:w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Place Order</button>
                                            <button class="md:hidden sm:block mt-6 flex w-[170px] sm:w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={()=>{setView(false)}}>Close</button>
                                          </div>
                                        </form>
                                      </section>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                  )}
                  </div>

                </div>
                
              </div>
              
              )})}
            </div>
          :<div className='h-[500px] max-w-7xl px-2 py-28 sm:mx-auto'>
             <div className='w-fit sm:w-[400px] max-w-7xl block text-center mx-auto'>
                <img src={luffy} alt="" className='mx-auto w-[50px] '/>
                <h1 className='font-medium'>Data Not Found</h1>
                <h1>We are in Hurry to Look For new Products . Meanwhile Try our latest deals</h1>
            </div>
        </div>}
        </div>
      </div>
      </>
    );
}
export default Cart;
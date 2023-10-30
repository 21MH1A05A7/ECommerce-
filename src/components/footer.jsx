import React from "react";
import tele from '../tele.png';
import dribble from '../dribble.png';
import inst from '../inst.png';

function Footer(){
    return(
            <div className="relative overflow-hidden bg-[#171717] py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                  <div className="max-w-lg">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Subscribe to our Shopify.</h2>
                    <p className="mt-4 text-lg leading-8 text-gray-300">
                    Shopify, where we believe that shopping should be more than just a transaction; it should be an experience filled with excitement, discovery, and satisfaction. Dive into our meticulously curated selection of products, handpicked to elevate your everyday life, and embark on a journey of style, quality, and convenience.
                    </p>
                    <div className="mt-6 flex max-w-md gap-x-4">
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-full border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-full bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                    <div className="flex flex-col items-start">
                      <dt className="mt-4 font-semibold text-white">Quality</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      At Shopify, quality isn't just a standard, it's our relentless pursuit. We pour our passion and expertise into every Porduct we Sell.
                      </dd>
                    </div>
                    <div className="flex flex-col items-start">
                      <dt className="mt-4 font-semibold text-white">Delivery</dt>
                      <dd className="mt-2 leading-7 text-gray-400">
                      At Shopify, we understand that time is precious. That's why we've made fast delivery a cornerstone of our commitment to you. Our streamlined processes and dedicated team work tirelessly to ensure your orders reach your doorstep swiftly.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="mx-auto max-w-sm px-20 py-14 text-center">
                <p className="text-white font-medium">Contact Us</p>
                <div className="mx-auto pt-2 px-5 sm:px-12 flex space-x-4">
                    <img src={dribble} alt="" className=" w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                    <img src={tele} alt="" className=" w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                    <img src={inst} alt="" className=" w-[30px] h-[30px] opacity-30 transition delay-30 hover:opacity-80"/>
                </div>
                <p className="text-white pt-7">@copyright Mugiwara</p>
            </div>
            </div>
          )
}


export default Footer;
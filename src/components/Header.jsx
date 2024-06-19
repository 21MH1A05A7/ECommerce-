import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import luffy from '../luffy.png';
import { Disclosure,Menu,Transition } from '@headlessui/react';
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline';
import profile from '../profile.png';
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

function Header(props){
  const navigate=useNavigate();

  const scrollPosition = useScrollPosition();


  const [position,setposition]=useState(0);

  const scrollToPosition = (val) => {
    // Replace 'x' and 'y' with the coordinates you want to scroll to
    window.scrollTo({
      top: val, // specify the y-coordinate
      left: 0, // specify the x-coordinate
      behavior: 'smooth' // smooth scrolling
    });
  };  
  return(
      <>
      <Disclosure as="nav" className={`sticky top-0 z-50 bg-white transition ease-in-out duration-300 ${
        scrollPosition>0 ? "drop-shadow-lg":"drop-shadow-none"
      }`}>
        {({open}) =>(
          <>
          <div className="w-screen-full bg-grey">
          <div className="mx-auto flex w-full h-20 sm:items-stretch">
            <div className="absoulte inset-y-0 left-0 sm:hidden">
            <Disclosure.Button className="relative items-center justify-center rounded-md p-2 focus:ring-inset mt-3 focus:outline-none focus:ring-2 focus:ring-black">
              <div className="">
                {open ?<XMarkIcon className="w-10 h-10 block"></XMarkIcon>:<Bars3Icon className="w-10 h-10"></Bars3Icon>
                }
              </div>
            </Disclosure.Button>
            </div>
            <div className="flex flex-1 sm:ml-20 xl:pl-60 items-center justify-center sm:items-stretch pr-10 sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a className=""><img
                    className="h-10 w-10"
                    src={luffy}
                    alt="Your Company"
                  onClick={()=>{scrollToPosition(0)}}/></a>
                  
                </div>
            <div className="hidden lg:ml-40 sm:flex sm:ml-20 justify-around items-center">
              <div className="flex lg:space-x-6 md:space-x-2">
                <a className="p-4 text-bold "><a className="hover:text-semibold p-1 hover:border-b-2 border-b-black cursor-pointer" onClick={()=>{scrollToPosition(0)}}>Home</a></a>
                <a className="p-4 "><p className="hover:text-semibold p-1 hover:border-b-2 border-b-black cursor-pointer" onClick={()=>{scrollToPosition(600)}}>Offers</p></a>
                <a  className="p-4"><p className="hover:text-semibold p-1  hover:border-b-2 border-b-black cursor-pointer" onClick={()=>{scrollToPosition(1200)}}>Products</p></a>
                <a  className="p-4"><p className="hover:text-semibold p-1  hover:border-b-2 border-b-black cursor-pointer" onClick={()=>{scrollToPosition(2400)}}>Brands</p></a>
                <a  className="p-4"><p className="hover:text-semibold p-1  hover:border-b-2 border-b-black cursor-pointer" onClick={()=>{navigate('/cart')}}>Cart</p></a>
              </div>
          </div>
            <div className="hidden 2xl:flex absolute inset-y-0 right-0 flex items-center xl:static xl:ml-20 xl:px-10 border-black">
              <input type="" className="rounded border border-grey text-left pl-2 py-2 w-60 focus:outline-none focus:ring-1" placeholder="Search your Brand"/>
                
            </div>
            <div className="hidden lg:flex w- lg:absoulte p-4 left-60 ml-10">
            <button className="bg-black text-white px-3 py-2 rounded w-20 hover:bg-white hover:text-black hover:border border-black hover:font-semibold"><Link to="/login">
                Login
                </Link>
              </button>
              <button className="ml-4 px-3 py-2 rounded w-20 hover:rounded-0 hover:border hover:border-black"><Link to="/Signup">
                SignUp</Link>
              </button>
            </div>
            <Menu>
              <div>
                <Menu.Button className="">
                <img src={profile} alt="" className="lg:hidden xl:block w-8 h-8 sm:block absolute inset-y-5 right-4 md:block absolute inset-y-5 right-15"/>
                </Menu.Button>
              </div>
              <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
              <Menu.Items as="div" className="absolute right-10 top-0 z-10 mt-16 w-20 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div>
                <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-black  hover:text-bold"
                          >
                          Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className= 'block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-black  hover:text-bold'
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700  hover:bg-gray-200 hover:text-black  hover:text-bold"
                          >
                          Orders
                          </a>
                        )}
                      </Menu.Item>
                </div>
              </Menu.Items>
              </Transition>
            </Menu>
            </div>
          </div>  
        </div>
        <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
        <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <Disclosure.Button
                  className='w-full bg-black text-white hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  className='w-full bg-black text-white text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  className=
                    'w-full bg-black text-white text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  Men
                </Disclosure.Button>
                <Disclosure.Button
                  className=
                    'w-full bg-black text-white text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  Women
                </Disclosure.Button>
                <Disclosure.Button
                  className=
                    'w-full bg-black text-white text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  Login
                </Disclosure.Button>
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
        )}
        
      </Disclosure>
      </>
    )
}

export default Header;
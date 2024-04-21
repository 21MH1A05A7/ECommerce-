import React, { useEffect } from 'react';
import { useState } from 'react';

import Header from './Header';
import Carosal from './Carosal';
import Card from './Card';
import Productcard from './Prouductcard';
import Searchbrand from './searchbrand';
import About from './About';
import Count from './count';
import Footer from './footer';
import { useRef } from 'react';
import { ClimbingBoxLoader } from 'react-spinners';

function Home(){


    
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);

    setTimeout(()=>{
      setloading(false);
    },2000)
  },[])

    return(

      loading?<ClimbingBoxLoader color='#ff3600' className='mx-auto mt-[350px]'/>:
        <>
        <Header scrollToComponent={handleClick}></Header>
        <Carosal></Carosal>
        <Card></Card>
        <Productcard></Productcard>
        <Searchbrand></Searchbrand>
        
        <Count ref={ref}></Count>
        <Footer></Footer>
        </>
        
    )
}

export default Home;
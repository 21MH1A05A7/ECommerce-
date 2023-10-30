import React from 'react';
import { useState } from 'react';

import Header from './Header';
import Carosal from './Carosal';
import Card from './Card';
import Productcard from './Prouductcard';
import Searchbrand from './searchbrand';
import About from './About';
import Count from './count';
import Footer from './footer';
function Home(){
    return(
        <>
        <Header></Header>
        <Carosal></Carosal>
        <Card></Card>
        <Productcard></Productcard>
        <Searchbrand></Searchbrand>
        <About></About>
        <Count></Count>
        <Footer></Footer>
        </>
    )
}

export default Home;
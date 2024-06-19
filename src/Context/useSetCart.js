import React from 'react';
import YSneakers from '../YellowSneakers.png';
import { useState } from "react";
import cartContext from "./cartContext";
import BSneakers from "../BlackSneakers.png";
import { timeline } from '@material-tailwind/react';


function SetCart(props){
    const [CartItems,setdata]=useState([])

    const handledata=(data)=>{
        console.log(data);
        if (CartItems.some(item => item.id === data.id)) {
            console.log("Item already exists in the cart");
        }
        else{
            setdata((prevData)=>{
                const newData=[...prevData];
                console.log(newData);
                newData.push(data);
                return newData;
            })
        }
        
    }

    const handleDelete=(title)=>{
        setdata((prevData)=>{
            const newData=[...prevData];
            const data=newData.filter((item)=>{
                return item.title!==title
            })
            return data;
        })
    }


    return(
        <cartContext.Provider value={{CartItems,handledata,handleDelete}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default SetCart;
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import productItem from '../data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import prod1 from '../product1.png';
import prod2 from '../prod2.png';
import prod3 from '../prod3.png';
import prod4 from '../prod4.png';
import prod5 from '../prod5.png';
import Footer from './footer';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';
import luffy from '../luffy.png';
import {Bars3Icon} from '@heroicons/react/24/outline';
import { ClipLoader } from 'react-spinners';
import DotLoader from 'react-spinners/DotLoader';
import SyncLoader from 'react-spinners/SyncLoader';
import { useRef } from 'react';

const Brand = (props) => {
  const [loading,setloading]=useState(false);
  const ref=useRef(null);
  useEffect(()=>{
    setloading(true);
    setTimeout(()=>{
      setloading(false);
    },800)
  },[])

  const location=useLocation();
  const brand=location.state.brand;
  const [data,setproducts]=useState([])
  const [demData,setDemo]=useState([])
  const [priceChecked,setPrice]=useState({
    "70":false,
    "90":false,
    "110":false,
    "130":false,
    above:false
  });



  const [ischecked,setCheck]=useState({
    all:false,
    Nike:false,
    Gucci:false,
    Puma:false,
    Vans:false,
    sketchers:false
  });

  const navigate=useNavigate();

    useEffect(()=>{
      const result=productItem.filter((item)=> item.name===brand);
      
      setproducts(result)
    },[])
  

  // when a CATEGORY checkBox is clicked
  useEffect(()=>{
    if(ischecked.all){
      setproducts(productItem);
      setDemo(productItem);
      if(priceChecked){
        setPrice({...priceChecked})
      }
    }
    else{ 
      const checkedCategories = Object.keys(ischecked).filter(
        (key) => ischecked[key]
      );
      console.log(checkedCategories);
  
      if (checkedCategories.length === 0) {
          const arr = productItem.filter((item) => item.name === brand);
          setproducts(arr);
          setDemo(arr);
      } else {
          const filteredProducts = productItem.filter((item) =>
              checkedCategories.includes(item.name)
          );
          setproducts(filteredProducts);
          setDemo(filteredProducts);
          // setPrice({...priceChecked})
          if(priceChecked){
            setPrice({...priceChecked})
          }
        
      }
    }
    }
    ,[ischecked])

  const handleCategoryChange=(e)=>{
    const name=e.target.name;
    console.log(name);
    setCheck({...ischecked,[name]:e.target.checked})
  }



  // When the RECOMMENDED buttonns are clicked and Filter
  const handleClick=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const arr=productItem.filter((item)=>{
     return item.name===name
    })
    setproducts(arr)
  }

  // useEffect(()=>{
  //   const checkedCategories = Object.keys(priceChecked).filter(
  //     (key) => priceChecked[key]
  //   );

  //   if (checkedCategories.length === 0) {
  //     setproducts(demData);
  //   } else {
  //     var mi=1e9+7;
  //     var ma=-1e9+7;
  //     checkedCategories.forEach((item)=>{
  //       if(item-'0'<mi){
  //         mi=item-'0';
  //       }
  //       if(item-'0'>=ma){
  //         ma=item-'0';
  //       }
  //     })
  //     console.log(mi);
  //     console.log(ma);
  //     if(ma===mi){
  //       const filteredProducts = demData.filter((item) =>
  //         item.price>=mi && item.price<=mi+20
  //       );
      
  //       setproducts(filteredProducts);
  //     }
  //     else{
  //       const filteredProducts = demData.filter((item) =>
  //         item.price>=mi && item.price<=ma+20
  //       );
  //       setproducts(filteredProducts);
  //     }
  //   }
  // },[priceChecked])
  useEffect(() => {
    console.log("priceChecked:", priceChecked);
  
    const checkedCategories = Object.keys(priceChecked).filter(
      (key) => priceChecked[key]
    );
    console.log("checkedCategories:", checkedCategories);
  
    if (checkedCategories.length === 0) {
      setCheck({...ischecked})
      setproducts(demData);

    } 
    else {
      var mi = 1e9 + 7;
      var ma = -1e9 + 7;
      checkedCategories.forEach((item) => {
        if (item - '0' < mi) {
          mi = item - '0';
        }
        if (item - '0' > ma) {
          ma = item - '0';
        }
        if(item==='above'){
            ma=-1;
        } 
      });
      console.log("mi:",mi);
      console.log("ma:", ma);

      if (ma === mi) {
        const filteredProducts = demData.filter(
          (item) => item.price >= mi && item.price <= (mi + 20)
        );
        console.log("filteredProducts:", filteredProducts);
        setproducts(filteredProducts);
      } else {
        let result=[];
        checkedCategories.forEach((d)=>{
          let k=0;
          if(d!='above'){
            k=parseInt(d);
          }
          console.log(k);
          if(k!=0){
            const filteredProducts = demData.filter(
              (item) => (item.price >=k  && item.price <= (k+20))
            );
            console.log(filteredProducts);
            if(filteredProducts.length!=0){
              filteredProducts.map((item)=>{result.push(item)});
           }
          }
          else{
            const filteredProducts = demData.filter(
              (item) => (item.price >=150)
            );
            console.log(filteredProducts);
            if(filteredProducts.length!=0){
              filteredProducts.map((item)=>{result.push(item)});
           }
          }
          
          
          // console.log(result);
        })
        // console.log(result);
        // console.log("filteredProducts:", filteredProducts);
        setproducts(result);
      }
    }
  }, [priceChecked]);
  


  const handleChangePrice=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    setPrice({...priceChecked,[name]:e.target.checked});
  }

    
  return (
      loading?<SyncLoader color="#ff3600" className='w-52 text-center mx-auto mt-[400px]'/> :
    
    <>
<Disclosure className=" 2xl:block">
        {({open})=>(
          <>
          <div className='absolute w-16 inline-flex items-center left-4 top-4 flex '>
            <img src={luffy} className="px-2 mr-2" alt=""/>
            <h3 className='hidden md:block text-2xl font-serif tracking-[7px]' style={{fontFamily:"sans-serif"}}>Mugiwara</h3>
            <div className='ml-10 lg:ml-20'>
              <input type="text" name="" className='hidden sm:block md:w-96 px-4 py-2 border border-black rounded-lg' placeholder='Search Your Shoe'/>
            </div>
            
          </div>
          <div className="absoulte inset-y-0 left-0 2xl:hidden">
            <Disclosure.Button className="absolute right-0 top-0 items-center justify-center rounded-md p-2 focus:ring-inset mt-3 focus:outline-none focus:ring-2 focus:ring-black">
              <div className="">
                {open ?<XMarkIcon className="w-10 h-10 block"></XMarkIcon>:<Bars3Icon className="w-10 h-10"></Bars3Icon>
                }
              </div>
            </Disclosure.Button>
            </div>
          
          

        <div className='border-r w-[310px] h-full hidden 2xl:block lg:absolute lg:left-0 lg:top-24'>
          
        <h1 className='px-28 font-semibold text-2xl'>Filter</h1>

        <div className='flex-col w-full p-2 h--full space-y-3'>
          <h1 className='pl-7 font-semibold text-xl'>Price</h1>
          <div className='pl-4 inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='70' checked={priceChecked[70]} onChange={handleChangePrice}/>
            <p>Price 70 - 90</p>
          </div>
          <div className='pl-4 inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='90' checked={priceChecked[90]} onClick={handleChangePrice}/>
            <p>Price  90 - 110</p>
          </div>
          <div className='pl-4 inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='110' checked={priceChecked[110]} onClick={handleChangePrice}/>
            <p>Price 110 - 130</p>
          </div>
          <div className='pl-4 inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='130' checked={priceChecked[130]} onClick={handleChangePrice}/>
            <p>Price 130 - 150</p>
          </div>
          <div className='pl-4 inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='above' checked={priceChecked.above} onClick={handleChangePrice}/>
            <p>150 or Above</p>
          </div>
        </div>

        <div className='w-full p-2 space-y-3'>
          <h1  className='pl-5 font-semibold text-xl'>Rating</h1>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 4.5 - 5</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 3.5 - 4</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 2.5 - 3</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 1.5 - 2</p>
          </div>
          
        </div>
        <div className='flex-col w-full p-2 space-y-3'>
          <h1  className='pl-5 font-semibold text-xl'>Category</h1>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input ref={ref} type="checkbox" id="all" name="all" checked={ischecked.all} onClick={handleCategoryChange} />
            <p>All</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" onClick={handleCategoryChange} name='Nike' checked={ischecked.Nike}/>
            <p>Nike</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name="Gucci" checked={ischecked.Gucci} onClick={handleCategoryChange}/>
            <p>Gucci</p>
          </div>
          <div className=' pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='Puma' checked={ischecked.Puma} onClick={handleCategoryChange}/>
            <p>Puma</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='Vans' checked={ischecked.Vans} onClick={handleCategoryChange}/>
            <p>VNC</p>
          </div>
          
        </div>
        
      </div>
      <Disclosure.Panel className="mt-20 2xl:hidden max-w-7xl mx-3 xl:mx-auto border border-2 shadow-xl border-black rounded-lg overflow-hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 grid grid-col-2">
            {/* <Disclosure.Button
                  className='w-full hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'> */}
                  <h1 className='px-28 font-semibold text-2xl'>Filter</h1>
                  <div className='inline-flex w-full'>
        <div className='flex-col xl:w-[400px] p-2 h--full space-y-4'>
          <h1 className='pl-5'>Mutti</h1>
          <div className=' inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Price 70 - 90</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Price 70 - 90</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Price 70 - 90</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Price 70 - 90</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Price 70 - 90</p>
          </div>  
        </div>

        <div className='flex-col  xl:w-[400px] p-2 h-full space-y-3'>
          <h1  className='pl-5'>Rating</h1>
          <div className=' inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 4.5 - 5</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 3.5 - 4</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 2.5 - 3</p>
          </div>
          <div className='inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" />
            <p>Rating 1.5 - 2</p>
          </div>
          
        </div>
        <div className='flex-col  xl:w-[400px] p-2 h-full space-y-3'>
          <h1  className='pl-5'>Review</h1>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input ref={ref} type="checkbox" id="all" name="all" checked={ischecked.all} onClick={handleCategoryChange} />
            <p>All</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" onClick={handleCategoryChange} name='Nike' checked={ischecked.Nike}/>
            <p>Nike</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name="Gucci" checked={ischecked.Gucci} onClick={handleCategoryChange}/>
            <p>Gucci</p>
          </div>
          <div className=' pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='Puma' checked={ischecked.Puma} onClick={handleCategoryChange}/>
            <p>Puma</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='Vans' checked={ischecked.Vans} onClick={handleCategoryChange}/>
            <p>VNC</p>
          </div>
          <div className='pl-4 w-full inline-flex space-x-2 items-center ml-2'>
            <input type="checkbox" name='New Balance' checked={ischecked.sketchers} onClick={handleCategoryChange}/>
            <p>Sketchers</p>
          </div>
          
        </div>
      </div>
            {/* </Disclosure.Button> */}
                
            </div>
          </Disclosure.Panel>

      </>
        )}

        </Disclosure>
    <div className='mx-auto max-w-7xl mt-20 2xl:mt-0'>
      <div className='hidden 2xl:block max-w-sm mt-24 p-6'>
        <h2 className='text-left font-semibold text-4xl'>Recommended</h2>
        <div className='flex space-x-3 mt-8'>
          <button name='Nike' className='px-4 py-2 border rounded-md active:bg-black active:text-white focus:bg-black focus:text-white'  onClick={handleClick}>Nike</button>
          <button name='Puma' className='px-4 py-2 border rounded-md active:bg-black active:text-white focus:bg-black focus:text-white' onClick={handleClick}>Puma</button>
          <button name='Gucci' className='px-4 py-2 border rounded-md active:bg-black active:text-white focus:bg-black focus:text-white' onClick={handleClick}>Gucci</button>
        </div>
      </div>
    
    
    <div className="mx-auto px-2 max-w-7xl sm:py-10 lg:px-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-3 xl:grid-cols-3 xl:gap-x-8 h-full">
      {data && data.length>0? (data.map((item)=>{
        return(
          <>
              <div className={`relative flex-col flex rounded-lg w-full bg-[#171717] overflow-hidden border border-1 h-[500px] `}>
                    <div className="w-full pb-10 sm:pb-0 overflow-hidden">
                        <img src={item.img} alt=""className={` ${item.img===prod4?"ml-10 sm:ml-14 mb-10 sm:pl-0":"ml-0 sm:pl-24"} ${item.img===prod3 ||  item.img===prod4 || item.img===prod5 ?"mt-0 pl-0 ":"h-[250px] ml-16 sm:ml-0  sm:h-full"} `}/>
                    </div>
                    <div className='pl-6 mb-4 sm:spcae-y-3 sm:block'>
                    <span className="text-white text-2xl inline-flex"> |<h1 className="text-white font-medium sm:block sm:pt-[1px] pl-2">{item.name}</h1></span>
                        <p className="text-white text-lg font-medium  sm:pl-0 sm:pr-3">{item.title} <p className="text-white hidden sm:block text-sm">{item.caption}</p> </p>
                        <div className="flex space-x-1 pr-2 hidden sm:flex">
                        <p className="text-white pr-2">4.0</p>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        <span >&#11088;</span>
                        </div>
                        <h2 className="sm:pl-0 text-white text-left pb-2">Price: <span className="text-xl">$ </span><span className='text-2xl font-semibold'>{item.price}</span></h2>
                        <div className="w-full pr-5 space-y-3">
                        <Link to="/Item" state={item}><button className="text-white border border-white px-3 py-2 rounded-lg w-full">Explore</button></Link>
                            <button className="text-black font-medium border border-white px-3 py-2 rounded-lg w-full bg-[#EF9A53]">Add to Cart</button>
                        </div>
                        {/* <p className="hidden md:block text-white absolute right-24 pt-2 w-60 opacity-30 hover:opacity-60">Free Delivery by Mugiwara</p> */}
                    </div>
                    
                </div>
                </> 
        )
      })):<div className='h-[500px] ml-[400px] w-full max-w-7xl px-2 py-28 mx-auto'>
             <div className='h-fit max-w-7xl w-full block text-center'>
                <img src={luffy} alt="" className='w-[50px] ml-40'/>
                <h1 className='font-medium'>Data Not Found</h1>
                <h1>We are in Hurry to Look For new Products . Meanwhile Try our latest deals</h1>
            </div>
        </div>
        }
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Brand

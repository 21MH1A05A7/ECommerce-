import Carousel from 'react-elastic-carousel'

import img from '../trailshoe.png';
const offersList = [
  {
    id: "1",
    title: "For your next trip with us:",
    desc: "Get up to 40% OFF on hotel stays!",  
  },
  {
    id: "2",
    title: "Enjoy our welcome offer",
    desc: "Get FLAT 20% OFF on 1st booking",
  },
  {
    id: "3",
    title: "The great getaway, your way",
    desc: "Save at least 15% on stays",
  },
  {
    id: "4",
    title: "FLAT 20% OFF on Booking!",
    desc: "Make payments with paytm",
  },
  {
    id: "5",
    title: "Stay for 4 Nights, Pay for 3",
    desc: "Grab this offer now",
  },
  {
    id: "6",
    title: "Stay for 4 Nights, Pay for 3",
    desc: "Grab this offer now",
  },
  {
    id: "7",
    title: "Stay for 4 Nights, Pay for 3",
    desc: "Grab this offer now",
  }

];
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5 ,itemsToScroll:2},
  { width: 1750, itemsToShow: 6,itemsToScroll: 2},
]

function Card() {
  return (
    <>
    <section className="mt-20 container max-w-9xl mx-auto h-[450px] px-0 sm:px-20">
    <div className="justify-center text-center flex items-center p-5">
      <div className="text-center px-5 w-[200px] px-3 pb-2 border-b border-b-black">
      <h1 className="text-bold text-5xl font-medium">Offers</h1>
      </div>
    </div>
    <Carousel className="h-[350px] mx-0 sm:mx-2 flex flex-1 items-center rounded-lg" breakPoints={breakPoints} as="div"> 
      {offersList.map(function(data){
        return <div className="h-full relative flex items-center mx-0 sm:mx-2 overflow-hidden "> 
        <img
          src={img}
          alt="image 3"
          className="flex transition ease-in-out duration-10 hover:scale-125 "
        />
        <div className='rounded-lg absolute top-40 w-full h-[300px] bg-gray-300 opacity-60 text-center'>
        </div>
        <h1 className=' absolute top-44 left-5 text-black text-current text-semibold font-medium'>{data.title}</h1>
        <p className=' absolute top-52 left-5 text-black text-current text-semibold font-medium'>{data.desc}</p>
            <button className='sm:flex absolute top-60 left-5 mt-3 px-2 py-2 border border-black rounded-md bg-[#ff7000] text-black font-medium opacity-none '>Go now</button>
        </div>
      })}
    </Carousel>
    </section>
    </>
  );
}

export default Card
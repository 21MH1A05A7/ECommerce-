// import React, { useEffect } from "react";
// import  { useRef } from 'react';
// import useScrollTriggeredCountUp from "../hooks/useScrollCount";
// import { useState } from "react";
// const stats = [
//     { id: 1, name: 'Transactions every 24 hours', value: '44000' },
//     { id: 2, name: 'Trusted Delivery', value: '500' },
//     { id: 3, name: 'New users annually', value: '46,000' },
//   ]
  

// function Count(){
//   const refs = useRef(stats.map(() => React.createRef()));
//   const [counts, setCounts] = useState(Array(stats.length).fill(0));

//   useEffect(() => {
//     const countsArray = Array(stats.length).fill(0);
//     refs.current = refs.current.slice(0, stats.length); // Ensure the refs array has the correct length
//     const handleScroll = () => {
//       refs.current.forEach((ref, index) => {
//         if (ref.current) {
//           const rect = ref.current.getBoundingClientRect();
//           if (rect.top < window.innerHeight) {
//             countsArray[index] = stats[index].value;
//           }
//         }
//       });
//       setCounts([...countsArray]);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//         return (
//           <div className="bg-white pb-20 mt-10">
//             <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
//               <h1 className="text-4xl mb-5 font-semibold ">Status</h1>
//               <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//                 {stats.map((stat,index) => (
//                   <div key={stat.id}  className="mx-auto flex max-w-xs flex-col gap-y-4">
//                     <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
//                     <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl" ref={refs.current[index]} >
//                       {counts[index].current[index]}
//                     </dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>
//           </div>
//         )
//       }
// export default Count;



import React, { useState } from "react";
import useScrollTriggeredCountUp from "../hooks/useScrollCount";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44000' },
  { id: 2, name: 'Trusted Delivery', value: '500' },
  { id: 3, name: 'New users annually', value: '46000' },
];

function Count() {
  const [counterState,setState]=useState(false);
  return (
    

    <div className="bg-white pb-20 mt-10">
       <ScrollTrigger onEnter={()=>{setState(true)}} onExit={()=>{setState(false)}}></ScrollTrigger> 
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl mb-5 font-semibold">Status</h1>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {counterState && <CountUp start={0} end={stat.value}></CountUp>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Count;





// const refs =  stats.map(() => useRef<HTMLDivElement>(null)); // Create an array of refs
//   const counts = useScrollTriggeredCountUp(refs, stats.map(stat => stat.value)); // Pass refs and values
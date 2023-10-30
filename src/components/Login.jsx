import react, { useState } from "react";
import {Link} from "react-router-dom"


function Login(){

    const [see,setsee]=useState(true);
    function set(){
        if(see==true){
            setsee(false)
        }
        else{
            setsee(true);
        }
    }

    return <>
    <section className="bg-gray-700 isolate w-screen h-screen sm:py-40">
        <div className="mx-auto max-w-2xl p-3">
            <div className="rounded-xl max-w-7xl h-[600px] bg-gray-400">
            <dl className="grid text-center sm:grid-cols-2 pt-3">
                <div  className="mx-auto flex flex-col px-24 py-5 shadow-xl">
                    <a href=""><dt className="font-medium text-4xl">Login</dt></a>
                    
                  </div>
                  <div  className="hidden mx-auto sm:flex flex-col px-20 py-5">
                    <Link to="/signup"><a href=""><dt className="font-medium text-4xl">SignUp</dt></a></Link>
                  </div>
              </dl>
              <div className="h-fit mt-10 sm:px-20">
            <form action="/" className="">
                <div className="px-10 py-6 space-y-2">
                    <label htmlFor="" className="block text-base ">UserName or Email</label>
                    <input type="email" className="w-full sm:w-[400px] sm:h-[40px] rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue"/>
                </div>
                <div className="relative px-10 space-y-2">
                    <label htmlFor="" className="block text-base ">Password</label>
                    <input type={see?"password":"text"} className="w-full sm:w-[400px] sm:h-[40px] p-3 rounded-lg bg-gray-100  focus:outline-none focus:ring-1 focus:ring-blue"/>
                    
                </div>
                <div className="flex-col space-y-3 flex sm:flex-row justify-between">
                    <div className="pl-10 pt-3">
                        <input type="checkbox" onChange={set} className="pr-2 rounded-full"/> Show Password
                    </div>
                    <div className="">
                        <a href="" className="opacity-50 pl-10 sm:pr-16 transition delay-50 hover:opacity-90">Forget Password?</a>
                    </div>
                </div>
                <div className="w-fit mt-5 ml-10">
                <button className="px-14 py-4 rounded-lg bg-[#171717] text-white text-lg">Login</button>
                </div>
                </form>

            </div>
            <div className="flex justify-center mt-14 tracking-widest opacity-80">
                    <Link to="/signup"><a href="" className="px-10 py-2">Create a account.</a> </Link>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Login;

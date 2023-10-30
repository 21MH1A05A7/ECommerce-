import react, { useState } from "react";
import { Link } from "react-router-dom";
function Signup(){

    const [see,setsee]=useState(true);
    const [conf,setConfPass]=useState("");
    const [pass,setPass] =useState("")
    const [page,setpage] = useState("/signup");


    
    function set(){
        if(see==true){
            setsee(false)
        }
        else{
            setsee(true);
        }
    }
    function FuncConfPass(){
        let val=document.getElementById("confP").value;
        setConfPass(val);
    }

    function FuncPass(){
        let val=document.getElementById("Pass").value;
        setPass(val);

    }

    function setpag(){
        let email=document.getElementById("email").value;
        if(email.length>0 && pass===conf){
            setpage("/login");
        }
    }

    return <>
    <section className="bg-gray-700 isolate w-screen h-screen py-40">
        <div className="mx-auto max-w-2xl p-3">
            <div className="rounded-xl max-w-7xl h-[600px] bg-gray-400">
            <dl className="grid text-center sm:grid-cols-2 pt-3">
                <div  className="mx-auto hidden sm:flex flex-col px-24 py-5">
                   <Link to="/login"> <a href=""><dt className="font-medium text-4xl">Login</dt></a> </Link>
                    
                  </div>
                  <div  className=" mx-auto flex flex-col px-20 py-5 shadow-xl">
                    <a href=""><dt className="font-medium text-4xl">SignUp</dt></a>
                  </div>
              </dl>
              <div className="h-fit mt-10 sm:px-20">
            <form action={`${page}`} className="">
                <div className="px-10 py-2 space-y-2">
                    <label htmlFor="" className="block text-base ">UserName or Email</label>
                    <input required type="email" id="email" className="w-full sm:w-[400px] sm:h-[40px] rounded-lg p-3 bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue" />
                </div>
                <div className="relative py-2 px-10 space-y-2">
                    <label htmlFor="" className="block text-base ">Password</label>
                    <input required type={see?"password":"text"} id="Pass" onChange={FuncPass} className="w-full sm:w-[400px] sm:h-[40px] p-3 rounded-lg bg-gray-100  focus:outline-none focus:ring-1 focus:ring-blue"/>
                    
                </div>
                <div className="relative px-10 py-2 space-y-2">
                    <label htmlFor="" className="block text-base ">Confirm Password</label>
                    <input required type={see?"password":"text"} id="confP"className="w-full sm:w-[400px] sm:h-[40px] p-3 rounded-lg bg-gray-100  focus:outline-none focus:ring-1 focus:ring-blue" onChange={FuncConfPass}/>
                    <p className={` ${conf!=pass && conf.length>=pass.length?`flex`:`hidden`}`}>ReEnter the Correct Password</p>
                </div>
                <div className="flex-col space-y-3 flex sm:flex-row justify-between">
                    <div className="pl-10 pt-3">
                        <input type="checkbox" onChange={set} className="pr-2 rounded-full"/> Show Password
                    </div>
                </div>
                <div className="w-fit mt-5 ml-10">
                <button className="px-14 py-4 rounded-lg bg-[#171717] text-white text-lg" onClick={setpag}>Sign Up</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    </section>
    </>
}

export default Signup;

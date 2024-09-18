/* eslint-disable react/prop-types */
import {useState} from "react";
import Phone from "./Phone";
function Home(){
    const [vis,setVis]=useState(true);
       const [inputname,setinput]=useState();
       function handle()
       
       {
        if(!inputname.trim())
        {
            alert("name must be filled");
        }
        else{
           
        setVis(false);
        }
       
       }
    return(
        <div className="home">
                {vis&&<div className="home-vis">
                        <h1><span className="home-first">Hello Enter your name !</span> </h1>
                        <div className="Home-ip-enter">
                            <input type="text"  maxLength={10} className="home-ip" onChange={(e)=>setinput(e.target.value)} ></input>
                            <button className="home-enter" onClick={handle}>Enter</button>
                        </div>
                </div>}
                {!vis &&<Phone inputname={inputname}></Phone>}
                {!vis &&<p className="home-final">"If <span className="home-final-span">Determination</span> and <span className="home-final-span">Dedication</span> comes together then <span className="home-final-span">Justification </span>
                automatically comes to your life"</p>}
        </div>
    );
 }
 export default Home
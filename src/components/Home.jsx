/* eslint-disable react/prop-types */
import {useState} from "react";
import Phone from "./Phone";
function Home(){
    const [vis,setVis]=useState(true);
       const [inputname,setinput]=useState();
       function handle()
       
       {
        if(inputname==="")
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
                        <h1><span className="home-first">Hello what&apos;s your name !</span> </h1>
                        <div className="Home-ip-enter">
                            <input type="text" maxLength={10} className="home-ip" onChange={(e)=>setinput(e.target.value)} ></input>
                            <button className="home-enter" onClick={handle}>Enter</button>
                        </div>
                </div>}
                {!vis &&<Phone inputname={inputname}></Phone>}
        </div>
    );
 }
 export default Home
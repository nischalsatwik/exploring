import Game from "./components/Game"
import Navbar from "./components/Navbar";
import './App.css'
import { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Businesscard from "./components/Businesscard";
import { useState,useEffect } from "react";

function App() {
 const [vis,setVis]=useState(true);
 useEffect(()=>{
  setTimeout(()=>{setVis(false)},1000)
 },[]);
  return (
    <>
    <Navbar></Navbar>
    {vis&&<h1>Click on Home</h1>}
    <Routes>
    <Route path="/home" element={<Home/> }></Route>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
    </Routes>
    </>
  )
}

export default App

import Game from "./components/Game"
import Navbar from "./components/Navbar";
import './App.css'
import { Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import Businesscard from "./components/Businesscard";
import { useState,useEffect } from "react";
import NumberGame  from "./Components/Games and Quiz/NumberGame";
import Tictactoe from "./Components/Games and Quiz/Tictactoe";
import Mindgame from "./components/Games and Quiz/Mindgame"
import hd from "./Images/hd.jpg"
function App() {
  return (
    <>
    <Navbar></Navbar>
    {/* <img src={hd}></img> */}
    <Routes>
    <Route path="/" element={<Home/> }></Route>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
        <Route path="/game/Numbergame" element={<NumberGame></NumberGame>}/>
        <Route path="/game/Tictactoe" element={<Tictactoe></Tictactoe>}/>
        <Route path="/game/Mindgame" element={<Mindgame></Mindgame>}/>
    </Routes>
    </>
  )
}

export default App

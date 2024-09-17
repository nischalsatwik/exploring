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

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
    <Route path="/home" element={<Home/> }></Route>
        <Route path="/game"  element={<Game></Game>}/>
        <Route path="/business"  element={<Businesscard></Businesscard>}/>
        <Route path="/game/Numbergame" element={<NumberGame></NumberGame>}/>
        <Route path="/game/Tictactoe" element={<Tictactoe></Tictactoe>}/>
    </Routes>
    </>
  )
}

export default App

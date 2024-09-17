import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate=useNavigate();
    return(
        <div className="navbar">
            <button onClick={()=>navigate("/home")}>Home</button>
            <button onClick={()=>navigate("/business")}>Business card</button>
            <button onClick={()=>navigate("/game")}>Games and Quiz</button>
        </div>
    );
}export default Navbar;
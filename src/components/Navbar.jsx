import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate=useNavigate();
    return(
        <div className="navbar">
            <button title="click me" onClick={()=>navigate("/")}>Home</button>
            <button title="click to  contact me" onClick={()=>navigate("/business")}>Business card</button>
            <button  title="click to have fun" onClick={()=>navigate("/game")}>Games</button>
        </div>
    );
}export default Navbar;
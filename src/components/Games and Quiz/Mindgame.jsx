import {  useRef } from "react";
import { useNavigate } from "react-router-dom";
function Mindgame()
{
    const navigate=useNavigate();
    let vis=false;
    let message="level 1";

    let count=1;
    let c=0;
    const blue = useRef(null);
    const red = useRef(null);
    const green = useRef(null);
    const yellow = useRef(null);  
    let arr3=[];
    let arr2=[];
    function game() 
    {
        arr3=[];
        arr2=[];
        console.log(arr2,"insidegame")
        glowColors(count, 0);
    }

    function glowColors(totalCount, currentIndex) 
    {
        if (currentIndex < totalCount)
        {
            const randomIndex = Math.floor(Math.random() * 4);
            console.log(randomIndex,":random");
            if (randomIndex === 0) 
            {
                glowAndReset(red, "red");
                arr2.push("red");
            } 
            else if (randomIndex === 1) 
            {
                glowAndReset(blue, "blue");
                arr2.push("blue");
            } 
            else if (randomIndex === 2)
            {
                glowAndReset(green, "green");
                arr2.push("green");
            } 
            else 
            {
                glowAndReset(yellow, "yellow");
                arr2.push("yellow");
            }
            setTimeout(
                () => 
                {
                    glowColors(totalCount, currentIndex + 1);
                }, 1500);
        }    
        else 
        {
            console.log(arr2,"noted indside glow colors");
            vis=true;
            alert("now your turn");
        }
    }

    function glowAndReset(element, color)
    {
        element.current.style.backgroundColor = "black";
        setTimeout(() => 
        {
            element.current.style.backgroundColor = color;
        }, 1000);
    }

    function coloor(element,color)
    {   
        if(vis)
          console.log(vis,"=vis")
        {
            element.current.style.backgroundColor = "black";
        setTimeout(() => {
            element.current.style.backgroundColor = color;
        }, 200);
            arr3.push(color);
            console.log("arr3=",arr3);
            if(arr2[c]!==arr3[c])
            {
                message="You lost the game please start again";
                alert("game over you lost it")
                window.location.reload();
                return
            }
            else{
            c=c+1;
            if(c===count)
                {
                    count=count+1;
                    vis=false;
                    message=`Level ${count}`;
                    alert(`level ${count}`)
                    c=0;
                    setTimeout(()=>game(),2000);
                }
            }
        }
    }
return(
    <div className="main">
    <div className="main-body">
        <div className="red" ref={red} onClick={()=>coloor(red,"red")}></div>
        <div className="blue" ref={blue} onClick={()=>coloor(blue,"blue")}></div>
    </div>
    <div className="main-body">
        <div className="green" ref={green} onClick={()=>coloor(green,"green")}></div>
        <div className="yellow" ref={yellow} onClick={()=>coloor(yellow,"yellow")}></div>
    </div>
    <div className="main-body-buttons">
      <button onClick={game}>Start</button>
      <button onClick={()=>window.location.reload()}>Restart</button>
      <button onClick={()=>navigate("/game")}>Back</button>
      <p>Just click on the color after the color turns black . For each level the number of colours turn black increases. All the best </p>
    </div>
</div>
)
}
export default Mindgame;

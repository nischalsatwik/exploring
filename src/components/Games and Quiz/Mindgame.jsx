import { useState } from "react";
function Mindgame()
{
        const [vis,setVis]=useState(false);
        const [message,setMessage]=useState("there is only one winner let's go");
        const [count,setCount]=useState(1);
        const [c,setC]=useState(0);
        const blue=document.getElementsByClassName("blue");
        const red=document.getElementsByClassName("red");
        const green=document.getElementsByClassName("green");
        const yellow=document.getElementsByClassName("yellow");
        console.log(blue,red,green,yellow);
        let arr3=[];
        let arr2=[];
        function game() 
        {
            arr2 = [];
            arr3=[];
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
                setVis(true);
            }
        }
 
        function glowAndReset(element, color)
        {
            console.log(element);
            element.style.backgroundColor = "black";
            setTimeout(() => 
            {
                element.Style.backgroundColor = color;
            }, 1000);
        }

        function coloor(element,color)
        {   
            if(vis)
            {
               ()=> element.style.backgroundColor = "black";
            setTimeout(() => {
                element.style.backgroundColor = color;
            }, 200);
                arr3.push(color);
                console.log("arr3=",arr3);
                if(arr2[c]!==arr3[c])
                {
                    setMessage("You lost the game please start again");
                    alert("game over you lost it")
                    window.location.reload();
                    return
                }
                else{
                setC(prev=>prev+1);
                if(c===count)
                    {
                        setCount(prev=>prev+1);
                        setVis(false);
                        setMessage(`Level ${count}`);
                        alert(`level ${count}`)
                        setC(0);
                        setTimeout(()=>game(),2000);
                    }
                }
            }
        }
    return(
        <div className="main">
        <div className="main-body">
            <div className="red" onClick={()=>coloor(red,"red")}></div>
            <div className="blue" onClick={()=>coloor(blue,"blue")}></div>
        </div>
        <div className="main-body">
            <div className="green" onClick={()=>coloor(green,"green")}></div>
            <div className="yellow" onClick={()=>coloor(yellow,"yellow")}></div>
        </div>
        <div className="main-body-buttons">
          <button onClick={game}>Start</button>
          <button onClick={()=>window.location.reload()}>Restart</button>
          <p >{message}</p>
        </div>
    </div>
    )
}
export default Mindgame;

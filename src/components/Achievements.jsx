import img5 from "../Images/smtgodavari.png"
import img6 from "../Images/Nptel.jpeg"
import img7 from "../Images/meta.jpg"
function Achievments(){
    return(
        <div className="achieve">
            <h1 className="acheive-head">I acheived very less but going to acheive a lot.</h1>
            <div className="achieve-body"> 
                <div className="acheive-body-div">
                    <img className="ac-school" src={img5}></img>
                    <h3>Stood as a school topper which is quite not relevant now but still it&apos;s an acheivement. The above is my school pic</h3>
                </div>
                <div className="acheive-body-div">
                    <img className="ac-nptel"src={img6}></img>
                    <h3>Recieved an nptel certification in python which is the first language which I&apos;ve learnt and solved a lot of questions and used in interviews too</h3>
                </div>
                <div className="acheive-body-div">
                    <img className="ac-meta"src={img7}></img>
                    <h3>Worked as teamlead and onboarded a project. This is hectic but still thanks to my teammates who helped me.</h3>
                </div>
            </div>
        </div>
    )
 }
 export default Achievments
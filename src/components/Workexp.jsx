import img1 from "../Images/sailpoint.png"
import img2 from "../Images/metas.jpg"
import img3 from "../Images/shop.jpg"
import img4 from "../Images/games.jpg"
function Workexp() {
  return (
    <div className="work">
        <h1 className="work-head">I have an experience of 2.5 years in the software field</h1>
        <div className="work-body">
          <div className="work-body-div">
            <h3 className="work-body-li">IAM using Sailpoint application</h3>
            <ul>
              <li>Worked as QA member</li>
              <li>Tools used : Postman,PLSQL</li>
              <li>Learnt Identity access management techniques</li>
            </ul>
            <img className="work-sail" src={img1}></img>
          </div>
          <div className="work-body-div">
            <h3 className="work-body-li">Meta</h3>
            <ul>
              <li>Worked as a team lead for 15 people</li>
              <li>Tested Meta applications</li>
              <li>Did Localization,accessibility and manual testing</li>
            </ul>
            <img className="work-meta" src={img2}></img>
          </div>
          <div className="work-body-div">
            <h3 className="work-body-li">Solo Projects</h3>
            <ul >
              <li>Shopping app-used tools: SpringBoot,<br></br>React,MySql,Git,Java,Javascript</li>
              <li>Developed small games using Javascript: Number guessing game, Tic Tac Toe</li>
            </ul> 
            <div className="work-body-li-img">
            <img className=" work-body-shop" src={img3}></img>
            <img className="work-body-game" src={img4}></img>
            </div>
          </div>
        </div>
  </div>
  );
}
export default Workexp;
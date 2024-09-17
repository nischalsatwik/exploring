/* eslint-disable react/prop-types */

function All(props)
{
    return(
    <>
        <div className="home-made">
            <h1 className="home-head">Welcome {props.inputname}</h1> 
            <div className="home-ul">
            <ul >
                <p>You can slide through and view my</p>
                <li className="home-details"><span className="home-just">Info</span> to know about myself</li>
                <li className="home-details"><span className="home-just">Workexperience and Project</span> to know about my previous projects which I've worked</li>
                <li className="home-details"><span className="home-just">Acheivements</span> to know what I have acheived until now.</li>
                <p>And click on the above</p>
                <li className="home-details"><span className="home-just">Business card</span> to contact me through social media or email</li>
                <li className="home-details"><span className="home-just">Games and Quiz</span> to have some fun</li>
            </ul>
            </div>
        </div>
            </>
    );
}
export default All;
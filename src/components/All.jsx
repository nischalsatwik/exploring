/* eslint-disable react/prop-types */

function All(props)
{
    return(
    <>
        <div className="home-made">
            <h1 className="home-head">Welcome {props.inputname} you can click on the following</h1> 
            <div className="home-ul">
            <ul >
                <li className="home-details"><span className="home-just">Info</span> to know about myself</li>
                <li className="home-details"><span className="home-just">Workexperience and Project</span> to know about my previous projects which I've worked</li>
                <li className="home-details"><span className="home-just">Acheivement</span> to know what I have acheived until now.</li>
                <li className="home-details"><span className="home-just">Business card</span> to contact me through social media or email</li>
                <li className="home-details"><span className="home-just">Games and Quiz</span> to have some fun</li>
            </ul>
            </div>
        </div>
            </>
    );
}
export default All;
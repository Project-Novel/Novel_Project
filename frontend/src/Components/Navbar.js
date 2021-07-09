import React,{useState} from 'react'
import "./Navbar.css"


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    return (
        <div>
        <div className="HighBar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>  
                    <a>로고위치</a>  
                </div>
            </div>
            <div className="rightSide">
                <div className="links" id={showLinks ? "hidden" : ""}>  
                    <a href="#">Sign Up</a>
                    <a href="#">Sign In</a>    
                </div>
            </div>
        </div>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/">Home</a>
                    <a href="#">Feedback</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                </div>
            <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
            </div>   
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </div>  
        </div>
        </div>
    )
}

export default Navbar

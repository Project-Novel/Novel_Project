import React,{useState} from 'react'
import "../App.css"


function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
         <div ClassName="leftSide">
             <div className="links" id={showLinks ? "hidden" : ""}>
             <a href="#">Home</a>
             <a href="#">Feedback</a>
             <a href="#">About Us</a>
             <a href="#">Contact</a>
             </div>
             <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
            </div>   
         <div ClassName="rightSide">
             <input type="text" placeholder="Search..."/>
             <button>Search</button>
             </div>  

        </div>
    )
}

export default Navbar

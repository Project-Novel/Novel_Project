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
                    <a href="#">연재</a>
                    <a href="#">완결</a>
                    <a href="#">E-Book</a>
                    <a href="#">커뮤니티</a>
                </div>
            <button onClick={()=> setShowLinks(!showLinks)}>Open</button>
            </div>   
            <div className="rightSide">
                <input type="text" placeholder="검색어를 입력해주세요"/>
                <button>Search</button>
            </div>  
        </div>
        </div>
    )
}

export default Navbar

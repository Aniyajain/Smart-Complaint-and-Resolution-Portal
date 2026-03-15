import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import sideimg from "../assets/side image.png";
import { FaUser } from "react-icons/fa";
import Navbar from "../CompEveryWhere/Navbar";
import "./Interface.css";
import { FaCheckCircle, FaUsers, FaBuilding } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function Interface(){
    return(
        <div id="main">

            {/* Navbar */}
            <Navbar />

            <div id="content">
                <div id="left">
                    <h2 className="typewriter">Welcome to Smart Complaint Portal</h2>
                    <h4>
                        Empowering students and administrators with a modern, efficient platform for seamless complaint resolution
                        and transparent communication.
                    </h4>
                    <p style={{color: "rgb(205, 62, 30)" , fontSize: "30px", fontWeight: "bold"}}>Raise and track complaints easily.</p>
          <div id="below-left">
                    <div id="b1">
    <FaCheckCircle className="icon"/>
    <div className="stat-text">
        <h3>500+</h3>
        <p>Complaints Resolved</p>
    </div>
</div>

<div id="b2">
    <FaUsers className="icon"/>
    <div className="stat-text">
        <h3>1,000+</h3>
        <p>Active Users</p>
    </div>
</div>

<div id="b3">
    <FaBuilding className="icon"/>
    <div className="stat-text">
        <h3>150+</h3>
        <p>Educational Institutions</p>
    </div>
</div>
                     </div> 

    <div id="below-boxes">
             <Link to="/login">   <button style={{border: "1px solid white", borderRadius:"20px", background:"linear-gradient(90deg,#4f8dfd,#9a5bff)" , width: "150px", height: "50px", fontWeight:"bold", color:"white" , display:"flex",
alignItems:"center", justifyContent:"center",gap:"8px", }} className="primary-btn">Get Started Now <FaArrowRight  /> </button></Link>
                <button style={{border: "1px solid white", borderRadius:"20px",  background:"transparent" , width: "150px", height: "50px", fontWeight:"bold", color:"white", opacity:"0.8" ,display:"flex",
alignItems:"center", justifyContent:"center",gap:"8px",backdropFilter:"blur(6px)" }} className="secondary-btn"><FaPlay />Watch Demo</button>
                        
                
     </div>                             
                           </div>
              

                <div id="right">
                    <img src={sideimg} alt="loading..." />
                </div>
               
            </div>

        </div>
    )
}

export default Interface;
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import {Home}from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar({type , toggleSidebar}){
    return(
        <nav className="navbar">
{/* left side */}
            <div id="nav-left">
                
                 <Link to="/"> 
                <img src={logo} alt="logo" id="logo" />
                </Link>
              <h1>Smart Complaint and Resolution Portal </h1>
            </div>

            <div id="nav-links">
                {type === "Interface" && (
                    <>
                    <Link to="/login">
                     <button className="nav-login-btn">
                    
                        <FaUser style={{marginRight:"5px"}}/>
                        Login
                    
                </button>
                </Link>

              <Link to="/signup">  <button className="nav-signup-btn">
                    Sign Up
                </button>
                </Link>
                    </>

                )}

                {type === "loginpage" &&(
                    <>
                   <Link to="/signup"> <button className="nav-signup-btn">
                    Sign Up
                </button></Link>
                    
                    </>
                )}

                {type === "signup" &&(
                    <>
                    <Link to="/login">
                     <button className="nav-login-btn">
                    
                        <FaUser style={{marginRight:"5px"}}/>
                        Login
                   
                </button>
                 </Link>
                    </>
                )

                }

               
             

                

                {type === "dashboard" &&(
                    <>
                    
                   <div className="btn"> <Link to="/dashboard" className="dash-home-link"><Home size={20}/></Link>
                   {/* <Link id="developer-btn"> <button>Developer</button></Link> */}
                   <Link to="/"> <button className="nav-btn">
                        Logout
                    </button></Link></div>
                    
                    </>
                )}

            </div>

        </nav>
    )
}

export default Navbar;
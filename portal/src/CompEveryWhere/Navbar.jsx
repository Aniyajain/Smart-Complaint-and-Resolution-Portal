import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
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
                     <button className="nav-login-btn">
                    <Link to="/login">
                        <FaUser style={{marginRight:"5px"}}/>
                        Login
                    </Link>
                </button>

                <button className="nav-signup-btn">
                    <Link to="/signup">Sign Up</Link>
                </button>
                    </>

                )}

                {type === "loginpage" &&(
                    <>
                    <button className="nav-signup-btn">
                    <Link to="/signup">Sign Up</Link>
                </button>
                    
                    </>
                )}

                {type === "signup" &&(
                    <>
                     <button className="nav-login-btn">
                    <Link to="/login">
                        <FaUser style={{marginRight:"5px"}}/>
                        Login
                    </Link>
                </button>
                    </>
                )

                }

               
             

                

                {type === "dashboard" &&(
                    <>
                    
                    
                    <button className="nav-btn">
                        <Link to="/">Logout</Link>
                    </button>
                    
                    </>
                )}

            </div>

        </nav>
    )
}

export default Navbar;
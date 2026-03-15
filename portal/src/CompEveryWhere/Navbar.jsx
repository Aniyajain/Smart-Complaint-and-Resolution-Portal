import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">

            <div id="nav-left">
              <Link to="/">   <img src={logo} alt="logo" id="logo" /></Link>
              <h1>Smart Complaint and Resolution Portal </h1>
            </div>

            <div id="nav-links">

                <button className="btn">
                    <Link to="/login">
                        <FaUser style={{marginRight:"5px"}}/>
                        Login
                    </Link>
                </button>

                <button className="btn">
                    <Link to="/signup">Sign-up</Link>
                </button>

            </div>

        </nav>
    )
}

export default Navbar;
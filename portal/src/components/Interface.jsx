import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import sideimg from "../assets/side image.png";
import { FaUser } from "react-icons/fa";
import "./Interface.css";

function Interface(){
    return(
        <div id="main">

            <nav>

                <div id="nav-left">
                    <img src={logo} alt="logo" id="logo"/>
                    <h1>Smart Complaint and Resolution Portal</h1>
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

            <div id="content">
                <div id="left">
                    <h2>Welcome to Smart Complaint Portal</h2>
                    <h4>Empowering students and administrators with a modern, efficient platform for seamless complaint resolution and transparent communication.</h4>
                    <p>Raise and track complaints easily.</p>
                </div>

                <div id="right">
                    <img src={sideimg} alt="loading..." />
                </div>
            </div>

        </div>
    )
}

export default Interface;
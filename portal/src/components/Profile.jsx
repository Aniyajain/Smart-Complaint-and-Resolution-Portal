
import { Link } from "react-router-dom";
import "./Profile.css";


function Profile(){
    return (
        <div id="main">
            <nav>
                 <h1>Smart Complaint and Resolution Portal</h1>

                <div id="nav-links">
                <Link to="/">Login/Sign-up</Link>
                 <Link to="/home">Home </Link>
                </div>

               
            </nav>
        </div>
    )
};
export default Profile;
import { Link } from "react-router-dom";
import "./Home.css";
function Home(){
    return(

        <div id="main">
             <nav>
                 <h1>Smart Complaint and Resolution Portal</h1>
                <div id="nav-links">
                <Link to="/">Login/Sign-up</Link>
                 <Link to="/home">Home </Link>
                </div>  
            </nav>
            <div id="container">
            
            <div id="sidebar">
                <h2>Dashboard</h2>
                <Link to="/home" className="bottom">Home</Link>
                <Link to="/register" className="bottom">Register Complaint</Link>
                <Link to="/track" className="bottom">Track Complaint</Link>
                <Link to="/profile" className="bottom">Profile</Link>
                <Link to="/"className="bottom">Logout</Link>
            </div>
            <div id = "content">
                <h1>Welcome to Complaint Portal </h1>
            </div>
            
</div>

        </div>
    )
}
export default Home;
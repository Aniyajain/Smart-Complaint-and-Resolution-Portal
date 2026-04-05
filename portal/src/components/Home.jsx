import { Link } from "react-router-dom";
import Navbar from "../CompEveryWhere/Navbar";
import "./Home.css";

function Home(){
    return(
        <div id="main">

            {/* Navbar */}
            <Navbar />

            {/* Page layout */}
            <div id="page-layout">

                <div id="sidebar">
                    <h2>Dashboard</h2>

                    <Link to="/home">Home</Link>
                    <Link to="/register">Register Complaint</Link>
                    <Link to="/track">Track Complaint</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/">Logout</Link>
                </div>

                <div id="content">
                    <h1>Welcome to Complaint Portal</h1>
                </div>

            </div>

        </div>
    )
}

export default Home;
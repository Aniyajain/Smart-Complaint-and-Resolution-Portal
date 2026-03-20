import Navbar from "../CompEveryWhere/Navbar";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  Folder,
  User
} from "lucide-react";
import Profile from "../components/Profile";
import RaiseComplaint from "../components/RaiseComplaint";
import logo from "../assets/logo.png";


import "./Dashboard_user.css";

function Dashboard_user(){
    return(
        <div>
            <Navbar type="dashboard"/>
            
           <div className="dashboard-container">
             <div id="sidebar">
                <div>
                  <div id="top-sidebar">
                    <img src={logo} alt="logo"  style={{height:"40px", width:"40px" , borderRadius:"20px" , padding:"10px"}}/>
                    <h1>SCRP</h1>
                    <p>Complaint System</p>
                  </div>
                    
               <Link to="/dashboard" >
                 <LayoutDashboard size={20}/> Dashboard
               </Link>

               <Link to="/raiseComplaint">
                 <PlusSquare size={20}/> Raise Complaint
               </Link>

               <Link to="/myComplaint">
                 <Folder size={20}/> My Complaints
               </Link>

               <Link to="/profile">
                 <User size={20}/> Profile
               </Link>
                </div>
                <div className="bottom">

                </div>


            </div>
            <div className="main-content">
                <div className="main-center">
                    <h2>Welcome back, Aniya 👋</h2>
<h4>Track and manage your complaints </h4>
                </div>
                <div className="below-maincenter">
                    <div id="box1"><h2 >Your Overview</h2></div>
                    <div className="cardContainer">
                      <div className="stat-card"><div className="emoji-box blue">📝</div> <h2>1</h2>Total Complaints</div>
                    <div className="stat-card"><div className="emoji-box yellow">⏳</div><h2>1</h2>Pending</div>
                    <div className="stat-card"> <div className="emoji-box green">✅</div><h2>0</h2>Resolved</div>
                    <div className="stat-card"><div className="emoji-box orange">🚧</div><h2>1</h2> In Progress</div>
                    </div>

                </div>
                <div id="complaint-btn">
                  <button><Link to="/raiseComplaint">+ Raise New Complaint</Link></button> 
                </div>
            </div>
           </div>

        </div>
    )
}

export default Dashboard_user;
import Navbar from "../CompEveryWhere/Navbar";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  Folder,
  User,
  LogOut,
  Moon,
  FileText, Clock, CheckCircle, Wrench,   RefreshCw, Calendar, Eye,Home
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
                    <Link  to="/" style={{margin: "0px" , padding: "0px"}}><img src={logo} alt="logo"  style={{height:"40px", width:"40px" , borderRadius:"20px" , padding:"10px"}}/></Link>
                    <h1>SCRP</h1>
                    <p>Complaint System</p>
                  </div>
                    
               <Link to="/dashboard" >
                 <Home size={20}/> Dashboard
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
                  <Link > <Moon size={20} />Dark Mode</Link>
                  <div className="bottom-profile">
                   <Link to="/profile" style={{margin: "0px" , padding: "0px"}}> <div id="icon-profile">A</div></Link>
                    <div id="user-name" style={{color: "#2E21A2"}}>ANIYA  <div style={{fontSize:"12px" , color:"black"}}>Student</div></div>
                    <Link to="/" style={{padding:"0px", borderRadius:"0px",  display: "inline-flex",
  alignItemslignitems: "center",
 transition : "0.3s" }} ><LogOut size={20} className="logout-link"/> </Link>
                  </div>

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
                <div className="Complaint-section">
                  <div><h2>Recent Complaints Section</h2></div>
                  <div id="complaint-stats">
                    <div className="cards-recentcomplaint"><div className="icon-recent"><FileText size={18} /></div>Complaint Title</div>
                    <div className="cards-recentcomplaint"><div className="icon-recent"><Folder size={18} /></div>Category</div>
                    <div className="cards-recentcomplaint"><div className="icon-recent"><RefreshCw size={18} /></div>Status (Pending / Resolved / In Progress)</div>
                    <div className="cards-recentcomplaint"><div className="icon-recent">📆</div>Date</div>
                    <div className="cards-recentcomplaint"><div className="icon-recent"><Eye size={18} /></div>View button</div>
                  </div>
                </div>
                
            </div>
           </div>

        </div>
    )
}

export default Dashboard_user;
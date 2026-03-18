import Navbar from "../CompEveryWhere/Navbar";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  PlusSquare,
  Folder,
  User
} from "lucide-react";

import "./Dashboard_user.css";

function Dashboard_user(){
    return(
        <div>
            <Navbar type="dashboard"/>
            
            <div id="sidebar">
                <div>
                    
               <Link >
                 <LayoutDashboard size={20}/> Dashboard
               </Link>

               <Link>
                 <PlusSquare size={20}/> Raise Complaint
               </Link>

               <Link>
                 <Folder size={20}/> My Complaints
               </Link>

               <Link>
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
                    <h2 id="box1">Your Overview</h2>
                    <div className="stat-card">📝 Total Complaints</div>
                    <div className="stat-card">⏳ Pending</div>
                    <div className="stat-card">✅ Resolved</div>
                    <div className="stat-card">🚧 In Progress</div>

                </div>
                <div>
                   <button>+ Raise New Complaint</button>
                </div>
            </div>

        </div>
    )
}

export default Dashboard_user;
import Navbar from "../CompEveryWhere/Navbar";
import { Link } from "react-router-dom";
import "./Dashboard_user.css";
function Dashboard_user(){
    return(
        <div>
            <Navbar type="dashboard"/>
            
            <div id="sidebar">

               <Link>Dashboard</Link>
               <Link>Raise Complaint</Link>
              <Link>My Complaints</Link>
               <Link>Profile</Link>
               {/* <button><Link></Link></button> */}

            </div>

        </div>
    )
}

export default Dashboard_user
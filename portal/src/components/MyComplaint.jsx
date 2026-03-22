import { Link } from "react-router-dom";
import "./MyComplaint.css"
import Navbar from "../CompEveryWhere/Navbar";
function MyComplaint(){
    return(
        <div id="main">
            <Navbar type="dashboard"/>

            <div>
                <div className="DashboardCards">
                    <div className="cards"> 📋 Total <p>12</p></div>
                    <div className="cards"> ⏳Pending <p>7</p></div>
                    <div className="cards"> ✅ Resolved <p>5</p></div>
                    <div className="cards">🔥 High Priority <p>2</p></div>
                </div>
             <div className="searching-filter">
                   <div >
                    <input type="text" placeholder="🔍 Search complaints..."  className="filter-bar"/>
                </div>
                <div>
                    <select id="filter" className="filter">
                        <option value="">Filters</option>
                        <option value="filter">All</option>
                        <option value="filter">Pending</option>
                        <option value="filter">Resolved</option>
                    </select>
                </div>
                <div >
                    <button type="reset" className="filter">Clear</button>
                </div>
             </div>
             <div className="Complaint-Cards-List">
                <h1> My Complains : </h1>
                <div className="L1card">
                    <div className="L1title">
                        <h2>Water Leakage in Hostel </h2>
                        <span> 🟡Pending</span>
                        
                    </div>
                    <div className="L1title"><div>Infrastructure  </div>
                    <span>22 March 2026</span> </div>
                    <p>Water leakage near bathroom causing inconvenience...</p>
                    <div className="L1footerpart">
                        <p>🔥 High Priority</p>
                       <div id="footer-button">
                         <button> View </button>
                        <button> Edit</button>
                        <button>Delete</button>
                       </div>
                    </div>

                    
                </div>
                <div className="L2card">
                    <div className="L1title">
                        <h2>Water Leakage in Hostel </h2>
                        <span> 🟡Pending</span>
                        
                    </div>
                    <div className="L1title"><div>Infrastructure  </div>
                    <span>22 March 2026</span> </div>
                    <p>Water leakage near bathroom causing inconvenience...</p>
                    <div className="L1footerpart">
                        <p>🔥 High Priority</p>
                       <div id="footer-button">
                         <button> View </button>
                        <button> Edit</button>
                        <button>Delete</button>
                       </div>
                    </div>

                    
                </div>
                <div className="L3card">
                    <div className="L1title">
                        <h2>Water Leakage in Hostel </h2>
                        <span> 🟡Pending</span>
                        
                    </div>
                    <div className="L1title"><div>Infrastructure  </div>
                    <span>22 March 2026</span> </div>
                    <p>Water leakage near bathroom causing inconvenience...</p>
                    <div className="L1footerpart">
                        <p >🔥 High Priority</p>
                       <div id="footer-button">
                         <button> View </button>
                        <button> Edit</button>
                        <button>Delete</button>
                       </div>
                    </div>

                    
                </div>
             </div>
            </div>

        </div>
    )
}
export default MyComplaint;
import { Link } from "react-router-dom";
import "./MyComplaint.css"
import Navbar from "../CompEveryWhere/Navbar";
import { useEffect, useState } from "react";
import { getComplaints } from "../api/ComplaintApi";
function MyComplaint(){
  const [complaints, setComplaints] = useState([]);
  useEffect(() => {
  fetchComplaints();
}, []);

const fetchComplaints = async () => {
  try {
    const res = await getComplaints();
    console.log("API RESPONSE:", res.data); 
    setComplaints(res.data);
  } catch (err) {
    console.error(err);
  }
};
    return(
        <div id="main">
            <Navbar type="dashboard"/>

            <div className="my-container">
                 {/* ✅ Header */}
    <div className="Header">
      <h2>📂 My Complaints</h2>
      <p>Track, manage and update your complaints</p>
    </div>
                <div className="DashboardCards">
                    <div className="cards"> 📋 Total <p>{complaints.length}</p></div>
                    <div className="cards"> ⏳Pending <p>{complaints.filter(c => c.status === "Pending").length}</p></div>
                    <div className="cards"> ✅ Resolved <p>{complaints.filter(c => c.status === "Resolved").length}</p></div>
                    <div className="cards">🔥 High Priority <p>{complaints.filter(c => c.priority === "high").length}</p></div>
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
{complaints.length === 0 ? (
  <p>No complaints found</p>
) : (
  complaints.map((c) =>  (
 <div className="complaint-card" key={c._id}>
  <div className="card-header">
    <h2>{c.title}</h2>
    <span className={`status ${c.status?.toLowerCase()}`}>
      {c.status === "Pending" ? "🟡" : "✅"} {c.status}
    </span>
  </div>

  <div className="card-meta">
    <span>{c.category}</span>
    <span>{new Date(c.createdAt).toLocaleDateString()}</span>
  </div>

  <p>{c.description}</p>

  <div className="card-footer">
    <p>🔥 {c.priority} Priority</p>

    <div className="footer-buttons">
      <button>View</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  </div>
</div>
)))}
             </div>
            </div>

        </div>
    )
}
export default MyComplaint;
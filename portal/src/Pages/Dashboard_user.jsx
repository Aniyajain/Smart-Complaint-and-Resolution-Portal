
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
  import { useState } from "react";
  import { getComplaints } from "../api/ComplaintApi";

  import { useEffect } from "react";
  import "./Dashboard_user.css";
  import { useNavigate } from "react-router-dom";

  function Dashboard_user(){
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [complaints, setComplaints] = useState([]);
    const [stats , setStats] = useState({
      total: 0,
      pending: 0, 
      resolved: 0,
      inProgress: 0
    });
    const [dark, setDark] = useState(true);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);
  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
  try {
    setLoading(true); // 🔥 start loading

    const res = await getComplaints();
    setComplaints(res.data);

    const total = res.data.length;
    const pending = res.data.filter(c => c.status === "Pending").length;
    const resolved = res.data.filter(c => c.status === "Resolved").length;
    const inProgress = res.data.filter(c => c.status === "In Progress").length;

    setStats({
      total,
      pending,
      resolved,
      inProgress
    });

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false); // 🔥 stop loading
  }
};

      return(
          <div className={dark ? "dark" : "light"}>
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
                  </div >
                  <div className="bottom">
                    <button className="theme-btn" onClick={() => setDark(!dark)}> <Moon size={20} />{dark ? "Light Mode" : "Dark Mode"}</button>
                    <div className="bottom-profile">
                    <Link to="/profile" style={{margin: "0px" , padding: "0px"}}> <div id="icon-profile">A</div></Link>
                      <div id="user-name" style={{color: "#2E21A2"}}>{user?.firstName || "User"}  <div style={{fontSize:"12px" , color:"black"}}>Student</div></div>
                      <Link to="/" style={{padding:"0px", borderRadius:"0px",  display: "inline-flex",
    alignItemslignitems: "center",
  transition : "0.3s" }} ><LogOut size={20} className="logout-link"/> </Link>
                    </div>

                  </div>


              </div>
              <div className="main-content">
                  <div className="main-center">
                      <h2>Welcome back, {user?.firstName} 👋</h2>
  <h4>Track and manage your complaints </h4>
                  </div>
                  <div className="below-maincenter">
                      <div id="box1"><h2 >Your Overview</h2></div>
                      <div className="cardContainer">
                        <div className="stat-card"><div className="emoji-box blue">📝</div> <h2>{stats.total}</h2>Total Complaints</div>
                      <div className="stat-card"><div className="emoji-box yellow">⏳</div><h2>{stats.pending}</h2>Pending</div>
                      <div className="stat-card"> <div className="emoji-box green">✅</div><h2>{stats.resolved}</h2>Resolved</div>
                      <div className="stat-card"><div className="emoji-box orange">🚧</div><h2>{stats.inProgress}</h2> In Progress</div>
                      </div>

                  </div>
                  <div className="Complaint-section">
                    <div><h2>Recent Complaints Section</h2></div>
                    {/* <div id="complaint-stats">
                      <div className="cards-recentcomplaint"><div className="icon-recent"><FileText size={18} /></div>Complaint Title</div>
                      <div className="cards-recentcomplaint"><div className="icon-recent"><Folder size={18} /></div>Category</div>
                      <div className="cards-recentcomplaint"><div className="icon-recent"><RefreshCw size={18} /></div>Status (Pending / Resolved / In Progress)</div>
                      <div className="cards-recentcomplaint"><div className="icon-recent">📆</div>Date</div>
                      <div className="cards-recentcomplaint"><div className="icon-recent"><Eye size={18} /></div>View button</div>
                    </div> */}
                    <div id="complaint-stats">

    {/* Header Row */}
    <div className="cards-recentcomplaint"><FileText size={18}/> Title</div>
    <div className="cards-recentcomplaint"><Folder size={18}/> Category</div>
    <div className="cards-recentcomplaint"><RefreshCw size={18}/> Status</div>
    <div className="cards-recentcomplaint">📆 Date</div>
    <div className="cards-recentcomplaint"><Eye size={18}/> View</div>

    {loading && (
  <div style={{ gridColumn: "span 5", textAlign: "center" }}>
    Loading...
  </div>
)}

{!loading && complaints.length === 0 && (
  <div style={{ gridColumn: "span 5", textAlign: "center", padding: "20px" }}>
    No complaints found 🚫
  </div>
)}

    {/* Dynamic Rows */}
{!loading && complaints.slice(0,5).map((c) => (
  <div key={c._id} style={{ display: "contents" }}>
    <div className="cards-recentcomplaint">{c.title}</div>
    <div className="cards-recentcomplaint">{c.category}</div>
    <div className={`cards-recentcomplaint status-${c.status}`}>{c.status}</div>
    <div className="cards-recentcomplaint">
      {new Date(c.createdAt).toLocaleDateString()}
    </div>
    <div className="cards-recentcomplaint">
      <button onClick={() => navigate(`/complaint/${c._id}`)}>
  View
</button>
    </div>
  </div>
))}

  </div>
                  </div>
                  
              </div>
            </div>

          </div>
      )
  }

  export default Dashboard_user;
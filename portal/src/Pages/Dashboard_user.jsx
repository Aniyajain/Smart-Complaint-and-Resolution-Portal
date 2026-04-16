
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

                  <div className="table-container">
  <table className="complaint-table">
    <thead>
      <tr>
        <th><FileText size={16}/> Title</th>
        <th><Folder size={16}/> Category</th>
        <th><RefreshCw size={16}/> Status</th>
        <th><Calendar size={16}/> Date</th>
        <th><Eye size={16}/> Action</th>
      </tr>
    </thead>

    <tbody>
      {loading && (
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>Loading...</td>
        </tr>
      )}

      {!loading && complaints.length === 0 && (
        <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>
            No complaints found 🚫
          </td>
        </tr>
      )}

      {!loading && complaints.slice(0,5).map((c) => (
        <tr key={c._id}>
          <td>{c.title}</td>
          <td>{c.category}</td>
          <td className={`status-${c.status}`}>{c.status}</td>
          <td>{new Date(c.createdAt).toLocaleDateString()}</td>
          <td>
            <button onClick={() => navigate(`/complaint/${c._id}`)}>
              View
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>  
  
                  </div>
                  
              </div>
            </div>

          </div>
      )
  }

  export default Dashboard_user;
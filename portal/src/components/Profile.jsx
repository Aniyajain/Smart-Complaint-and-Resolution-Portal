import Navbar from "../CompEveryWhere/Navbar";
import { useEffect, useState } from "react";
import "./Profile.css";
import profileimg from "../assets/profile-img.jpg";

function Profile() {

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    phone: "",
    role: "Student"
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser({
        firstName: storedUser.firstName || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        role: storedUser.role || "Student"
      });
    }
  }, []);

  return (
    <div id="main">
      <Navbar type="dashboard"/>

      <div className="profile-section">
        <div id="headingbox">
          <h1>Welcome Back to your Profile....!!!</h1>
        </div>

        <div className="Profilecontent">

          <div>
            <img src={profileimg} alt="profile" />
          </div>

          <div className="info">
            <div className="infop1">
              <h1>Personal Information</h1>
              <button>Edit</button>
            </div>

            <div className="infop2">

              <label className="labels">Name</label>
              <input type="text" className="inputs" value={user.firstName} readOnly />

              <label className="labels">Email</label>
              <input type="email" className="inputs" value={user.email} readOnly />

              <label className="labels">Password change</label>
              <input type="password" className="inputs" placeholder="********" />

              <label className="labels">Contact No.</label>
              <input type="number" className="inputs" value={user.phone} readOnly />

              <label className="labels">Role</label>
              <input type="text" className="inputs" value={user.role} readOnly />

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Profile;
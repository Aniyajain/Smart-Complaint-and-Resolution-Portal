import Navbar from "../CompEveryWhere/Navbar";
import { Link } from "react-router-dom";
import "./Profile.css";
import profileimg from "../assets/profile-img.jpg";


function Profile(){
    return (
        <div id="main">
          <Navbar  type="dashboard"/>
          <div className="profile-section">
            <div id="headingbox">
             <h1>Welcome Back to your Profile....!!!</h1>
            </div>
            <div className="Profilecontent">
                
                <div><img src={profileimg} alt="loading....." />
                {/* <label>Change Image :</label>
                <input type="file" placeholder="Change image" /> */}
                </div>
                <div className="info">
                    <div className="infop1"><h1>Personal Information </h1>
                    <button>Edit</button></div>

                    <div className="infop2">
                        <label className="labels">Name</label>
                    <input type="text" className="inputs" />

                    <label className="labels">Email</label>
                    <input type="email" className="inputs" />

                    <label className="labels">Password change</label>
                    <input type="password"className="inputs"  />

                    <label className="labels">Contact No. </label>
                    <input type="number"  className="inputs" />

                    <label className="labels">Role</label>
                    <input type="text" className="inputs"  />
                    </div>
                </div>

            </div>

          </div>
        </div>
    )
};
export default Profile;
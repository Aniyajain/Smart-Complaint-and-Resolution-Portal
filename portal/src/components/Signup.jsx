import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Navbar from "../CompEveryWhere/Navbar";
import "./Signup.css";

function Signup(){
    return(
        <div id="main">

            <Navbar type="signup"  />

            <div id="box">

                {/* Header */}
                <div id="signup-header">
                    <h1>Sign-Up</h1>
                    <p>Join our Smart Complaint System</p>
                </div>

                <div id="content-div">

                    <label className="label-box">
                        <FaUser /> First Name
                    </label>
                    <input type="text" placeholder="First Name" className="input" />

                    <label className="label-box">
                        <FaUser /> Last Name
                    </label>
                    <input type="text" placeholder="Last Name" className="input" />

                    <label className="label-box">
                        <FaEnvelope /> Email
                    </label>
                    <input type="email" placeholder="Email-Id" className="input"/>

                    <label className="label-box">
                        <FaLock /> Password
                    </label>
                    <input type="password" placeholder="Enter Password" className="input" />

                    {/* Terms */}
                    <div className="terms">
                        <input type="checkbox"/>
                        <label>Agree to Terms and Condition</label>
                    </div>

                    <button className="signup-btn">Signup</button>

                    <p>
                        Already signed up? <Link to="/login" style={{color: "rgb(37,107,226)"}}>Login</Link>
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Signup;
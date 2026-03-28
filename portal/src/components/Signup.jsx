import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import Navbar from "../CompEveryWhere/Navbar";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup(){
    const [formData , setFormData] = useState({firstName:"", LastName:"", email:"", password:""});
    const navigate = useNavigate();
    const [error , setError] = useState("");

    // functions
    const handleSignup =()=>{
        const isEmpty = Object.values(formData).some((value)=> value.trim() === "");
        if(isEmpty){
            setError("Fill all credentials");
            return;
        }
        setError("");
         localStorage.setItem("user", JSON.stringify(formData));
        console.log(formData);
        alert("SignUp Successful !!!");
        
        navigate("/login");
    };
    const handleChange = (e)=>{
        setError("");
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
           

        });
    };
    
    return(
        <div id="main">

            <Navbar type="signup"  />

            <div  className="form-wrapper">
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
                    <input type="text" placeholder="First Name" className="input" name="firstName" onChange={handleChange}/>

                    <label className="label-box">
                        <FaUser /> Last Name
                    </label>
                    <input type="text" placeholder="Last Name" className="input" name="LastName" onChange={handleChange}/>

                    <label className="label-box">
                        <FaEnvelope /> Email
                    </label>
                    <input type="email" placeholder="Email-Id" className="input" name="email" onChange={handleChange}/>

                    <label className="label-box">
                        <FaLock /> Password
                    </label>
                    <input type="password" placeholder="Enter Password" className="input" name="password" onChange={handleChange} />

                    {/* Terms */}
                    <div className="terms">
                        <input type="checkbox"/>
                        <label>Agree to Terms and Condition</label>
                    </div>

                    {error && <p className="error-text">{error}</p>}

                    <button className="signup-btn" onClick={handleSignup}>Signup</button>

                    <p>
                        Already signed up? <Link to="/login" style={{color:"#38BDF8"}}>Login</Link>
                    </p>

                </div>

            </div>
            </div>
        </div>
    )
}

export default Signup;
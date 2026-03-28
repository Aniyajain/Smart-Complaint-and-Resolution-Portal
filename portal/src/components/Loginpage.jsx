import { Link } from "react-router-dom";
import Navbar from "../CompEveryWhere/Navbar";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
import { useState } from "react";



function Loginpage(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password , setPassword] = useState("");

    const handleLogin = ()=>{
        //later on backend logic here
        navigate("/dashboard");
        if(email === "admin@gmail.com" && password === "1234"){
            navigate("/dashboard");
        }else{
            alert("Invalid Credentials ");
            navigate("/login");
        }
    };
    return(
        <div id="c1">

          
             <Navbar  type="loginpage" />

            <div id="login-box">
                <div ><h1>Welcome Back </h1>
                <p  style={{color:"#94A3B8"}}>Login  to your account </p></div>


                <label className="label-box"><FaEnvelope className="label-icon"/>Email Address<span className="required">*</span></label>

                <div id="bothinput" >
                     <input
                    type="email"
                    placeholder="Enter your Email-Id"
                    className="input"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />

                <br />
                <label className="label-box" ><FaLock className="label-icon"/> Password<span className="required">*</span></label>

                <input
                    type="password"
                    placeholder="Enter your Password"
                    className="input"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
                </div>



                <br />

                <button onClick={handleLogin} className="login-btn">Login</button>

                <p>
                    Forget <Link to="#" className="link" style={{color:"black"}}>Password?</Link>
                </p>

                <p>
                    Don't have an account?
                    <Link to="/signup" className="link"> Sign-up</Link>
                </p>
            </div>

        </div>
    )
}

export default Loginpage;
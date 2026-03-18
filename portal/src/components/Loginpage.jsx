import { Link } from "react-router-dom";
import Navbar from "../CompEveryWhere/Navbar";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";

function Loginpage(){
    const navigate = useNavigate();

    const handleLogin = ()=>{
        //later on backend logic here
        navigate("/dashboard");
    };
    return(
        <div id="c1">

            {/* Navbar */}
             <Navbar  type="loginpage" />

            <div id="login-box">
                <div style={{background: "rgb(37,107,226)", color:"white", borderRadius: "10px", height:"130px", textAlign:"center", padding: "5px" }}><h1>Welcome Back </h1>
                <p >Login  to your account </p></div>


                <label className="label-box"><FaEnvelope className="label-icon"/>Email Address<span className="required">*</span></label>

                <div id="bothinput" >
                     <input
                    type="email"
                    placeholder="Enter your Email-Id"
                    className="input"
                />

                <br />
                <label className="label-box" ><FaLock className="label-icon"/> Password<span className="required">*</span></label>

                <input
                    type="password"
                    placeholder="Enter your Password"
                    className="input"
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
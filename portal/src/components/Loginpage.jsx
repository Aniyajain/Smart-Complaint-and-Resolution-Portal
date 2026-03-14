import { Link } from "react-router-dom";
import  "./Loginpage.css";
function Loginpage(){
    return(
        <div id="c1">
            <nav>
                 <h1>Smart Complaint and Resolution Portal</h1>

                <div id="nav-links">
                <Link to="/">Login/Sign-up</Link>
                 <Link to="/home">Home </Link>
                </div>

               
            </nav>
             <div id="login-box">
                    <h1>Login / Sign-up</h1>
                    <input type="email" placeholder="Enter your Email-Id"  className="input"style={{}}/>
                    <br />
                    <br />
                    
                    <input type="password" placeholder="Enter your Password" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px"}} />
                    <br />
                    <br />
                    <br />
                    <button type="submit" style={{width: "150px", height: "40px", borderRadius:"10px", backgroundColor: "rgb(37, 107, 226)", color: "white", fontWeight: "bold"}}>Login</button>
                    <p> Forget <Link to="#" style={{color: "black"}}>Password?</Link></p>
                    
                    <p >Don't have  an account? <Link  to="/signup" style={{color: "black"}}>Sign-up</Link></p>
                    

                </div>
           

        </div>
    )
}

export default Loginpage;
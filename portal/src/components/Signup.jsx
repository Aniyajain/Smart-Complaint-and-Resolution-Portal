import { Link } from "react-router-dom";
import "./Signup.css"
function Signup(){
    return(
        <div id="main">
                        <nav>
                 <h1>Smart Complaint and Resolution Portal</h1>

                <div id="nav-links">
                <Link to="/">Login/Sign-up</Link>
                 <Link to="/home">Home </Link>
                </div>

               
            </nav>
            <div id="box">
                <h1 style={{color: "blue"}}>Sign-Up</h1>
                <input type="text" placeholder=" First Name" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px", margin: "15px"}} />
                <br />
                <input type="text" placeholder=" Last Name" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px", margin: "15px"}} />
                <br />
                <input type="email" placeholder=" Email-Id" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px", margin: "15px"}}/>
                 <br />
                <input type="password" placeholder="Choose Password" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px", margin: "15px"}} />
                <br />
                <input type="password" placeholder="Confirm Password" style={{border: "2px solid black", width: "350px", borderRadius: "10px", height: "20px", padding: "8px", margin: "15px"}} />
                <br />
                <input type="checkbox"/>
                <label >Agreed to Terms and Condition</label>
                <br />
                <br />
                <button type="submit" style={{background: "blue", color:"white", width: "180px", height: "30px", borderRadius: "10px"}}>Signup</button>
                <br />
                <p>Already a signup? <Link to="/">Login</Link></p>
            </div>
        </div>
    )
}

export default Signup;
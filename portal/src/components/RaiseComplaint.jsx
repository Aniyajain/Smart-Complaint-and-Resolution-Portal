import { Link } from "react-router-dom";
import "./RaiseComplaint.css";
import Navbar from "../CompEveryWhere/Navbar";
function RaiseComplaint(){
    return(
        <div id="main">
            <Navbar type ="dashboard"/>
            <div>
                <div className="Header">
                    <h2><div>⚠️</div>Raise a Complaint</h2>
                    <div><div>📄</div>Report an issue quickly and track its resolution</div>
                </div>
                <div className="body">
                    <form id="body-content">
                        <div><h1>Complaint Form</h1></div>
                       <div id="info-part">
                         <label className="input-title">Complaint Title : </label>
                        <input type="text" placeholder=" Enter short title of Complaint....." className="input-info" />

                        <label className="input-title">Category</label>
                        <select className="input-info" >
                            <option value=""> Select  Category of Complaint </option>
                            <option value="">Technical Issue</option>
                            <option value="">Infrastructure</option>
                            <option value="">Cleanliness</option>
                            <option value="">Security</option>
                            <option value="">Other</option>
                        </select>
                        <label className="input-title">Description : </label>
                        <textarea placeholder="Describe your issue in detail…" className="input-info"></textarea>

                        <label className="input-title">Location : </label>
                        <input type="text" placeholder="Enter location of the issue"  className="input-info"/>

                        <label className="input-title" >Upload Image / File : </label>
                        <input type="file" accept=".jpg,.png,.pdf,.doc,.docx" className="input-info"/>

                        <label className="input-title">Priority : </label>
                        <input type="radio" color="green"   />
                        <label className="input-title" >Low </label>
                        <input type="radio" color="yellow"  />
                        <label className="input-title">Medium </label>
                        <input type="radio" color="red"  />
                        <label className="input-title">High</label>

                        <button type="submit">Submit </button>
                       </div>

                    </form>
                </div>
            </div>

        </div>
    )
}
export default RaiseComplaint;
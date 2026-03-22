import { Link } from "react-router-dom";
import "./RaiseComplaint.css";
import Navbar from "../CompEveryWhere/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function RaiseComplaint(){
    const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("🎉 Complaint submitted successfully!");

    e.target.reset();
};
    return(
        <div id="main">
            <Navbar type ="dashboard"/>
            <div>
                <div className="Header">
                    <h2><span>⚠️</span>Raise a Complaint</h2>
                    <div>📄Report an issue quickly and track its resolution</div>
                </div>
                <div className="body">
                    <form id="body-content" onSubmit={handleSubmit}>
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
                        <div className="upload-box">
  <p>📁 Drag & Drop or Click to Upload</p>
  <input type="file"  accept=".jpg,.png,.pdf,.doc,.docx"/>
</div>
                       

                        <div className="input-group">
  <label className="input-title">⚠️ Priority</label>

  <div className="priority-group">
    <label className="priority low">
      <input type="radio" name="priority" value="low" />
      Low
    </label>

    <label className="priority medium">
      <input type="radio" name="priority" value="medium" />
      Medium
    </label>

    <label className="priority high">
      <input type="radio" name="priority" value="high" />
      High
    </label>
  </div>
</div>

                        <button type="submit">Submit </button>
                       </div>
                       

                    </form>
                     
                </div>
            </div>

        </div>
    )
}
export default RaiseComplaint;
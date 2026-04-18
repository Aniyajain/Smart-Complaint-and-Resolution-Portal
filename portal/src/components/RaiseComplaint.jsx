import { createComplaint } from "../api/complaintApi";

import { Link } from "react-router-dom";
import "./RaiseComplaint.css";
import Navbar from "../CompEveryWhere/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RaiseComplaint(){
 

const navigate = useNavigate();
    const[complaint , setComplaint] = useState({
        title:"",
        category: "",
        description : "",
        location:"",
        priority: ""
    });
    const handleChange = (e)=>{
        setComplaint({
            ...complaint,
            [e.target.name]:e.target.value
        });
    };
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.email) {
  toast.error("User not logged in");
  return;
}
   const handleSubmit = async (e) => {    
  e.preventDefault();

  const isEmpty = Object.values(complaint).some(
    (value) => value.trim() === ""
  );

  if (isEmpty) {
    toast.error("Fill all Fields");
    return;
  }

  try {
    const complaintData = {
      ...complaint,
      status: "Pending",
      email: user?.email   // 🔥 VERY IMPORTANT
    };

console.log("Sending Data:", complaintData);

    // 🔥 API CALL
    const res = await createComplaint(complaintData);

    toast.success("🎉 Complaint submitted successfully!");

    // reset form
    setComplaint({
      title: "",
      category: "",
      description: "",
      location: "",
      priority: ""
    });

    // optional redirect
    setTimeout(() => {
      navigate("/my-complaints");
    }, 1500);

  } catch (err) {
    console.error(err);
    toast.error("Error submitting complaint");
  }
};
    return(
        <div id="main">
            <Navbar type ="dashboard"/>
                <ToastContainer position="top-right" autoClose={2000} />
            <div  className="raise-container">
                <div className="Header">
                    <h2><span>⚠️</span>Raise a Complaint</h2>
                    <div>📄Report an issue quickly and track its resolution</div>
                </div>
                <div className="body">
                    <form id="body-content" onSubmit={handleSubmit}>
                        <div><h1>Complaint Form</h1></div>
                       <div id="info-part">
                         <label className="input-title">Complaint Title : </label>
                        <input type="text" placeholder=" Enter short title of Complaint....." className="input-info" name="title"
  onChange={handleChange}  value={complaint.title}
 />

                        <label className="input-title">Category</label>
                        <select className="input-info" name="category"
  onChange={handleChange} value={complaint.category}
 >
                            <option value=""> Select  Category of Complaint </option>
                            <option value="Technical Issue">Technical Issue</option>
                            <option value="Infrastructure">Infrastructure</option>
                            <option value="Cleanliness">Cleanliness</option>
                            <option value="Security">Security</option>
                            <option value="Other">Other</option>
                        </select>
                        <label className="input-title">Description : </label>
                        <textarea placeholder="Describe your issue in detail…" className="input-info" name="description"
  onChange={handleChange} value={complaint.description}
></textarea>

                        <label className="input-title">Location : </label>
                        <input type="text" placeholder="Enter location of the issue"  className="input-info" name="location"
  onChange={handleChange} value={complaint.location}
/>

                        <label className="input-title" >Upload Image / File : </label>
                        <div className="upload-box">
  <p>📁 Drag & Drop or Click to Upload</p>
  <input type="file"  accept=".jpg,.png,.pdf,.doc,.docx"/>
</div>
                       

                        <div className="input-group">
  <label className="input-title">⚠️ Priority</label>

  <div className="priority-group">
    <label className="priority low">
      <input type="radio" name="priority" value="low" onChange={handleChange} checked={complaint.priority === "low"}/>
      Low
    </label>

    <label className="priority medium">
      <input type="radio" name="priority" value="medium" onChange={handleChange} checked={complaint.priority === "medium"}/>
      Medium
    </label>

    <label className="priority high">
      <input type="radio" name="priority" value="high" onChange={handleChange}  checked={complaint.priority === "high"}/>
      High
    </label>
  </div>
</div>

                        <button type="submit">Submit </button>
                       </div>
                       

                    </form>
                     
                </div>
            </div>
             {/* <ToastContainer position="top-right" autoClose={2000} /> */}

        </div>
    )
}
export default RaiseComplaint;
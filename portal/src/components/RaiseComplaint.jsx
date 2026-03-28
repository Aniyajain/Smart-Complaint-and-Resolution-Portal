import { Link } from "react-router-dom";
import "./RaiseComplaint.css";
import Navbar from "../CompEveryWhere/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function RaiseComplaint(){
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
    const handleSubmit = (e) => {    
    e.preventDefault();
    const isEmpty = Object.values(complaint).some((value)=> value.trim()==="");
    if(isEmpty){
        toast.error("Fill all Fields");
        return;
    }
     console.log(complaint);
    toast.success("🎉 Complaint submitted successfully!");
    setComplaint({
  title: "",
  category: "",
  description: "",
  location: "",
  priority: ""
});
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
                        <input type="text" placeholder=" Enter short title of Complaint....." className="input-info" name="title"
  onChange={handleChange}
 />

                        <label className="input-title">Category</label>
                        <select className="input-info" name="category"
  onChange={handleChange}
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
  onChange={handleChange}
></textarea>

                        <label className="input-title">Location : </label>
                        <input type="text" placeholder="Enter location of the issue"  className="input-info" name="location"
  onChange={handleChange}
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
      <input type="radio" name="priority" value="low" onChange={handleChange} />
      Low
    </label>

    <label className="priority medium">
      <input type="radio" name="priority" value="medium" onChange={handleChange}/>
      Medium
    </label>

    <label className="priority high">
      <input type="radio" name="priority" value="high" onChange={handleChange} />
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
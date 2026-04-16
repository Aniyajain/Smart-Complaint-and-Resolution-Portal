import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Home from "./components/Home";
import Register from "./components/RaiseComplaint";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Track from "./components/MyComplaint";
import Interface from "./components/Interface";
import Dashboard_user from "./Pages/Dashboard_user";
function App(){
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/raiseComplaint" element={<Register />} />
           <Route path="/my-complaints" element={<Track />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/dashboard" element={<Dashboard_user />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Home from "./components/Home";
import Register from "./components/Register";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Track from "./components/Track";
function App(){
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
           <Route path="/track" element={<Track />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

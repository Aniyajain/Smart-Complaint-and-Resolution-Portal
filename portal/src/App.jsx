import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginpage from "./components/Loginpage";
import Home from "./components/Home";
import Register from "./components/Register";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Track from "./components/Track";
import Interface from "./components/Interface";
function App(){
  return(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
           <Route path="/track" element={<Track />} />
            <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

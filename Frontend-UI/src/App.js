import "./App.css";
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/Profile";
import Login from "../src/Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}></Route>
      </Routes>
      <Routes>
        <Route path="/login" Component={Login}></Route>
      </Routes>
      <Routes>
        <Route path="/signup" Component={Signup}></Route>
      </Routes>
      <Routes>
        <Route path="/profile/:name" Component={Profile}></Route>
      </Routes>
    </Router>
    //   <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/profile" element={<Profile />} />
    //   <Route path="/signin" element={<Login />} />
    //   <Route path="/signup" element={<Signup />} />
    // </Routes>
  );
}

export default App;

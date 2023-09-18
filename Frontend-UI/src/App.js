import "./App.css";

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
  );
}

export default App;

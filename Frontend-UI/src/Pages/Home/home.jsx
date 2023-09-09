import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import SideBar from "../../Components/SideBar/SideBar";
import RightBar from "../../Components/RightBar/RightBar";
import Feed from "../../Components/Feed/Feed";
import "./Home.css";

function home() {
  return (
    <>
      <Topbar />
      <div className="HomeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}

export default home;

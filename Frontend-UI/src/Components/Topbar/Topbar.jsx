import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
// import Person from "../../../public/Assets/Persons/person1.webp";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topBarLeft">
        <span className="web-logo">MR Social Media</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <SearchIcon className="SearchIcon" />
          <input
            type="text"
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="link">Home Page</span>
          <span className="link">TimeLine</span>
        </div>
        <div className="topBarIcon">
          <div className="t-b-icon-item">
            <PersonIcon />
            <span>1</span>
          </div>
          <div className="t-b-icon-item">
            <ChatIcon />
            <span>1</span>
          </div>
          <div className="t-b-icon-item">
            <NotificationsIcon />
            <span>1</span>
          </div>
        </div>
        <img src="\assets\person1.jpg" className="topBarImg" alt="" />
      </div>
    </div>
  );
}

export default Topbar;

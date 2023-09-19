import React from "react";
import "./SideBar.css";
// import PersonIcon from "@mui/icons-material/Person";
import RssFeed from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Users } from "../../DummyData.js";
import Close from "../Closefri/Close";
function SideBar() {
  return (
    <div className="SideBar">
      <div className="sidebarWrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <RssFeed className="s-b-icon" />
            <span className="s-b-text">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <ChatIcon className="s-b-icon" />
            <span className="s-b-text">Chats</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <OndemandVideoIcon className="s-b-icon" />
            <span className="s-b-text">Video</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <GroupsIcon className="s-b-icon" />
            <span className="s-b-text">Groups</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <BookmarksIcon className="s-b-icon" />
            <span className="s-b-text">Bookmarks</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <HelpOutlineIcon className="s-b-icon" />
            <span className="s-b-text">HelpOutline</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <WorkOutlineIcon className="s-b-icon" />
            <span className="s-b-text">Jobs</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <EventIcon className="s-b-icon" />
            <span className="s-b-text">Event</span>
          </li>{" "}
          <li className="sidebarlistitem">
            <SchoolIcon className="s-b-icon" />
            <span className="s-b-text">School</span>
          </li>
        </ul>
        <button className="s-b-btn">Show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((closele) => (
            <Close userClose={closele} />

          ))}


        </ul>
      </div>
    </div>
  );
}

export default SideBar;

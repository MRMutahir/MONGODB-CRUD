import React from "react";
import "./RightBar.css";
import { Users } from "../../DummyData.js"
import Online from "../OnlineFri/Online";
function RightBar({ profile }) {
  return (<div className="RightBar">
    <div className="Right-Wrapper">
      <div className="Birthday-Container">
        <img src="\assets\birthdayGift.png" alt="" />
        <div className="bir-text">
          <b>SYEDHaseeb</b> and <b>Other Friends</b> have a Birthday today .
        </div>
      </div>
      <img className="r-b-add" src="\assets\add1.jpg" alt="" />
      <h1 className="o-l-fri-title">Online Friends</h1>
      <ul className="r--b-ul-fri-Lists">

        {Users.map((u) => (
          <Online users={u} />
        ))}

      </ul>
    </div>
  </div>);
}

export default RightBar;

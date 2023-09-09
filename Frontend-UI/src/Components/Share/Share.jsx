import React from "react";
import "./Share.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="\assets\person1.jpg" alt="" />
          <input
            placeholder="What's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="share-line" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;

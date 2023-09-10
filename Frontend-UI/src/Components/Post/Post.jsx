import React from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Post() {
  return (
    <div className="Post">
      <div className="PostWrapper">
        <div className="Post-top">
          <div className="p-t-left">
            <div className="p-img">
              <img
                className="post-profile-img"
                src="\assets\person3.jpg"
                alt=""
              />
            </div>
            <div className="p-name">Alex</div>
            <div className="p-date">{new Date().toLocaleDateString()}</div>
          </div>
          <MoreVertIcon />
        </div>
        <div className="Post-Center"></div>
        <div className="Post-Buttom"></div>
      </div>
    </div>
  );
}

export default Post;

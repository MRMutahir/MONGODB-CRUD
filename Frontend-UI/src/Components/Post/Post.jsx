import React, { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function Post(props) {
  console.log(props.Posts);
  console.log(props);
  const [like, addlike] = useState(20)
  function shoot() {
    addlike(like + 1)
    console.log("SALAM shoot");

  }
  return (
    <div className="Post">

      <div className="PostWrapper">
        <div className="Post-top">ٖ
          <div className="p-t-left">
            <div className="p-img">
              <img
                className="post-profile-img"
                src={props.Posts.ip_address}
                alt=""
              />
            </div>
            <div className="p-name">{props.Posts.first_name}</div>
            <div className="p-date">{new Date().toLocaleDateString()}</div>
          </div>
          <MoreVertIcon />
        </div>
        <div className="Post-Center">
          <span className="p-c-text">
            SALAM ! its my First post
          </span>
          <img className="post-image" src="\assets\center-image.jpg" alt="" />
        </div>
        <div className="Post-Buttom">
          <div className="p-b-left">
            <FavoriteIcon htmlColor="red" onClick={shoot} />
            <ThumbUpIcon htmlColor="lightblue" />
            {/* <img src="" alt="" /> */}
            <img src="" alt="" />
            <span className="likeCount">{like} people Like</span>
          </div>
          <div className="p-b-right">
            <div className="p-comments-text">20 comments</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Post;

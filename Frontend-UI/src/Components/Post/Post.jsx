import React, { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Users } from "../../DummyData.js"
function Post({ Posts }) {
  // console.log(props.Posts);
  // console.log(Posts);
  const [like, addlike] = useState(20)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  function shoot() {
    addlike(like + 1)
    console.log("SALAM shoot");
  }
  return (

    <div className="Post">

      {
        <div className="PostWrapper" key={Posts.id}>
          <div className="Post-top">ٖ
            <div className="p-t-left">
              <div className="p-img">
                <img
                  className="post-profile-img"
                  src={Users.filter((p) => p.id === Posts.userId)[0].picture}
                  alt=""
                />
                {console.log(Users.filter((p) => p.id === Posts.userId)[0].picture)}
              </div>
              <div className="p-name">{Users.filter((e) => e.id === Posts.userId)[0].first_name}</div>
              <div className="p-date">2/1</div>
            </div>
            <MoreVertIcon />
          </div>
          <div className="Post-Center">
            <span className="p-c-text">
              {Posts?.desc}
              {/* hi dear */}
            </span>
            <img className="post-image" src={Posts?.photo} alt="" />
          </div>
          <div className="Post-Buttom">
            <div className="p-b-left">
              <FavoriteIcon htmlColor="red" onClick={shoot} />
              <ThumbUpIcon htmlColor="lightblue" />
              {/* <img src="" alt="" /> */}
              {/* <img src="" alt="" /> */}
              <span className="likeCount">{Posts?.like}people Like</span>
            </div>
            <div className="p-b-right">
              <div className="p-comments-text"> {Posts?.comment}comments</div>
            </div>
          </div>
        </div>}
    </div>
  );
}

export default Post;

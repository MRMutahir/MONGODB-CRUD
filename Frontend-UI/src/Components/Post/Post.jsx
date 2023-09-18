import React, { useState } from "react";
import "./Post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import DummyData from "../../../src/DummyData"
// console.log(DummyData);

function Post() {
  let Users = [
    {
      id: 1,
      profilePicture: "assets/ahsan.jpg",
      username: "Safak Kocaoglu",
    },
    {
      profilePicture: "assets/1.jpg",
      id: 2,
      username: "Janell Shrum",
    },
    {
      id: 3,
      profilePicture: "assets/2.jpg",
      username: "Alex Durden",
    },
    {
      id: 4,
      profilePicture: "assets/3.jpg",
      username: "Dora Hawks",
    },
    {
      id: 5,
      profilePicture: "assets/4.jpg",

      username: "Thomas Holden",
    },
    {
      profilePicture: "assets/5.jpg",
      id: 6,
      username: "Shirley Beauchamp",
    },
    {
      profilePicture: "assets/ahsan.jpg",
      id: 7,
      username: "Travis Bennett",
    },
    {
      id: 8,
      profilePicture: "assets/ahsan.jpg",

      username: "Kristen Thomas",
    },
    {
      profilePicture: "assets/ahsan.jpg",
      id: 9,
      username: "Gary Duty",
    },
    {
      id: 10,
      username: "Safak Kocaoglu",
      profilePicture: "assets/ahsan.jpg",
    },
    {
      id: 1,
      desc: "Love For All, Hatred For None.",
      photo: "assets/ahsan.jpg",
      date: "5 mins ago",
      userId: 1,
      like: 32,
      comment: 9,
    },
    {
      id: 2,
      photo: "assets/2.jpg",
      date: "15 mins ago",
      userId: 2,
      like: 2,
      comment: 1,
    },
    {
      id: 3,
      desc: "Every moment is a fresh beginning.",
      photo: "assets/3.jpg",
      date: "1 hour ago",
      userId: 3,
      like: 61,
      comment: 2,
    },
    {
      id: 4,
      photo: "assets//4.jpg",
      date: "4 hours ago",
      userId: 4,
      like: 7,
      comment: 3,
    },
    {
      id: 5,
      photo: "assets/5.jpg",
      date: "5 hours ago",
      userId: 5,
      like: 23,
      comment: 5,
    },
    {
      id: 6,
      photo: "assets/post/6.jpeg",
      date: "1 day ago",
      userId: 6,
      like: 44,
      comment: 6,
    },
    {
      id: 7,
      desc: "Never regret anything that made you smile.",
      photo: "assets/post/7.jpeg",
      date: "2 days ago",
      userId: 7,
      like: 52,
      comment: 3,
    },
    {
      id: 8,
      photo: "assets/post/8.jpeg",
      date: "3 days ago",
      userId: 8,
      like: 15,
      comment: 1,
    },
    {
      id: 9,
      desc: "Change the world by being yourself.",
      photo: "assets/post/9.jpeg",
      date: "5 days ago",
      userId: 9,
      like: 11,
      comment: 2,
    },
    {
      id: 10,
      photo: "assets/post/10.jpeg",
      date: "1 week ago",
      userId: 10,
      like: 104,
      comment: 12,
    },
  ];
  // console.log(Users);
  // Users.map((ele) => {
  //   console.log(ele.username? ele.username : "alex");
  // })
  // console.log(props.Posts);
  // let { profilePicture, username } = props.Posts
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
                src="\assets\person3.jpg"
                alt=""
              />
            </div>
            <div className="p-name"> Alex</div>
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

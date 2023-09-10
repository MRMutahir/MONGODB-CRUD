import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";

function Feed() {
  return (
    <div className="Feed">
      <div className="Wrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;

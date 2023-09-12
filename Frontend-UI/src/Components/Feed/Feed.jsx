import React from "react";
import "./Feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Users } from "../../DummyData.js";

function Feed() {
  return (
    <div className="Feed">
      <div className="Wrapper">
        <Share />
        {Users.map((ele) => {
          return <Post key={ele.id} Posts={ele} />
        })}
        {/* {Users.map((ele) => { return key={ele.id} postItem={ele} /> })} */}

      </div>
    </div>
  );
}

export default Feed;

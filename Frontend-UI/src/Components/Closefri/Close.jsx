import React from 'react'
import "./Close.css"
// import Online from "../OnlineFri/Online"

function Close({ userClose }) {
    console.log(userClose);
    return (
        <div>
            {/* <Online/> */}
            <li className="FriendList-li">
                <img src={userClose.picture} alt="" />
                &nbsp; &nbsp;
                <span>{userClose.first_name}</span>
            </li>{" "}
        </div>
    )
}

export default Close
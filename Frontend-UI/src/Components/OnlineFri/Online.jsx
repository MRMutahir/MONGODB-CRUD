import React from 'react'
import "./Online.css"
function Online({ users }) {
    // console.log(props);
    console.log(users.first_name);
    console.log(users.picture);
    return (
        <li>
            <div className="r-b-profile-img-container">
                <img className="r-b-profile-img"
                    src={users.picture} alt="" />
                <span className="r-b-Online"></span>
                <span className="r-b-UserName">{users.first_name}</span>
            </div>
        </li>
    )
}

export default Online
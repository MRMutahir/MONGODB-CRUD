import React from 'react'
import "./Online.css"
function Online(props) {
    console.log(props);
    // console.log(props.users.first_name);
    // console.log(props.users.picture);
    return (
        <li>
            <div className="r-b-profile-img-container">
                <img className="r-b-profile-img"
                   alt="" />
                <span className="r-b-Online"></span>
                <span className="r-b-UserName"></span>
            </div>
        </li>
    )
}

export default Online
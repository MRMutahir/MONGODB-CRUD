import React from 'react'
import "./Profile.css"
import Topbar from "../../Components/Topbar/Topbar";
import SideBar from "../../Components/SideBar/SideBar";
import RightBar from "../../Components/RightBar/RightBar";
import Feed from "../../Components/Feed/Feed";
function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="p-r-top">
                        <div className="p-r-t-cover">
                            <img  className='pro-cover-image'   src="\assets\bgfacebook.jpeg" alt="" />
                            <img   className='pro-main-image' src="\assets\profileimagemain.jpeg" alt="" />
                        </div>
                        <div className="profile-info">
                            <h4 className='p-name'>Rock</h4>
                            <span  className='p-para'>Hello World </span>
                        </div>
                    </div>
                    <div className="p-r-buttom">
                        <Feed />
                        <RightBar  Profile  />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Profile
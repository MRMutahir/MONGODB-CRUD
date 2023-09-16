import React from 'react'
import "./Signup.css"

function Signup() {
    return (
        <div className='Login'>
            <div className="loginWrapper">
                <div className="left-side">
                    <div className="logo-name">Muhammad Mutahir</div>
                    <div className="logo-dec"> Connect IT  with SMIT</div>
                </div>
                <div className="right-side">
                    <div className="loginBox">
                        <input type="text" placeholder="Username " className="loginInput" />
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="text" placeholder="Password" className="loginInput" />
                        <input type="password" placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign up</button>

                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className='Login'>
            <div className="loginWrapper">
                <div className="left-side">
                    <div className="logo-name">Muhammad Mutahir</div>
                    <div className="logo-dec"> connect IT  with SMIT</div>
                </div>
                <div className="right-side">
                    <div className="loginBox">
                        <input type="text" placeholder="Email" className="loginInput" />
                        <input type="password" placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
import React from 'react'
import './loginreg.css'
import { useState } from 'react'

 const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">
            Sign In Page
        </div>
        <div className="underline"></div>

      </div>
      <div className="inputs">
        <div className="input">
            <img src="" alt=""/>
            <input type="text" placeholder="First Name"/>
        </div>

        <div className="input">
            <img src="" alt=""/>
            <input type="email" placeholder="Email"/>
        </div>

        <div className="input">
            <img src="" alt=""/>
            <input type="password" placeholder="Password"/>
        </div>

        <div className="input">
            <img src="" alt=""/>
            <input type="password" placeholder="Confirm Password"/>
        </div>

      </div>

       <div className="forgot-password">
        Forgot Password? <span>Click Here</span>
       </div>

      <div className="submit-container">
        <div className="submit">Sign Up!</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup

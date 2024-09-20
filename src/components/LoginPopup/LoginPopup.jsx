import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({ setShowLogin }) => {

    const [ currState, setCurrState ] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
            {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Tạo tài khoản" : "Login" }</button>
        <div className='login-popup-condition'>
            <input type="checkbox" required />
            <p>Bằng cách tiếp tục, tôi đồng ý với các điều khoản sử dụng và chính sách quyền riêng tư.</p>
        </div>
        {currState === "Login"
        ? <p>Tạo một tài khoản mới? <span onClick={() => setCurrState("Sign Up")}>Bấm vào đây</span></p>
        : <p>Đã có tài khoản? <span onClick={() => setCurrState("Login")}>Bấm vào đây</span></p>
        }
      </form>
    </div>
  )
}

export default LoginPopup

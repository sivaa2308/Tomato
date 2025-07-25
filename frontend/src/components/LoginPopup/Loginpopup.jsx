import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({ setlogin }) => {
  const [current, setcurrent] = useState("Sign Up")

  return (
    <div className='login-popup' id='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h1 >{current}</h1>
          <img onClick={() => setlogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {current==="Sign Up"?<input type="text" placeholder='Your Name..' required />:<></>}
            <input type="email" placeholder='Your email..' required />
            <input type="Password" placeholder='Your Password..' required />
        </div>
        <button>{current==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By countinuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {current==="Login"?<p>Create New account? <span onClick={() => setcurrent("Sign Up")}>Click here</span></p>:
        <p>Already have an account? <span onClick={() => setcurrent("Login")}>Login here</span></p>

        }
               
      </form>
    </div>
  )
}

export default Loginpopup

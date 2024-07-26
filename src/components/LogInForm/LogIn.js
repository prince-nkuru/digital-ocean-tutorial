import React, { useState } from "react"
import './LogIn.css'

const LogIn = () => {
  const [action, setAction] = useState('sign Up');
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === 'Login'? <div></div>: <div className="input-place">
          <input placeholder="enter a name" type="text"/>
        </div>}
       
        <div className="input-place">
          <input placeholder="enter email" type="email"/>
        </div>
        <div className="input-place">
          <input placeholder="enter password" type="password"/>
        </div>
      </div>
      {action === 'Sign Up'? <div></div>:<div className="forgot">forgot password? <span>click here !</span></div> }
      
      <div className="submit-group">
        <div className= {action === 'Sign Up'? 'submit gray':'submit' } onClick={() => {setAction('Login')}}>Login</div>
        <div className= {action === 'Login'? 'submit gray':'submit' } onClick={() => {setAction('Sign Up')}}>Sign Up</div>
      </div>
    </div>
  )
}

export default LogIn;


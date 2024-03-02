import React, { useState } from 'react'
import './Auth.css'
import user_icon from '../Assets/user.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';


export const Auth = () => {

const [action,setAction] = useState('Sign Up');

  return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>

            {action==='Login'?<div></div>:<div className='input'>
                <img src={user_icon} alt=''></img>
                <input type='text' placeholder='Name'/>
            </div>}
            

            <div className='input'>
                <img src={email_icon} alt=''></img>
                <input type='email' placeholder='Email ID'/>
            </div>


            <div className='input'>
                <img src={password_icon} alt=''></img>
                <input type='password' placeholder='Password'/>
            </div>

        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">Frogot Password ?</div>}
        
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
            <div className={action==="Login"?"submit":"submit gray"} onClick={()=>{setAction('Login')}}>Login</div>
        </div>
         
    </div>
  )
}


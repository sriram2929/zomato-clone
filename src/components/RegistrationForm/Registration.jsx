import React, { useState } from 'react'
import './Registration.css'
import { assets } from '../../assets/assets'

const Registration = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Sign-Up")

    return (
        <div className='registration-form'>
            <form className='registration-cont'>
                <div className='registration-title'>
                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>

                </div>
                <div className='registration-details'>
                    {currentState==="LogIn"?<></>:  <input  type='text' placeholder='Enter your Name' required></input>}
                   <input type='email' placeholder='Enter your Mail' required></input>
                    <input type='password' placeholder='Enter Your Password' required></input>

                </div>
                <button>{currentState==="Sign-Up"?"Create Account":"LogIn"}</button>
                <div className='registration-footer'>
                    <input type='checkbox' required ></input>
                    <p>By Continuing, i agree to the terms of use & privacy policy</p>
                </div>
                <div className='registration-end'>
                {
                    currentState==="LogIn"? <p>Create a new account?<span className='span' onClick={()=>setCurrentState("Sign-Up")}>Click Here</span></p>:
                    <p>Already have an account?<span className='span' onClick={()=>setCurrentState("LogIn")}>LogIn Here</span></p>
                }
                </div>
              
           
               
            </form>


        </div>

    )
}

export default Registration
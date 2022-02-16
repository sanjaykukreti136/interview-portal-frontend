import React from "react";
import axios from 'axios';
import "./reset.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from "react"
import Navbar from "../navbar/Navbar"
let Reset = ()=>{
    
    const history = useNavigate();
    const [password, passwordSet] = useState("")
    const [email, emailSet] = useState("");
    // const [loading, setLoading] = useState(false);
    function  handleLogin() {
        
    }
    return (
        <>
        <div className="ou">
            <div className="left">
                <img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?w=740" alt="" />
            </div>
        <div className="container grey">
            <div className="form-container">
                <div className='h1Box'>
                    <h1 className='h1'>RESET PASSWORD</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Email</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleLogin}>
                        Send OTP
                    </button>
                    <div className="entryBox">
                        <div className="entryText">OTP</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => passwordSet(e.target.value)} />
                    </div>
                    <button className="loginBtn  form-button" type="submit" onClick={handleLogin}>
                        Verify
                    </button>

                </div>
            </div>
        </div>
        </div>
     </>
    )
}

export default Reset;
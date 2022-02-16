import "./create.css"
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/Navbar";

let Create = ()=>{
      
    const history = useNavigate();
    const [name, nameSet] = useState("")
    const [description, descriptionSet] = useState("");
    const [skills , skillsSet] = useState("");
    const [location , locationSet] = useState("");
    const [type , setType] = useState("");

    const [loading, setLoading] = useState(false);
    async function handleLogin() {
    }
    return (
        <>
          <div className="full">
            
            <div className="container grey">
            <div className="fform-container">
                <div className='h1Box'>
                    <h1 className='h1'>POST JOB</h1>
                    <div className="line"></div>
                </div>

                <div className="loginBox">
                    <div className="entryBox">
                        <div className="entryText">Name</div>
                        <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => nameSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Description</div>
                        <input className="email input" type="text" name="name" placeholder="Your Name" required="" onChange={(e) => descriptionSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Location</div>
                        <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => locationSet(e.target.value)} />
                    </div>
                    <div className="entryBox">
                        <div className="entryText">Skills</div>
                        <input className="password input" type="password" name="Password" placeholder="Seperated by commas HTML,CSS" onChange={(e) => skillsSet(e.target.value)} />
                    </div>
                    <div className="entryText">Select Type</div>
                    <select id="ddlViewBy" onChange={(e)=>{
                        setType(e.currentTarget.value);
                    }} >
                        <option value="Recruiter"  >Intern</option>
                        <option value="Student" selected="selected" 
                        >Full Time</option>
                        {/* <option value="3">test3</option> */}
                    </select>
                    <div className='otherOption'>
                        <button className="otherbtns form-button" type="submit" >
                            Post
                            {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                        </button>

                    </div>
                </div>
            </div>
        </div>
          </div>
        </>
    )
}

export default Create;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"
import { Link } from "react-router-dom";
let Home = ()=>{
    let history = useNavigate();
    return <>

        <div className="main" >
            <div className="left">
            <h1>Start Your Journey With AI-CODE</h1>
                <div className="small">

                    <div className="rec">
                        <h4>For Recruiters</h4>
                        <p>Hire Top Talents from our platforms. We are the marketing leading technical interview platform.</p>
                        <button > <Link to="/post" >Start</Link> </button>
                    </div>
                    <div className="stu">
                        <h4>For Student</h4>
                        <p>Hire Top Talents from our platforms. We are the marketing leading technical interview platform.</p>
                        <button  ><Link to="/jobs" >Start</Link></button>
                    </div>
                </div>
            </div>
            <div className="right">
            <img src="https://images.all-free-download.com/images/graphicwebp/job_interview_background_candidate_icon_cartoon_character_6838338.webp" alt="" />
            </div>
        </div>

       
    </>
}

export default Home;
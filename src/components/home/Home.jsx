import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../navbar/Navbar";
import { AuthContext } from "../authcontext/AuthProvider";
let Home = () => {
  let history = useNavigate();

  let { get_jobs, jobs, setId } = useContext(AuthContext);

  async function f() {
    await setId();
  }

  f();

  return (
    <>
      <div className="main">
        <div className="left">
          <h1>Start Your Journey With AI-CODE</h1>
          <div className="small">
            <div className="rec">
              <h4>For Recruiters</h4>
              <p>
                Hire Top Talents from our platforms. We are the marketing
                leading technical interview platform.
              </p>
              <button>
                {" "}
                <Link to="/profile">Start</Link>{" "}
              </button>
            </div>
            <div className="stu">
              <h4>For Student</h4>
              <p>
                Hire Top Talents from our platforms. We are the marketing
                leading technical interview platform.
              </p>
              <button>
                <Link to="/profile">Start</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://images.all-free-download.com/images/graphicwebp/job_interview_background_candidate_icon_cartoon_character_6838338.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Home;

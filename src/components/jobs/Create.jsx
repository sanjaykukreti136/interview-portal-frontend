import "./create.css";
import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../authcontext/AuthProvider";
let Create = () => {
  const history = useNavigate();
  const [user, setUser] = useState([]);
  const [name, nameSet] = useState("");
  const [description, descriptionSet] = useState("");
  const [skills, skillsSet] = useState("");
  const [location, locationSet] = useState("");
  const [type, setType] = useState("FTE");
  const { get_user, post_job } = useContext(AuthContext);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      console.log(JSON.parse(user));
      let data = JSON.parse(user);

      console.log(Object.keys(data));
      if (data.roles != "Recruiter") {
        window.alert("You are not a Recruiter");
        history("/jobs");
      } else {
        setUser(data);
      }
    } else {
      history("/login");
    }
  }, []);
  async function create_job() {
    let user = await get_user();
    console.log(user._id);
    console.log(type);
    let data = {
      name: name,
      description: description,
      typej: type,
      location: location,
      skills: skills,
      recruiter: user._id,
    };
    console.log(data);
    let d = await post_job(data);
    console.log(d + " from create");
    window.alert("Your job added successfully");
    history("/jobs");
  }
  return (
    <>
      <div className="full">
        <div className="container grey">
          <div className="fform-container">
            <div className="h1Box">
              <h1 className="h1">POST JOB</h1>
              <div className="line"></div>
            </div>

            <div className="loginBox">
              <div className="entryBox">
                <div className="entryText">Name</div>
                <input
                  className="email input"
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required=""
                  onChange={(e) => nameSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Description</div>
                <input
                  className="email input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required=""
                  onChange={(e) => descriptionSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Location</div>
                <input
                  className="password input"
                  type=""
                  name="Password"
                  placeholder=""
                  onChange={(e) => locationSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Skills</div>
                <input
                  className="password input"
                  name="Password"
                  placeholder="Seperated by commas HTML,CSS"
                  onChange={(e) => skillsSet(e.target.value)}
                />
              </div>
              <div className="entryText">Select Type</div>
              <select
                id="ddlViewBy"
                onChange={(e) => {
                  setType(e.currentTarget.value);
                }}
              >
                <option value="Intern">Intern</option>
                <option value="FTE" selected="selected">
                  FTE
                </option>
                {/* <option value="3">test3</option> */}
              </select>
              <div className="otherOption">
                <button
                  className="otherbtns form-button"
                  type="submit"
                  onClick={create_job}
                >
                  Post
                  {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;

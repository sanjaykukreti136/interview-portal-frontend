// import { useState } from "react"
import "./signup.css";
import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { AuthContext } from "../authcontext/AuthProvider";
let Signup = () => {
  const history = useNavigate();
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [name, nameSet] = useState("");
  const [confirmPassword, confirmPasswordSet] = useState("");
  const [role, setRole] = useState("Recruiter");
  const [loading, setLoading] = useState(false);
  const { signUp } = useContext(AuthContext);
  // const {login, user} = useContext(AuthContext);

  async function handleLogin() {
    var apiBase = "";
    // console.log({email , password , confirmPassword , role , name });
    let obj = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      roles: role,
      name: name,
    };
    console.log(obj);
    let data;
    await axios
      .post(apiBase + "auth/signup", obj)
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(data);
    signUp(data.data);
  }
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="out">
        <div className="container grey">
          <div className="form-container">
            <div className="h1Box">
              <h1 className="h1">SIGNUP</h1>
              <div className="line"></div>
            </div>

            <div className="loginBox">
              <div className="entryBox">
                <div className="entryText">Email</div>
                <input
                  className="email input"
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  required=""
                  onChange={(e) => emailSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Name</div>
                <input
                  className="email input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required=""
                  onChange={(e) => nameSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Password</div>
                <input
                  className="password input"
                  type="password"
                  name="Password"
                  placeholder="**********"
                  onChange={(e) => passwordSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">Confirm Password</div>
                <input
                  className="password input"
                  type="password"
                  name="Password"
                  placeholder="**********"
                  onChange={(e) => confirmPasswordSet(e.target.value)}
                />
              </div>
              <div className="entryText">Select Role</div>
              <select
                id="ddlViewBy"
                onChange={(e) => {
                  setRole(e.currentTarget.value);
                  console.log(e.currentTarget.value);
                }}
              >
                <option value="Recruiter">Recruiter</option>
                <option value="Student">Student</option>
                {/* <option value="3">test3</option> */}
              </select>
              <div className="otherOption">
                <button
                  className="otherbtns form-button"
                  type="submit"
                  onClick={handleLogin}
                >
                  Sign Up
                  {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                </button>
                {/* <br /> */}
                <button className="otherbtns forget form-button" type="submit">
                  Login
                  {/* <Link to="/login" className="otherbtns">Login</Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="left">
          <img
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Signup;

import React, { useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../authcontext/AuthProvider";
import Navbar from "../navbar/Navbar";
import "./login.css";
let Login = () => {
  const history = useNavigate();
  const [password, passwordSet] = useState("");
  const [email, emailSet] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  async function handleLogin() {
    await login(email, password);
    history("/profile");
  }
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="main">
        <div className="img">
          <img
            src="https://img.freepik.com/free-vector/authentication-concept-illustration_114360-2168.jpg?w=740"
            alt=""
          />
        </div>
        <div className="container">
          <div className="form-container">
            <div className="h1Box">
              <h1 className="h1">LOGIN</h1>
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
                <div className="entryText">Password</div>
                <input
                  className="password input"
                  type="password"
                  name="Password"
                  placeholder="**********"
                  onChange={(e) => passwordSet(e.target.value)}
                />
              </div>
              <button
                className="loginBtn  form-button"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </button>
              <br />
              <div className="otherOption">
                <button className="otherbtns form-button" type="submit">
                  <Link to="/signup" className="otherbtns">
                    Sign Up
                  </Link>
                </button>
                {/* <br /> */}
                <button className="otherbtns forget form-button" type="submit">
                  <Link to="/forgetPassword" className="otherbtns">
                    Forget Password
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

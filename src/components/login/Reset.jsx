import React from "react";
import axios from "axios";
import "./reset.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
let Reset = () => {
  const history = useNavigate();
  const [token, tokenSet] = useState("");
  const [email, emailSet] = useState("");
  const [password, passwordSet] = useState("");
  const [confirmPassword, confirmPassSet] = useState("");
  // const [loading, setLoading] = useState(false);
  async function sendOtp() {
    var apiBase = "";
    const data = await axios.post(apiBase + "auth/forgetPassword", {
      email: email,
      // password: password,
    });
    console.log(data);
    if (data.status == 202) {
      window.alert("Email found enter your token");

      // history("/login");
    } else if (data.status != 202) {
      window.alert("Email not found , please signup");
      history("/signup");
    }
  }

  async function verifyOtp() {
    var apiBase = "";
    const data = await axios.post(apiBase + "auth/resetPassword", {
      token: token,
      password: password,
      confirmPassword: confirmPassword,
      email: email,
      // password: password,
    });
    console.log(data);
    if (data.status == 202) {
      history("/profile");
      //   history("/resetPassword");
      // history("/login");
    } else if (data.status != 202) {
      window.alert(data.message);
      history("/reset");
    }
  }

  return (
    <>
      <div className="ou">
        <div className="left">
          <img
            src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-1328.jpg?w=740"
            alt=""
          />
        </div>
        <div className="container grey">
          <div className="form-container">
            <div className="h1Box">
              <h1 className="h1">RESET PASSWORD</h1>
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
              <button
                className="loginBtn  form-button"
                type="submit"
                onClick={sendOtp}
              >
                Send OTP
              </button>
              <div className="entryBox">
                <div className="entryText">OTP</div>
                <input
                  className="password input"
                  type="password"
                  name="Password"
                  placeholder="**********"
                  onChange={(e) => tokenSet(e.target.value)}
                />
              </div>
              <div className="entryBox">
                <div className="entryText">New Password</div>
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
                  onChange={(e) => confirmPassSet(e.target.value)}
                />
              </div>

              <button
                className="loginBtn  form-button"
                type="submit"
                onClick={verifyOtp}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;

import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../authcontext/AuthProvider";
// import "./nav.css";
// import "nav.css"
import "./nav.css";
let Navbar = () => {
  const { logout } = useContext(AuthContext);
  return (
    <ul>
      <li>
        <a className="active" href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/jobs">JOBS</a>
      </li>
      <li>
        <a href="/post">POST JOB</a>
      </li>
      <li>
        <a href="/interview">INTERVIEWS</a>
      </li>
      <li style={{ float: `right`, color: "white" }}>
        <a
          onClick={() => {
            logout();
          }}
        >
          LOGOUT
        </a>
      </li>
      <li style={{ float: `right` }}>
        <a href="/profile">PROFILE</a>
      </li>
    </ul>
  );
};

export default Navbar;

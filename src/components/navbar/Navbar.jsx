import React from "react";
// import "./nav.css";
// import "nav.css"
import "./nav.css"
let Navbar = ()=>{
    return (
            <ul>

                <li><a className="active" href="/">Home</a></li>
                <li><a href="/jobs">JOBS</a></li>
                <li><a href="/post">POST JOB</a></li>
                <li><a href="/interview">INTERVIEWS</a></li>
                <li style={{ float:`right` }} ><a href="/profile">PROFILE</a></li>
            </ul>
    )
}

export default Navbar;
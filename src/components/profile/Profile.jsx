import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthProvider";

let Profile = () => {
  const [rol, setRol] = useState("");
  const history = useNavigate();
  const [url, urlSet] = useState("");
  const [email, emailSet] = useState("");
  // const [name, nameSet] = useState("");
  // const [role, setRole] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("none");

  const { jobs, id, setId, user_det, set_interviews, meet, images } =
    useContext(AuthContext);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
    } else {
      alert("YOU ARE NOT LOGGED IN");
      history("/login");
    }
  }, []);

  async function my_meetings() {
    // jobs.map((el) => {
    // if (el.email) {
    // console.log(el);
    let data = await set_interviews();
    history("/profile/interviews");
    console.log("====================================");
    console.log(meet + " from profile");
    // meet.map((el) => {
    //   console.log(el + " from pro");
    // });
    console.log("====================================");
    // }
    // });
  }

  // let data_user = jobs.pop();
  // console.log(jobs);
  // // async componentDidMount() {
  // //   const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
  // //   const json = await response.json();
  // //   this.setState({ data: json });
  // // }
  // let role = "",
  //   name = "";
  // useEffect(() => {
  //   async function f() {
  //     role = await localStorage.getItem("user");
  //     role = JSON.parse(role);
  //     name = role.email;
  //     role = role.type;
  //     console.log(role + name + "z");
  //   }
  //   f();
  //   console.log("====================================");
  //   console.log("zzzzzzzzzzzzzzzzzzzzzz");
  //   console.log("====================================");
  // });

  // console.log("====================================");
  // console.log(role + name + "y");
  // console.log("====================================");
  // // // let id;
  // // useEffect(async () => {
  // //   await f();
  // // }, []);

  // // // async function f() {
  // // //   let user = await localStorage.getItem("user");
  // // //   user = JSON.parse(user);
  // // //   id = user.id;
  // // // }

  // // // f();

  // // // console.log(id);
  // // // let userid =

  // // // let jobs;
  // // // useEffect(async () => {
  // // //   var apiBase =
  // // //     process.env === "PRODUCTION"
  // // //       ? "https://www.productionapp.com/"
  // // //       : "http://localhost:4000/";

  // // //   let user = await localStorage.getItem("user");
  // // //   // console.log(profile_jobs);
  // // //   // let user = await localStorage.getItem("user");
  // // //   user = JSON.parse(user);
  // // //   data = await axios.get(apiBase + `jobs/applied/${user.id}`);
  // // //   jobs = data.data;
  // // //   console.log(jobs);
  // // //   if (data) {
  // // //     if (data.type == "Recruiter") {
  // // //       // jobs = postedJobs;
  // // //     } else {
  // // //       // jobs = appliedJobs;
  // // //     }
  // // //     // console.log(jobs);
  // // //     // console.log(data);
  // // //   } else {
  // // //     console.log("user not found");
  // // //     history("/login");
  // // //   }
  // // // }, []);
  // // // async function handleLogin() {
  // // //   console.log(data);
  // // // }
  // // // let rol = "";
  // // let userName = "";
  // // async function f() {
  // //   let user = await localStorage.getItem("user");
  // //   console.log(user);
  // //   // rol = user.type;
  // //   // userName = user.email;
  // //   setRol(user.type);
  // //   console.log("first ye chalega");
  // //   // await setId();
  // //   // console.log(id);
  // // }

  // async function f() {
  //   let user = await localStorage.getItem("user");
  //   console.log(user);
  // }

  // console.log("====================================");
  // console.log(user_det);
  // console.log("====================================");
  // let role = jobs[jobs.length - 1].role,
  //   name = jobs[jobs.length - 1].email;
  // jobs.pop();
  // // f();
  // console.log(rol + userName);
  function replacer(key, value) {
    if (value instanceof Map) {
      return {
        dataType: "Map",
        value: Array.from(value.entries()), // or with spread: value: [...value]
      };
    } else {
      return value;
    }
  }
  function find_(a, email) {
    console.log(a + email);
    if (a == undefined) return false;
    // console.log(Object.values(a))
    // a = Object.values(a);
    a = JSON.stringify(a);
    console.log(a + "-------------------");
    a = JSON.parse(a);
    // console.log(a + "'''''''''''''''''''");
    for (let i = 0; i < a.length; i++) {
      console.log(a[i] + "...............");
    }
    return false;
  }

  console.log(jobs);
  return (
    // { f() }
    <>
      {jobs.map((el) => {
        console.log(el);

        console.log(id);
        // f();
        console.log(el.applied);
        // console.log(el);
        if (
          (jobs[jobs.length - 1].role == "Recruiter" &&
            el.recruiter == jobs[jobs.length - 1].id) ||
          (jobs[jobs.length - 1].role == "Student" &&
            el.applied_emails == jobs[jobs.length - 1].email)
        ) {
          return (
            <>
              <div className="main-box">
                <div className="img">
                  <img
                    src={images[Math.floor(Math.random() * images.length)]}
                    alt=""
                  />
                </div>
                <div className="center">
                  <h4>{el.name}</h4>
                  <p>{el.description}</p>
                </div>
                <div className="button">
                  <div className="type">
                    <button>
                      {el.type} | {el.location}
                    </button>
                  </div>
                  {jobs[jobs.length - 1].role == "Recruiter" ? (
                    <button>
                      {" "}
                      <Link to={`view/${el._id}`}>View Applications</Link>
                    </button>
                  ) : (
                    <button>Withdraw</button>
                  )}
                </div>
              </div>
            </>
          );
        }
      })}

      <button className="meetings" onClick={my_meetings}>
        MY MEETINGS
      </button>
    </>
  );
};

export default Profile;

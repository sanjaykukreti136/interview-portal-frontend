import Navbar from "../navbar/Navbar";
import "./jobs.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthProvider";

let Jobs = () => {
  const [user_role, setUserRole] = useState("");
  const history = useNavigate();
  const [resume, resumeSet] = useState("");
  const [email, emailSet] = useState("");
  const [name, nameSet] = useState("");
  const [role, setRole] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("none");
  const { jobs } = useContext(AuthContext);
  // jobs = jobs.jobs;
  console.log(jobs);
  // jobs.p
  // if ( jobs[jobs.length - 1].role != undefined) jobs.pop();
  const [jobID, setJobID] = useState("");
  const { get_user, post_job, apply_job, get_jobs, images } =
    useContext(AuthContext);
  // let jobs = [];

  // console.log(images);
  // images[Math.random() * 5];
  // images[Math.random() * 5];
  // images[Math.random() * 5];
  // images[Math.random() * 5];
  useEffect(async () => {
    let data = await localStorage.getItem("user");
    if (data) {
      setUserRole(JSON.parse(data).type);
    } else {
      alert("YOU ARE NOT LOGGED IN");
      console.log("user not found");
      history("/login");
    }
  }, []);
  async function apply() {
    let local_data = await localStorage.getItem("user");
    let id = JSON.parse(local_data).id;
    var apiBase =
      process.env === "PRODUCTION"
        ? "https://www.productionapp.com/"
        : "http://localhost:4000/";

    /////
    // get here user applied jobs

    let user_applied_jobs = await axios.get(apiBase + `jobs/applied/${id}`);

    console.log(user_applied_jobs);
    user_applied_jobs = user_applied_jobs.data.jobs;
    if (user_applied_jobs.includes(jobID) == true) {
      window.alert("You have already applied to it");
      history("/jobs");
    } else {
      /// check if id is present or not

      await axios
        .post(apiBase + `jobs/${jobID}`, { email, resume })
        .then(() => {
          window.alert("done");
          history("/jobs");
        })
        .catch((err) => {
          window.alert("not valid email");
          history("/jobs");
        });

      // let data = await axios.get(apiBase + "jobs");
      // if (jobs.length == 0) setJobs(data.data.element);
      // let user = await localStorage.getItem("user");
      // user = JSON.parse(user);
      // data = await axios.get(apiBase + `jobs/applied/${user.id}`);

      // let user = await get_user();
      // let data = {};
      // console.log(user.user);
      // data.user_id = user.user._id;

      // data.resume = resume;

      // await apply_job(jobID, data);
      // window.alert("APPLIEDD SUCCESSFULLY");
      // setStyle("none");
      history("/jobs");
    }
  }
  // //console.log(jobs + " from jobs");
  async function handleLogin() {}

  return (
    <>
      <div className="form" style={{ display: style }}>
        <div className="container grey">
          <div className="form-container">
            <div className="h1Box">
              <h1 className="h1">APPLY JOB</h1>
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
                <div className="entryText">Resume Link</div>
                <input
                  className="password input"
                  onChange={(e) => resumeSet(e.target.value)}
                />
              </div>
              <div className="otherOption">
                <button
                  className="otherbtns form-button"
                  type="submit"
                  onClick={apply}
                >
                  Submit
                  {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                </button>
                {/* <br /> */}
                <button
                  className="otherbtns forget form-button"
                  type="submit"
                  onClick={() => {
                    setStyle("none");
                  }}
                >
                  Close
                  {/* <Link to="/login" className="otherbtns">Login</Link> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {jobs.map((el) => {
        console.log(el);
        if (el.description) {
          // console.log("data value " + jobs);
          // if(el.role==undefined) {}
          return (
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
                    {el.typej} | {el.location}
                  </button>
                </div>
                <button
                  onClick={() => {
                    if (user_role == "Recruiter") {
                      window.alert("You are a recruiter you can't apply");
                      return;
                    }
                    setStyle("block");
                    setJobID(el._id);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Jobs;

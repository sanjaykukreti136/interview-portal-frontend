import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
  return useContext(AuthContext);
}
function AuthProvider({ children }) {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [id, userId] = useState(undefined);
  const [user_det, set_det] = useState({});
  const [postedJobs, setPostedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [meet, setMeet] = useState([]);
  const [profile_jobs, setProfileJobs] = useState([]);
  const [images, setImages] = useState([
    "https://freesvg.org/storage/img/thumb/tutor-and-student.png",
    "https://freesvg.org/storage/img/thumb/1540445753.png",
    "https://freesvg.org/storage/img/thumb/developper.png",
    "https://freesvg.org/storage/img/thumb/Katzenbaer_LAN-Party_pictogram.png",
    "https://freesvg.org/storage/img/thumb/student_writing.png",
  ]);
  async function set_interviews(x) {
    let user = await localStorage.getItem("user");
    user = JSON.parse(user);
    var apiBase =
      process.env === "PRODUCTION"
        ? "https://www.productionapp.com/"
        : "http://localhost:4000/";

    let meetings = await axios.post(apiBase + "jobs/meets", {
      email: user.email,
    });

    console.log(JSON.stringify(meetings.data.meetings) + " from base");
    setMeet(JSON.stringify(meetings.data.meetings));

    console.log(JSON.stringify(meet) + " all meetings");
  }

  async function setId() {
    let user = await localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      console.log(user);
      userId(user.id);
      console.log(id);
    }
  }

  async function signUp(user) {
    // userSet(user);
    await localStorage.setItem("user", JSON.stringify(user));

    userId(user.id);
    console.log(id);

    history("/profile");
  }
  async function login(email, password) {
    try {
      var apiBase =
        process.env === "PRODUCTION"
          ? "https://www.productionapp.com/"
          : "http://localhost:4000/";

      const data = await axios.post(apiBase + "auth/login", {
        email: email,
        password: password,
      });
      console.log(data);
      if (data.status == 401) {
        window.alert("Wrong password");
        history("/login");
      } else if (data.status == 404) {
        window.alert("Email not found , please signup");
        history("/signup");
      }
      console.log("====================================");
      console.log("done login");
      console.log("====================================");
      localStorage.setItem("user", JSON.stringify(data.data));
      userId(data.data.id);

      let x = localStorage.getItem("user");
      console.log(JSON.parse(x));
    } catch (err) {
      history("/signup");
    }
  }

  async function apply_job(jobid, value) {
    try {
      var apiBase =
        process.env === "PRODUCTION"
          ? "https://www.productionapp.com/"
          : "http://localhost:4000/jobs/";
      const data = await axios.post(apiBase + jobid, value);
      console.log(data);
    } catch (err) {}
  }

  async function post_job(data) {
    try {
      var apiBase =
        process.env === "PRODUCTION"
          ? "https://www.productionapp.com/"
          : "http://localhost:4000/";

      const dat = await axios.post(apiBase + "create-job", data);
      console.log("data of posted", dat);
      setJobs(await get_jobs());
      return dat;
    } catch (err) {
      //console.log(err);
    }
  }

  async function get_jobs() {
    try {
      var apiBase =
        process.env === "PRODUCTION"
          ? "https://www.productionapp.com/"
          : "http://localhost:4000/";

      let data = await axios.get(apiBase + "jobs");
      data = data.data.element;
      setJobs(data);
      console.log(jobs);
      // return data;
    } catch (err) {}
  }

  function logout() {
    localStorage.removeItem("user");
    history("/login");
    //  / userSet(null);
  }

  useEffect(async () => {
    var apiBase =
      process.env === "PRODUCTION"
        ? "https://www.productionapp.com/"
        : "http://localhost:4000/";

    let data = await axios.get(apiBase + "jobs");

    let userr = await localStorage.getItem("user");
    userr = JSON.parse(userr);
    let data_user = { role: userr.type, id: userr.id, email: userr.email };
    data.data.element.push(data_user);
    setJobs(data.data.element);
    console.log(jobs);
    let user = await localStorage.getItem("user");
    user = JSON.parse(user);
    data = await axios.get(apiBase + `jobs/applied/${user.id}`);
    // if (id == undefined) userId(user.id);

    // console.log(id);
  }, []);

  // let ii = id == undefined || null ? "" : id;
  let value = {
    loading,
    login,
    signUp,
    logout,
    jobs,
    post_job,
    apply_job,
    get_jobs,
    profile_jobs,
    id,
    setId,
    set_interviews,
    meet,
    images,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

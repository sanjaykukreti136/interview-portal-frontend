import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthProvider";

let Application = () => {
  const history = useNavigate();
  const [url, urlSet] = useState("");
  const [email, emailSet] = useState("");
  const [name, nameSet] = useState("");
  const [role, setRole] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("none");
  let id = useParams();
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  const { jobs, setId, set_interviews } = useContext(AuthContext);
  const rnd = (() => {
    const gen = (min, max) =>
      max++ &&
      [...Array(max - min)].map((s, i) => String.fromCharCode(min + i));

    const sets = {
      num: gen(48, 57),
      alphaLower: gen(97, 122),
      alphaUpper: gen(65, 90),
      special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`],
    };

    function* iter(len, set) {
      if (set.length < 1) set = Object.values(sets).flat();
      for (let i = 0; i < len; i++) yield set[(Math.random() * set.length) | 0];
    }

    return Object.assign(
      (len, ...set) => [...iter(len, set.flat())].join(""),
      sets
    );
  })();

  async function sendMeetingMail(emai, jo) {
    let email = emai;
    let job = jo;

    let user = await localStorage.getItem("user");
    user = JSON.parse(user).email;
    let rec_mail = user;
    let meet_link =
      "https://shreyshreyansh.github.io/Peer-Coder-Web/#/" + rnd(20);

    // async function handleLogin() {
    var apiBase = "https://gethiredfromhere.herokuapp.com/";
    console.log("====================================");
    console.log("ddddddddddddddd");
    console.log("====================================");
    let x = {
      email: email,
      meet_link: meet_link,
      rec_mail: rec_mail,
      job: job,
    };
    await axios
      .post(apiBase + "jobs/zoom", x)
      .then(async (res) => {
        // data = res;

        await axios.post(apiBase + "jobs/set_meetings", x);
        // addEventListener
        window.alert("mail send successfully");

        set_interviews(x);
        // alert("problem");/
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let k = 1;
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Resume</th>
            <th scope="col">Response</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((el) => {
            console.log(el);
            // const { id } = useParams();
            console.log(id);
            console.log(el._id == id.id);
            if (el._id == id.id) {
              let data = el.applied;
              console.log(data);
              return data.map((e) => {
                console.log(e.user_details.email);
                return (
                  <tr>
                    <th scope="row">{k++}</th>

                    <td>{e.user_details.email}</td>
                    <td>
                      <a href={e.user_details.resume}>
                        <button class="GFG">RESUME</button>
                      </a>
                      {/* <button
                        class="GFG"
                        onclick={`window.location.href = ${e.user_details.resume}`}
                      >
                        RESUME
                      </button> */}
                      {/* {" "}
                      <button>
                        {" "}
                        <a href={e.user_details.resume}>RESUME</a>{" "}
                      </button>{" "} */}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          sendMeetingMail(e.user_details.email, el);
                        }}
                      >
                        Meet
                      </button>
                    </td>
                  </tr>
                );
              });
            }
          })}
        </tbody>
      </table>
    </>
  );
};

export default Application;

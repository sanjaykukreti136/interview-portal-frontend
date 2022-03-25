import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import "./profile.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthProvider";

let Interviews = () => {
  const history = useNavigate();
  const [url, urlSet] = useState("");
  const [email, emailSet] = useState("");
  const [name, nameSet] = useState("");
  const [role, setRole] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("none");
  let id = useParams();
  // console.log("====================================");
  // console.log(id);
  // console.log("====================================");
  const { meet, setId } = useContext(AuthContext);
  // const rnd = (() => {
  //   const gen = (min, max) =>
  //     max++ &&
  //     [...Array(max - min)].map((s, i) => String.fromCharCode(min + i));

  //   const sets = {
  //     num: gen(48, 57),
  //     alphaLower: gen(97, 122),
  //     alphaUpper: gen(65, 90),
  //     special: [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`],
  //   };

  //   function* iter(len, set) {
  //     if (set.length < 1) set = Object.values(sets).flat();
  //     for (let i = 0; i < len; i++) yield set[(Math.random() * set.length) | 0];
  //   }

  //   return Object.assign(
  //     (len, ...set) => [...iter(len, set.flat())].join(""),
  //     sets
  //   );
  // })();

  // async function sendMeetingMail(emai, jo) {
  //   let email = emai;
  //   let job = jo;

  //   let user = await localStorage.getItem("user");
  //   user = JSON.parse(user).email;
  //   let rec_mail = user;
  //   let meet_link =
  //     "https://shreyshreyansh.github.io/Peer-Coder-Web/#/" + rnd(20);

  //   // async function handleLogin() {
  //   var apiBase =
  //     process.env === "PRODUCTION"
  //       ? "https://www.productionapp.com/"
  //       : "http://localhost:4000/";
  //   console.log("====================================");
  //   console.log("ddddddddddddddd");
  //   console.log("====================================");
  //   let x = {
  //     email: email,
  //     meet_link: meet_link,
  //     rec_mail: rec_mail,
  //     job: job,
  //   };
  //   await axios
  //     .post(apiBase + "jobs/zoom", x)
  //     .then((res) => {
  //       // data = res;
  //       window.alert("mail send successfully");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // }

  // console.log("====================================");
  console.log(meet);
  let a = JSON.parse(meet);
  a.map((el) => {
    console.log(el);
  });
  let k = 1;
  // // console.log(JSON.parse(JSON.stringify(meet)));
  // let a = JSON.parse(meet);

  // // <a href="" className="map"></a>
  // a.map((el) => {
  //   console.log(a + " from interviews");
  // });
  // console.log(a);
  // console.log("====================================");
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            {/* <th scope="col">Resume</th>
            <th scope="col">Response</th> */}
          </tr>
        </thead>
        <tbody>
          {JSON.parse(meet).map((el) => {
            return (
              <tr>
                <th scope="row">{k++}</th>
                <td> {el.email || el.rec_mail} </td>

                <td>
                  <button>
                    {" "}
                    <a href={el.meet_link}> JOIN </a>{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Interviews;

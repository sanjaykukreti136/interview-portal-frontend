import React from "react";
import Navbar from "../navbar/Navbar";
import "./profile.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';

let data = [
    {
        "name" : "front-end developer",
        "postedAt" : "2021-Jan",
        "description" : "2 year of experince",
        "url" : "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
        "type" : "Full-Time",
        "location" : "Dehradun"
    },
    {
        "name" : "backend-end developer",
        "postedAt" : "2021-July",
        "description" : "sdd year of experince",
        "url" : "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
        "type" : "Full-Time",
        "location" : "Delhi"
    },
    {
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },
       {
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },{
        "name" : "developer",
        "postedAt" : "2020-Jan",
        "description" : "year of experince",
        "url" :"https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" ,
        "type" : "Intern",
        "location" : "WFH"
       },
]

let Profile = ()=>{
    const history = useNavigate();
    const [url, urlSet] = useState("")
    const [email, emailSet] = useState("");
    const [name , nameSet] = useState("");
    const [role , setRole] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [style , setStyle] = useState("none");
    // const {login, user} = useContext(AuthContext);

   async function handleLogin() {
        // console.log({email , password , confirmPassword , role , name });
        // let data = await axios.post("https://portal-backend-op.herokuapp.com/auth/signup" ,{email , password , confirmPassword , role , name } );
        console.log(data);
    }
    return (
        <>
         <h1 id="profile">Welcome Sanjay Kukreti , Here you can see your posted jobs....</h1>
           { 
            data.map((el)=>{
                return <div className="main-box"  >

              
                        <div className="img">
                            <img src={el.url} alt="" />
                        </div>
                        <div className="center">
                            <h4>{el.name}</h4>
                            <p>{el.description}</p>

                        </div>
                        <div className="button">

                            <div className="type"><button>{el.type} | {el.location}</button></div>
                            <button  > <Link to="/job/asdfkcinirniv" >View Applications</Link></button>

                        </div>
                    </div>
            })
        
           }

       
       
       
       
       
       
        </>
    )
}

export default Profile;
import "./application.css"
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Navbar from "../navbar/Navbar";

let data = [
    {
        name : "Sanjay",
        email :"sanja@gmail.com",
        link:"click"
    },
    {
        name : "Sanjay",
        email :"sanja@gmail.com",
        link:"click"
    },
    {
        name : "Sanjay",
        email :"sanja@gmail.com",
        link:"click"
    },
    {
        name : "Sanjay",
        email :"sanja@gmail.com",
        link:"click"
    },
]

let Application = ()=>{
    return <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Resume</th>
      <th scope="col" >Response</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((el)=>{
            return <tr>
            <th scope="row">1</th>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.link}</td>
            <td><button>Meet</button></td>
            
          </tr>
        })
    }
  </tbody>
</table>
    </>
}

export default Application;
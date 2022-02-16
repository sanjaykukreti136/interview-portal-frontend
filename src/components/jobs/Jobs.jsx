import Navbar from "../navbar/Navbar";
import "./jobs.css"
import axios from 'axios';
import  { useState } from "react";
import { useNavigate } from 'react-router-dom';


let Jobs = async  ()=>{
    const history = useNavigate();
    const [url, urlSet] = useState("")
    const [email, emailSet] = useState("");
    const [name , nameSet] = useState("");
    const [role , setRole] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [style , setStyle] = useState("none");
    const [data , setJobs] = useState(null);
//    let data  = undefined;
//    let data = [];
   async function get() {
    var apiBase = process.env === 'PRODUCTION' ? 
    'https://www.productionapp.com/' : 'http://localhost:4000/'
  
     data = await axios.get(apiBase + 'jobs');
     data = data.data.element;
     return data;
    //    data = await axios.get
   }

    async function get_data(){
        console.log("enter in get data");
        let user =  localStorage.getItem("user");
        if(user){
            data = await get(user);
            setJobs(data);
            return  <>
            <div className="form"  style={{ display:style }} >
            <div className="container grey">
                <div className="form-container">
                    <div className='h1Box'>
                        <h1 className='h1'>SIGNUP</h1>
                        <div className="line"></div>
                    </div>
    
                    <div className="loginBox">
                        <div className="entryBox">
                            <div className="entryText">Email</div>
                            <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                        </div>
                        <div className="entryBox">
                            <div className="entryText">Name</div>
                            <input className="email input" type="text" name="name" placeholder="Your Name" required="" onChange={(e) => nameSet(e.target.value)} />
                        </div>
                        <div className="entryBox">
                            <div className="entryText">Resume Link</div>
                            <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => urlSet(e.target.value)} />
                        </div>
                        <div className='otherOption'>
                            <button className="otherbtns form-button" type="submit" >
                                Submit
                                {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                            </button>
                            {/* <br /> */}
                            <button className="otherbtns forget form-button" type="submit" onClick={()=>{
                                setStyle("none");
                            }} >
                                Close
                                {/* <Link to="/login" className="otherbtns">Login</Link> */}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
               { 
                data.map((el)=>{
                    console.log(el);
                  return <div className="main-box"  >
    
                  
                            <div className="img">
                                <img src={el.url }alt="" />
                            </div>
                            <div className="center">
                                <h4>{el.name}</h4>
                                <p>{el.description}</p>
    
                            </div>
                            <div className="button">
    
                                <div className="type"><button>{el.type} | {el.location}</button></div>
                                <button onClick={()=>{
                                    setStyle("block");
                                }} >Apply</button>
    
                            </div>
                        </div>
                })
            
               }    
            </> 
        }else{
            history("/login");
        }
    }

//    get_data();
    
 async function handleLogin() {
    }

    setTimeout(()=>{
        return (
            (data==undefined) ?  get_data() :  <>
               <div className="form"  style={{ display:style }} >
               <div className="container grey">
                   <div className="form-container">
                       <div className='h1Box'>
                           <h1 className='h1'>SIGNUP</h1>
                           <div className="line"></div>
                       </div>
       
                       <div className="loginBox">
                           <div className="entryBox">
                               <div className="entryText">Email</div>
                               <input className="email input" type="email" name="Email" placeholder="Your Email" required="" onChange={(e) => emailSet(e.target.value)} />
                           </div>
                           <div className="entryBox">
                               <div className="entryText">Name</div>
                               <input className="email input" type="text" name="name" placeholder="Your Name" required="" onChange={(e) => nameSet(e.target.value)} />
                           </div>
                           <div className="entryBox">
                               <div className="entryText">Resume Link</div>
                               <input className="password input" type="password" name="Password" placeholder="**********" onChange={(e) => urlSet(e.target.value)} />
                           </div>
                           <div className='otherOption'>
                               <button className="otherbtns form-button" type="submit" >
                                   Submit
                                   {/* <Link to="/signup" className="otherbtns">Sign Up</Link> */}
                               </button>
                               {/* <br /> */}
                               <button className="otherbtns forget form-button" type="submit" onClick={()=>{
                                   setStyle("none");
                               }} >
                                   Close
                                   {/* <Link to="/login" className="otherbtns">Login</Link> */}
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
               </div>
                  { 
                   data.map((el)=>{
                       console.log(el);
                     return <div className="main-box"  >
       
                     
                               <div className="img">
                                   <img src={el.url }alt="" />
                               </div>
                               <div className="center">
                                   <h4>{el.name}</h4>
                                   <p>{el.description}</p>
       
                               </div>
                               <div className="button">
       
                                   <div className="type"><button>{el.type} | {el.location}</button></div>
                                   <button onClick={()=>{
                                       setStyle("block");
                                   }} >Apply</button>
       
                               </div>
                           </div>
                   })
               
                  }    
               </> 
           
       )
    }, 5000);
    
}

export default Jobs;
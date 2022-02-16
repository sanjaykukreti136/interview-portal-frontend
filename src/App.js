import { BrowserRouter as  Router, Switch , Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
// import Home from "./components/Home";
import Login from "./components/login/Login";
import Reset from "./components/login/Reset";
import Signup from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/jobs/Create"
import Profile from "./components/profile/Profile";
import Application from "./components/profile/Application"
import AuthProvider from "./components/authcontext/AuthProvider"
// import AuthProvider from "./AuthProvider";
// import { useEffect } from "react";
// import { firestore } from "./firebase"
let  App = ()=> {


  return (
    <>

    <Router>
      <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path='/' element={< Home />}></Route>            
            <Route exact path='/login' element={<   Login />}></Route>
            <Route exact path='/signup' element={<   Signup />}></Route>
            <Route exact path='/reset' element={<   Reset />}></Route>
            <Route exact path='/jobs' element={<   Jobs />}></Route>
            <Route exact path='/post' element={<   Create />}></Route>

            <Route exact path='/profile' element={<   Profile />}></Route>
            <Route exact path="/job/asdfkcinirniv" element={ <Application /> }></Route>
          </Routes>
          </AuthProvider>
    </Router>
    </>
  );
}

export default App;
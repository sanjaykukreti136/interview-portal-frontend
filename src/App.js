import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import Jobs from "./components/jobs/Jobs";
// import Home from "./components/Home";
import Login from "./components/login/Login";
import Reset from "./components/login/Reset";
import Signup from "./components/login/Signup";
import Navbar from "./components/navbar/Navbar";
import Create from "./components/jobs/Create";
import Profile from "./components/profile/Profile";
import Application from "./components/profile/Application";
import AuthProvider from "./components/authcontext/AuthProvider";
import Meeting from "./components/interview/Meeting";
import Interviews from "./components/profile/Interviews";
import Apps from "./components/interview/components/Apps";
import { useParams } from "react-router-dom";
const { v4: uuidV4 } = require("uuid");
// import AuthProvider from "./AuthProvider";
// import { useEffect } from "react";
// import { firestore } from "./firebase"

let App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/reset" element={<Reset />}></Route>
            <Route exact path="/jobs" element={<Jobs />}></Route>
            <Route exact path="/post" element={<Create />}></Route>
            {/* <Route exact path="/interview" element={<Meeting />}></Route> */}
            <Route
              exact
              path="/interview"
              element={<Navigate to={"/interview/" + uuidV4()} />}
            ></Route>
            <Route path="/interview/:roomId" element={<Room />} />
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route
              exact
              path="profile/view/:id"
              element={<Application />}
            ></Route>
            <Route
              exact
              path="profile/interviews"
              element={<Interviews />}
            ></Route>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
};
function Room() {
  let { roomId } = useParams();
  return <Apps roomId={roomId} />;
}

export default App;

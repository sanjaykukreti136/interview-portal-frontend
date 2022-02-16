import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const AuthContext = React.createContext();
//custom hook that allows components to access context data
export function useAuth() {
    return useContext(AuthContext)
}
function AuthProvider({ children }) {
    const history = useNavigate();
    const [user, userSet] = useState("");
    const [loading, setLoading] = useState(false);
    const [jobs , setJobs] = useState([])
    function signUp(user) {
        userSet(user);
    }
    async function login(email, password) {
        try {
            var apiBase = process.env === 'PRODUCTION' ? 
            'https://www.productionapp.com/' : 'http://localhost:4000/'
        
            const data = await axios.post(apiBase + "auth/login", {
                "email": email,
                "password": password
            });
            userSet(data.data);
            localStorage.setItem("user", JSON.stringify(data.data));
            return data;
        }
        catch (err) {
            console.log(err);
        }
    }
    function logout() {
        localStorage.removeItem("user")
        userSet(null);
    }

    useEffect(async () => {
        let data = localStorage.getItem("user");
        
        // console.log(data);
        if (data) {
            userSet(JSON.parse(data));
            // history("/");
        } else {
            userSet(null);
        }
    }, [])

    const value = {
        user,
        login,
        signUp,
        logout,
        jobs
    }
    return (
        < AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider >
    )
}

export default AuthProvider
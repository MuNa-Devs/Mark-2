import { serverurl } from '../handlings/LocalConstants';

import { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from 'axios';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    // --------------------
    // Login things
    // --------------------

    const [is_logged_in, setIsLoggedIn] = useState(() => {
        const status = sessionStorage.getItem("is_logged_in");

        if (status === null) return false;
        else return (status === "true");
    });

    const setLogin = () => {
        setIsLoggedIn(true);
        sessionStorage.setItem("is_logged_in", "true");
    }

    const setLogOut = () => {
        setIsLoggedIn(false);
        sessionStorage.setItem("is_logged_in", "false");
    }

    // --------------------
    // Hospital Detals
    // --------------------
    
    const [hosp_details, setHospDetails] = useState({
        img_url: "#",
        hosp_name: "",
        address: "",
        description: "",
        phone_no: "",
        email: ""
    })

    // Get hospital info from database
    useEffect(() => {
        axios.get(serverurl + "/get/hosp_details")
        .then(res => {
            const data = res.data;

            setHospDetails({
                img_name: data.logoname,
                img_url: data.logourl,
                hosp_name: data.hosp_name,
                address: data.address,
                description: data.description,
                phone_no: data.phone_no,
                email: data.email
            });
        })
        .catch(err => {
            console.log("Error: " + err);
        });
    }, []);

    return (
        <AuthContext.Provider
            value={{
                is_logged_in,
                setLogin,
                setLogOut,
                hosp_details,
                setHospDetails
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function LoginProtector({ children }) {
    const { is_logged_in } = useContext(AuthContext);

    if (!is_logged_in)
        return <Navigate to="/login" replace />;

    return children;
}
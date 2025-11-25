
import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [is_logged_in, setIsLoggedIn] = useState(() => {
        localStorage.getItem("is_logged_in") === "true";
    });
    
    const setLogin = () => {
        setIsLoggedIn(true);
        localStorage.setItem("is_logged_in", "true");
    }
    const setLogOut = () => {
        setIsLoggedIn(false);
        localStorage.setItem("is_logged_in", "false");
    }
    
    return (
        <AuthContext.Provider value={{is_logged_in, setLogin, setLogOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export function LoginProtector({children}){
    const is_logged_in = (localStorage.getItem("is_logged_in") === "true");

    if (! is_logged_in)
        return <Navigate to="/login" replace />;
    
    return children;
}
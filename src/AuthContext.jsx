
import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [is_logged_in, setIsLoggedIn] = useState(false);

    const setLogin = () => setIsLoggedIn(true);
    const setLogOut = () => setIsLoggedIn(false);

    return (
        <AuthContext.Provider value={{is_logged_in, setLogin, setLogOut}}>
            {children}
        </AuthContext.Provider>
    )
}
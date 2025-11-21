import SignUpPage from "./pages/signup_page/SignUpPage"
import SignInPage from "./pages/signin_page/SignInPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignUpPage />}/>

                <Route path="/signup" element={<SignUpPage />} />

                <Route path="/login" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    )
}
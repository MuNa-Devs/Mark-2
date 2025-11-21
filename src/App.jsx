import SignUpPage from "./pages/signup_page/SignUpPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App(){

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignUpPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
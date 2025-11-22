import SignUpPage from "./pages/signup_page/SignUpPage";
import SignInPage from "./pages/signin_page/SignInPage";
import DashBoard from "./pages/receptionist_pages/dash_board/DashBoard";
import DoctorManagement from "./pages/receptionist_pages/doctor_management/DoctorManagement";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App(){

    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<SignUpPage />} />
                
                <Route path="/dashboard" element={<DashBoard />} />

                <Route path="/doctormanagement" element={<DoctorManagement />} />

                <Route path="/signup" element={<SignUpPage />} />

                <Route path="/login" element={<SignInPage />} />
            </Routes>
        </BrowserRouter>
    );
}

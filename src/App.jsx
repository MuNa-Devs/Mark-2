import SignUpPage from "./pages/signup_page/SignUpPage";
import SignInPage from "./pages/signin_page/SignInPage";
import DashBoard from "./pages/receptionist_pages/dash_board/DashBoard";
import DoctorManagement from "./pages/receptionist_pages/doctor_management/DoctorManagement";
import HospitalSettings from "./pages/receptionist_pages/hospital_settings/HospitalSettings";
import Dorakaledu from "./pages/page_not_found/404";
import AprilFool from "./pages/page_not_found/AprilFool";
import HomePage from "./pages/home_page/HomePage";
import Settings from "./pages/receptionist_pages/settings_page/Settings";
import { LoginProtector } from "./AuthContext";

import { Routes, Route } from "react-router-dom";
import AppointmentManagment from "./pages/receptionist_pages/appointment_management/AppointmentManagement";

export default function App() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/login" element={<SignInPage />} />

            <Route path="/dashboard" element={
                <LoginProtector>
                    <DashBoard />
                </LoginProtector>
            } />

            <Route path="/doctormanagement" element={
                <LoginProtector>
                    <DoctorManagement />
                </LoginProtector>
            } />

            <Route path="/appointmentmanagment" element={
                <LoginProtector>
                    <AppointmentManagment />
                </LoginProtector>
            } />

            <Route path="/hospitalsettings" element={
                <LoginProtector>
                    <HospitalSettings />
                </LoginProtector>
            } />

            <Route path="/settings" element={
                <LoginProtector>
                    <Settings />
                </LoginProtector>
            } />

            <Route path="/aprilfool" element={
                <LoginProtector>
                    <AprilFool />
                </LoginProtector>
            } />

            <Route path="*" element={
                <LoginProtector>
                    <Dorakaledu />
                </LoginProtector>
            } />
        </Routes>
    );
}

import SignUpPage from "./pages/signup_page/SignUpPage";
import SignInPage from "./pages/signin_page/SignInPage";
import DashBoard from "./pages/receptionist_pages/dash_board/DashBoard";
import DoctorManagement from "./pages/receptionist_pages/doctor_management/DoctorManagement";
import HospitalSettings from "./pages/receptionist_pages/hospital_settings/HospitalSettings";
import Dorakaledu from "./pages/page_not_found/404";
import AprilFool from "./pages/page_not_found/AprilFool";
import { AuthContext } from "./AuthContext";

import { Routes, Route } from "react-router-dom";
import AppointmentManagment from "./pages/receptionist_pages/appointment_management/AppointmentManagement";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

export default function App(){
    const {is_logged_in, setLogin, setLogOut} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (! is_logged_in) navigate("/login");
    }, [is_logged_in])

    return (
        <Routes>
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/login" element={<SignInPage />} />

            <Route path="/" element={<SignUpPage />} />

            <Route path="/dashboard" element={<DashBoard />} />

            <Route path="/doctormanagement" element={<DoctorManagement />} />

            <Route path="/appointmentmanagment" element={<AppointmentManagment />} />

            <Route path="/hospitalsettings" element={<HospitalSettings />} />

            <Route path="/aprilfool" element={<AprilFool />} />

            <Route path="*" element={<Dorakaledu />} />
        </Routes>
    );
}

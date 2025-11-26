import styles from './home_page.module.css';
import { AuthContext } from '../../AuthContext';

import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage(){

    // -------------------------
    // Selection and Navigation
    // -------------------------
    const navigate = useNavigate();
    const [selection, setSelection] = useState(null);

    const navToLogin = () => {
        
        if (selection === "dp") navigate('/');

        else if (selection === "rd") navigate('/login');

        else if (selection === "pa") navigate('/');
    }

    const roleSelected = (e) => setSelection(e.currentTarget.id);

    // ------------------------------
    // Access hosp_details variables
    // ------------------------------
    const {hosp_details} = useContext(AuthContext);
    
    return (
        <div className={styles.homePage}>
            <div className={styles.header}>
                <div className={styles.branding}>
                    <div className={styles.logo}>
                        <img src={hosp_details.img_url} alt="" />
                    </div>

                    <h3>{hosp_details.hosp_name}</h3>
                </div>

                <div className={styles.tools}>
                    <button>Help</button>

                    <button>Contact</button>
                </div>
            </div>

            <div className={styles.body}>
                <h1>Welcome to {hosp_details.hosp_name} Portal</h1>

                <p>Please select your role to continue</p>

                <div className={styles.roles}>
                    <div
                        id='dp' 
                        onClick={(e) => roleSelected(e)}
                        style={
                            selection === 'dp' ? {border: "1px solid #137fec"} : {border: "1px solid #3b4754"}
                        }
                    >
                        <i className="fa-solid fa-stethoscope"></i>

                        <h3>Doctor Portal</h3>

                        <p>Access patient records, manage appointments, and view schedules.</p>
                    </div>

                    <div
                        id='rd' 
                        onClick={(e) => roleSelected(e)}
                        style={
                            selection === 'rd' ? {border: "1px solid #137fec"} : {border: "1px solid #3b4754"}
                        }
                    >
                        <i className="fa-solid fa-image-portrait"></i>

                        <h3>Reception Desk</h3>

                        <p>Manage patient check-ins, schedule appointments, and handle billings</p>
                    </div>

                    <div
                        id='pa' 
                        onClick={(e) => roleSelected(e)}
                        style={
                            selection === 'pa' ? {border: "1px solid #137fec"} : {border: "1px solid #3b4754"}
                        }
                    >
                        <i className="fa-solid fa-user"></i>

                        <h3>Patient Access</h3>

                        <p>View your medical history, book appointments, and communicate with your doctor.</p>
                    </div>
                </div>

                <button onClick={navToLogin}>Proceed to Login</button>
            </div>

            <div className={styles.devBranding}>
                <p>Developed by MuNa Devs</p>
            </div>
        </div>
    );
}
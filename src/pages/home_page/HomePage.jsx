import styles from './home_page.module.css';

import { useState } from 'react';

export default function HomePage(){
    const [selection, setSelection] = useState(null);

    const roleSelected = (e) => setSelection(e.currentTarget.id);

    return (
        <div className={styles.homePage}>
            <div className={styles.header}>
                <div className={styles.branding}>
                    <div className={styles.logo}>
                        <img alt="" />
                    </div>

                    <h3>Lorem, ipsum dolor.</h3>
                </div>

                <div className={styles.tools}>
                    <button>Help</button>

                    <button>Contact</button>
                </div>
            </div>

            <div className={styles.body}>
                <h1>Welcome to {"Lorem, ipsum dolor."} Portal</h1>

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

                <button>Proceed to Login</button>
            </div>

            <div className={styles.devBranding}>
                <p>Developed by Muna Devs</p>
            </div>
        </div>
    );
}
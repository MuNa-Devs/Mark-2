import styles from './receptionist_sidebar.module.css'

import { useNavigate } from 'react-router-dom';

export default function ReceptionistSidebar(props){
    const navigate = useNavigate();

    return(
        <div className={styles.sidebar}>
            <div className={styles.ensureTogether}>
                <div className={styles.hospitalBranding}>
                    <div className={styles.logo}>
                    </div>

                    <div className={styles.hospitalName}>
                        <span><h4>Lorem ipsum dolor</h4></span>

                        <span><p>Reception desk</p></span>
                    </div>
                </div>

                <div className={styles.utilities}>
                    <button className={styles.utilOptions}
                    ><i className="fa-solid fa-list"></i></button>

                    <button className={props.page === "dashboard" ? styles.activePage: ""}
                        onClick={() => navigate("/dashboard")}
                    ><i className="fa-solid fa-table-columns"></i> <span>Dashboard</span></button>

                    <button className={props.page === "appointments" ? styles.activePage: ""}
                        onClick={() => navigate("/appointmentmanagment")}
                    ><i className="fa-solid fa-calendar-days"></i> <span>Appointments</span></button>

                    <button className={props.page === "patients" ? styles.activePage: ""}
                        onClick={() => navigate("/patients")}
                    ><i className="fa-solid fa-users"></i> <span>Patients</span></button>

                    <button className={props.page === "doctors" ? styles.activePage: ""}
                        onClick={() => navigate("/doctormanagement")}
                    ><i className="fa-solid fa-user-doctor"></i> <span>Manage Doctors</span></button>

                    <button className={props.page === "billing" ? styles.activePage: ""}
                        onClick={() => navigate("/billing")}
                    ><i className="fa-solid fa-receipt"></i> <span>Billing</span></button>

                    <button className={props.page === "hospitalsettings" ? styles.activePage: ""}
                        onClick={() => navigate("/hospitalsettings", {state: {from: props.location}})}
                    ><i className="fa-solid fa-screwdriver-wrench"></i> <span>Hospital Settings</span></button>

                    {props.page === '404' && <button className={styles.activePage}>Burra Poinda Bro</button>}
                </div>
            </div>

            <div className={styles.sidebarOptions}>
                <button className={styles.utilOptions}><i className="fa-solid fa-list"></i></button>
                <button className={styles.settings}><i className="fa-solid fa-gear"></i> <span>Settings</span></button>
                <button className={styles.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span></button>
            </div>
        </div>
    );
}
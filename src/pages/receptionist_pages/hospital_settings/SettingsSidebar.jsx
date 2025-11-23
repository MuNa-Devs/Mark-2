import styles from './settings_sidebar.module.css'

import { useNavigate } from 'react-router-dom';

export default function ReceptionistSidebar(props) {
    const navigate = useNavigate();

    return (
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

                    <button className={styles.backBtn}
                        onClick={() => navigate(props.back_location)}
                    ><i className="fa-solid fa-chevron-left"></i> <span>Back</span></button>

                    <button className={props.page === "general" ? styles.activePage : ""}
                        onClick={() => navigate("/")}
                    ><i className="fa-solid fa-hammer"></i> <span>General</span></button>

                    <button className={props.page === "op-timings" ? styles.activePage : ""}
                        onClick={() => navigate("/")}
                    ><i className="fa-solid fa-clock"></i> <span>OP Timings</span></button>

                    <button className={props.page === "holidays" ? styles.activePage : ""}
                        onClick={() => navigate("/")}
                    ><i className="fa-solid fa-calendar-days"></i> <span>Holidays</span></button>

                    <button className={props.page === "services" ? styles.activePage : ""}
                        onClick={() => navigate("/")}
                    ><i className="fa-solid fa-star"></i> <span>Services</span></button>

                    {props.page === '404' && <button className={styles.activePage}>Burra Poinda Bro</button>}
                </div>
            </div>

            <div className={styles.sidebarOptions}>
                <button className={styles.backBtn}
                    onClick={() => navigate(props.back_location)}
                ><i className="fa-solid fa-chevron-left"></i> <span>Back</span></button>

                <button className={styles.utilOptions}><i className="fa-solid fa-list"></i></button>
                <button className={styles.settings}><i className="fa-solid fa-gear"></i> <span>Settings</span></button>
                <button className={styles.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span></button>
            </div>
        </div>
    );
}
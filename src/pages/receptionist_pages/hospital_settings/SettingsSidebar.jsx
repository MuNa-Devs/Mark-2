import styles from './settings_sidebar.module.css'
import General from './sections/general/General';
import OPTimings from './sections/op_timings/OPTimings';
import Holidays from './sections/holidays/Holidays';
import Services from "./sections/services/Services";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Manager(props) {

    switch (props.section){
        case "general": return <General 
            back_location={props.back_location}
        />;

        case "optimings": return <OPTimings 
            back_location={props.back_location}
        />;

        case "holidays": return <Holidays 
            back_location={props.back_location}
        />;

        case "services": return <Services 
            back_location={props.back_location}
        />;

        default: return <p>Hello world</p>
    }
}

export function SettingSidebar(props) {
    const [is_open, setIsOpen] = useState(false)

    return (
        <>
            <div className={`${is_open && styles.open} ${styles.blurDiv}`}></div>

            <div className={`${styles.sidebar} ${is_open ? styles.open : ""}`}>

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

                        <button className={`${is_open ? styles.open : ""} ${styles.collapseOpen}`}
                            onClick={() => setIsOpen(false)}
                        ><i className="fa-solid fa-compress"></i> Collapse</button>

                        <button className={props.page === "general" ? styles.activePage : ""}
                            onClick={() => props.setSectionBody("general")}
                        ><i className="fa-solid fa-hammer"></i> <span>General</span></button>

                        <button className={props.page === "optimings" ? styles.activePage : ""}
                            onClick={() => props.setSectionBody("optimings")}
                        ><i className="fa-solid fa-clock"></i> <span>OP Timings</span></button>

                        <button className={props.page === "holidays" ? styles.activePage : ""}
                            onClick={() => props.setSectionBody("holidays")}
                        ><i className="fa-solid fa-calendar-days"></i> <span>Holidays</span></button>

                        <button className={props.page === "services" ? styles.activePage : ""}
                            onClick={() => props.setSectionBody("services")}
                        ><i className="fa-solid fa-star"></i> <span>Services</span></button>

                        {props.page === '404' && <button className={styles.activePage}>Burra Poinda Bro</button>}
                    </div>
                </div>

                <div className={styles.sidebarOptions}>
                    <button className={styles.utilOptions}
                        onClick={() => setIsOpen(true)}
                    ><i className="fa-solid fa-list"></i></button>

                    <button className={styles.settings}><i className="fa-solid fa-gear"></i> <span>Settings</span></button>
                    <button className={styles.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span></button>
                </div>
            </div>
        </>
    );
}
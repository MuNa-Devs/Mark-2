import React from 'react';
import styles from './dash_board.module.css';
export default function DashBoard() {
    return (
        
        <div className={styles.recDashBoard}>
        <div className={styles.sideBar}>
            <div className={styles.sideBarHeader}>
                <div className={styles.hospitalLogoContainer}>
                    <div className={styles.hospitalLogo}></div>
                </div>
                <div className={styles.hospitalNameContainer}>
                    <div className={styles.hospitalName}>
                        <p>KIMS MULTISPECALIST HOSPITAL</p>
                        <p>Reception Desk</p>
                    </div>
                </div>
            </div>
            <div className={styles.sideBarBody}>
                <div className={styles.sideBarList}>
                    <p className={styles.sideBarListItem}>Dashboard</p>
                    <p className={styles.sideBarListItem}>Appointments</p>
                    <p className={styles.sideBarListItem}>Patients</p>
                    <p className={styles.sideBarListItem}>Doctors</p>
                    <p className={styles.sideBarListItem}>Billing</p>
                </div>
            </div>
            <div className={styles.sideBarFooter}>
                <div className={styles.footerContentContainer}>
                    <p className={styles.footerContent}>Settings</p>
                    <p className={styles.footerContent}>LogOut</p>
                </div>
            </div>
        </div>
        <div className={styles.header}>
            <div className={styles.inputContainer}>
                <input className={styles.input} placeholder='search' type='text'>
        </input>
            </div>
            <div className={styles.headerSide}>
                <div className={styles.bell}></div>
                <button className={styles.addNewAppointment}>AddNewAppointment</button>
                
            </div>
        </div>
        
            <div className={styles.recContent}>
    
    {/* TOP CARDS ROW */}
    <div className={styles.topCards}>
        <div className={styles.card}>Total Patients Today</div>
        <div className={styles.card}>Checked-In</div>
        <div className={styles.card}>Pending Check-Ins</div>
        <div className={styles.card}>Available Doctors</div>
    </div>

    {/* LEFT MAIN TABLE */}
    <div className={styles.appointmentsSection}>
        Today's Appointments Table
    </div>

    {/* RIGHT DOCTOR AVAILABILITY */}
    <div className={styles.doctorAvailability}>
        Doctor Availability
    </div>

   

</div>
</div>

    )
}

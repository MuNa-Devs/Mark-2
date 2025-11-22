import styles from '../pages/receptionist_pages/dash_board/dash_board.module.css'

export default function ReceptionistSidebar(){
    return(
         <div className={styles.sideBar}>
            <div className={styles.sideBarHeader}>
                <div className={styles.hospitalLogoContainer}>
                    <div className={styles.hospitalLogo}></div>
                </div>

                <div className={styles.hospitalNameContainer}>
                    <div className={styles.hospitalName}>
                        <p>KIMS MULTISPECALIST HOSPITAL</p>
                        <p className={styles.smallText}>Reception Desk</p>
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
    );
}
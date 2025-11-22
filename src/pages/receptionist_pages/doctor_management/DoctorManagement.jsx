import styles from './doctor_management.module.css';

export default function DoctorManagement(){

    return (
        <div className={styles.doctorManagementBody}>
            <div className={styles.sidebar}>
                <div className={styles.hospitalBranding}>
                    <div className={styles.logo}></div>

                    <div>
                        <h5>Lorem, ipsum.</h5>

                        <p>Reception desk</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
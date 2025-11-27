import Sidebar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar';
import styles from './dash_board.module.css';

export default function DashBoard() {

    return (
        <div className={styles.recDashBoard}>

            {/* Reusable sidebar component */}
            <Sidebar page="dashboard" location="/dashboard" />

            {/* Header */}
            <div className={styles.mainDiv}>
                <div className={styles.header}>
                    <div className={styles.inputContainer}>
                        <input
                            className={styles.input}
                            placeholder='search for patients, doctors, appointments'
                            type='text'
                        />
                    </div>

                    <div className={styles.headerSide}>
                        <div className={styles.bell}>
                            <i className={`fa-solid fa-bell ${styles.bellIcon}`}></i>
                        </div>
                        <button className={styles.addNewAppointment}>Add New Appointment</button>
                    </div>
                </div>

                {/* Content */}
                <div className={styles.recContent}>
                    <div className={styles.topCards}>
                        <div className={styles.card}>Total Patients Today</div>
                        <div className={styles.card}>Checked-In</div>
                        <div className={styles.card}>Pending Check-Ins</div>
                        <div className={styles.card}>Available Doctors</div>

                    </div>
                    <div className={styles.appointmentsSection}>
                        Today's Appointments Table
                    </div>

                    <div className={styles.doctorAvailability}>
                        Doctor Availability
                    </div>

                </div>
            </div>
        </div>
    );
}
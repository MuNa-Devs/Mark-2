import AppointmentTable from "./AppointmentTable";
import styles from './appointment_management.module.css'
import Sidebar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar';
import ScrollDownBox from '../../../reusable_components/scroll_downs/ScrollDownBox'

export default function Appointment_Managment(){

    return (
        <div className={styles.appointmentManagmentBody}>
            <Sidebar page="appointments" location="/appointmentmanagment" />
            <div className={styles.appointmentManagmentBodyContent}>
                <div className={styles.nameContainer}>
                    <div className={styles.name}><p className={styles.nameText}>Appointment Managment</p></div>
                    <div className={styles.buttonContainer}><button className={styles.addNewAppointment}>Add New Appointment</button></div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputBox}><input className={styles.input} type="text" placeholder="search for appointments"></input></div>
                    <div className={styles.scrollDowns}>
                        <div className={styles.scrollContainer}>
                            <ScrollDownBox
                                label="Status"
                                options={["Dr. Ravi", "Dr. Kiran", "Dr. Vishal"]}
                            />

                            <ScrollDownBox
                                label="Date"
                                options={["Cardiology", "Dermatology", "Orthopedics"]}
                            />

                            <ScrollDownBox
                                label="Doctor"
                                options={["10:00 AM", "12:00 PM", "3:00 PM"]}
                            /></div>
                    </div>
                </div>
                <div className={styles.data}>
                    <AppointmentTable />
                </div>
            </div>
        </div>

    )
}
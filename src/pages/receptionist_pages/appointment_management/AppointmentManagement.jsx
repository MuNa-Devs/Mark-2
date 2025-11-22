import React from 'react';
import styles from './appointment_management.module.css'
import Sidebar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar';

export default function Appointment_Managment(){

    return(
        <div className={styles.appointmentManagmentBody}>
            <Sidebar page="appointments" />
            <div className={styles.appointmentManagmentBodyContent}>
            <div className={styles.nameContainer}>
                <div className={styles.name}><p className={styles.nameText}>Appointment Managment</p></div>
                <div className={styles.buttonContainer}><button className={styles.addNewAppointment}>Add New Appointment</button></div>
            </div>
            <div className={styles.inputContainer}></div>
            <div className={styles.data}></div>
            </div>
        </div>

    )
}
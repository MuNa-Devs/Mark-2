import React from "react";
import styles from "./services.module.css";
import Toggle from "../../../../../reusable_components/toggle_button/Toggle"

export default function Services(){

    return (
        <div className={styles.servicesBody}>
        <div className={styles.headContainer}>
            
            <p>Hospital Settings</p></div>
        <div className={styles.bodyContainer}>
            <div className={styles.bodyHeaderContainer}>
                <div className={styles.headerName}><p>Special Services Offered</p></div>
                <div className={styles.buttonContainer}><button className={styles.button}>+ Add New Service</button></div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.bigBox}>
                <div className={styles.bigBox1}><p>Service Name</p><input className={styles.inputLeft} placeholder="e.g. Home Visit Consultation"></input></div>
                <div className={styles.bigBox2}><p>Description (Optional)</p><input className={styles.inputRight} placeholder="Briefly Describe The Services"></input><button>Save Service</button></div>
            </div>
            <div className={styles.smallBox1}>
                <div className={styles.smallBoxTextContainer}><p className={styles.smallBoxP1}>Weekend Vaccination Drive</p>
                <p className={styles.smallBoxP2}>Special Vaccination Camps Organised On Saturdays And Sundays</p></div>
            <div className={styles.smallBoxButtonsContainer}>
                <div className={styles.buttons}>
                    <button><Toggle className={styles.toggle}></Toggle></button>
                <i className={`fa-solid fa-pen-to-square ${styles.editButton}`}></i>
                
            <button><i className={`fa-solid fa-trash-can ${styles.bin}`}></i></button>
            </div>
            </div>
            </div>
            <div className={styles.smallBox2}>
                <div className={styles.smallBoxTextContainer}>
                    <p className={styles.smallBoxP1}>Emergency 24/7 Pharmacy</p>
                <p className={styles.smallBoxP2}>Our in-house pharmacy for 24 hours all day for your needs</p>
                </div>
            <div className={styles.smallBoxButtonsContainer}><div className={styles.buttons}>
                    <button><Toggle className={styles.toggle}></Toggle></button>
                <i className={`fa-solid fa-pen-to-square ${styles.editButton}`}></i>
                
            <button><i className={`fa-solid fa-trash-can ${styles.bin}`}></i></button>
            </div></div>
            </div>
            <div className={styles.smallBox3}>
                <div className={styles.smallBoxTextContainer}>
                    <p className={styles.smallBoxP1}>Pediatric Cardiology Clinic</p>
                <p className={styles.smallBoxP2}>Specialised clinic for children with heart conditions, avaliable on appoinments</p>
                </div>
            <div className={styles.smallBoxButtonsContainer}>
                <div className={styles.buttons}>
                    <button><Toggle className={styles.toggle}></Toggle></button>
                <i className={`fa-solid fa-pen-to-square ${styles.editButton}`}></i>
                
            <button><i className={`fa-solid fa-trash-can ${styles.bin}`}></i></button>
            </div>
            </div>
            </div>
            </div>


    </div>
    );
}
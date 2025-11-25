import React from "react";
import styles from "./services.module.css";

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
            </div>


    </div>
    );
}
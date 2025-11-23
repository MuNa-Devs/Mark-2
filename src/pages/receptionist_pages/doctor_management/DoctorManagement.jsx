import styles from './doctor_management.module.css';
import SideBar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar'
import AddNewDocSec from './AddNewDocSec';

import { useState } from 'react';

export default function DoctorManagement(props) {
    const [add_doc_open_status, setAddDocOpenStatus] = useState(false);

    return (
        <div className={styles.doctorManagementBody}>
            {/* <div className={styles.sidebarAtTop}>
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
                        <button className={styles.utilOptions}><i className="fa-solid fa-list"></i></button>
                        <button className={props.page === "dashboard" ? styles.activePage : ""}><i className="fa-solid fa-table-columns"></i> <span>Dashboard</span></button>
                        <button className={props.page === "appointments" ? styles.activePage : ""}><i className="fa-solid fa-calendar-days"></i> <span>Appointments</span></button>
                        <button className={props.page === "patients" ? styles.activePage : ""}><i className="fa-solid fa-users"></i> <span>Patients</span></button>
                        <button className={props.page === "doctors" ? styles.activePage : ""}><i className="fa-solid fa-user-doctor"></i> <span>Manage Doctors</span></button>
                        <button className={props.page === "billing" ? styles.activePage : ""}><i className="fa-solid fa-receipt"></i>  <span>Billing</span></button>
                    </div>
                </div>

                <div className={styles.sidebarOptions}>
                    <button className={styles.utilOptions}><i className="fa-solid fa-list"></i></button>
                    <button className={styles.settings}><i className="fa-solid fa-gear"></i> <span>Settings</span></button>
                    <button className={styles.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span></button>
                </div>
            </div> */}

            <SideBar page="doctors" />

            <div className={styles.mainDiv}>
                <div className={styles.header}>
                    <div className={styles.titlebar}>
                        <h3><i className={`fa-solid fa-address-book ${styles.mngmntIcon}`}></i> Doctor Management</h3>

                        <div className={styles.searchBarDiv}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search Doctors.." />
                        </div>
                    </div>

                    <div className={styles.options}>
                        <button className={styles.notificationIcon}><i className="fa-solid fa-bell"></i></button>

                        <button className={styles.aboutIcon}><i className="fa-regular fa-circle-question"></i></button>
                    </div>
                </div>

                <div className={styles.managementBody}>
                    <div className={styles.topMost}>
                        <div className={`${styles.searchBarDiv} ${styles.noSearchBarDiv}`}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search Doctors.." />
                        </div>

                        <button className={styles.addDocBtn}
                            onClick={() => { setAddDocOpenStatus(() => true) }}
                        ><i className="fa-solid fa-plus"></i> Add New Doctor</button>

                        <button className={styles.fallbackAddDocBtn}
                            onClick={() => { setAddDocOpenStatus(() => true) }}
                        ><i className="fa-solid fa-plus"></i> <i className="fa-solid fa-user-doctor"></i></button>
                    </div>

                    <div className={styles.existingDocs}>
                        <div className={styles.headers}>
                            <div className={styles.docName}><p>Name</p></div>

                            <div className={styles.actions}><p>Actions</p></div>
                        </div>

                        <div className={styles.docDiv}>
                            <div className={styles.docPfp}></div>

                            <p>Lorem ipsum dolor sit amet.</p>

                            <div className={styles.actionBtns}>
                                <button><i className="fa-solid fa-pencil"></i></button>

                                <button><i className="fa-solid fa-calendar-check"></i></button>

                                <button><i className="fa-solid fa-toggle-on"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {add_doc_open_status && <AddNewDocSec closeHook={() => setAddDocOpenStatus(false)} />}
        </div>
    );
}
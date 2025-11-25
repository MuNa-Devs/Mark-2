import styles from './doctor_management.module.css';
import SideBar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar'
import AddNewDocSec from './AddNewDocSec';

import { useState } from 'react';

export default function DoctorManagement(props) {
    const [add_doc_open_status, setAddDocOpenStatus] = useState(false);

    return (
        <div className={styles.doctorManagementBody}>
            <SideBar page="doctors" location="/doctormanagement" />

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
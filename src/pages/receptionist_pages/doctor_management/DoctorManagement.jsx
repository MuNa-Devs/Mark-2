import styles from './dark_doctor_management.module.css';
import SideBar from '../../../reusable_components/receptionist_sidebar/ReceptionistSideBar'

export default function DoctorManagement(){

    return (
        <div className={styles.doctorManagementBody}>
            <div className={styles.sidebarAtTop}>
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
                        <button><i className="fa-solid fa-table-columns"></i> <span>Dashboard</span></button>
                        <button><i className="fa-solid fa-calendar-days"></i> <span>Appointments</span></button>
                        <button><i className="fa-solid fa-users"></i> <span>Patients</span></button>
                        <button className={styles.activePage}><i className="fa-solid fa-user-doctor"></i> <span>Manage Doctors</span></button>
                        <button><i className="fa-solid fa-receipt"></i>  <span>Billing</span></button>
                    </div>
                </div>

                <div className={styles.sidebarOptions}>
                    <button className={styles.utilOptions}><i className="fa-solid fa-list"></i></button>
                    <button className={styles.settings}><i className="fa-solid fa-gear"></i> <span>Settings</span></button>
                    <button className={styles.logout}><i className="fa-solid fa-arrow-right-from-bracket"></i> <span>Log Out</span></button>
                </div>
            </div>

            <SideBar page="doctors" />

            <div className={styles.mainDiv}>
                <div className={styles.header}>
                    <div className={styles.titlebar}>
                        <h3><i className={`fa-solid fa-address-book ${styles.mngmntIcon}`}></i> Doctor Management</h3>

                        <div className={styles.searchBarDiv}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search Doctors.."/>
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
                            <input type="text" placeholder="Search Doctors.."/>
                        </div>

                        <button className={styles.addDocBtn}><i className="fa-solid fa-plus"></i> Add New Doctor</button>
                        <button className={styles.fallbackAddDocBtn}><i className="fa-solid fa-plus"></i> <i className="fa-solid fa-user-doctor"></i></button>
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

            {/* <div className={styles.addNewDocSec}>
                <div className={styles.titlebar}>
                    <h3>Add New Doctor</h3>

                    <button><i className="fa-solid fa-xmark"></i></button>
                </div>

                <div className={styles.sections}>
                    <button>Personal Information</button>

                    <button>Professional Details</button>

                    <button>Availability</button>
                </div>

                <div className={styles.profilePic}>
                    <div className={styles.image}></div>

                    <div className={styles.uploadBtn}>
                        <button>Upload Photo</button>

                        <p>PNG or JPEG, max 2MB.</p>
                    </div>
                </div>

                <div className={styles.details}>
                    <div className={styles.firstName}>
                        <h4>First Name</h4>

                        <input type="text" placeholder="First Name"/>
                    </div>

                    <div className={styles.lastName}>
                        <h4>Last Name</h4>

                        <input type="text" placeholder="Last Name"/>
                    </div>

                    <div className={styles.email}>
                        <h4>Email Address</h4>

                        <input type="email" placeholder="Email"/>
                    </div>

                    <div className={styles.phoneNumber}>
                        <h4>Phone Number</h4>

                        <input type="number" placeholder="Phone Number"/>
                    </div>
                </div>

                <div className={styles.bottomButtons}>
                    <button>Cancel</button>

                    <button>Save and Continue</button>
                </div>
            </div> */}
        </div>
    );
}
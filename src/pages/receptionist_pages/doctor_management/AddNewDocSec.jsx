import styles from './add_new_doc_sec.module.css'

export default function AddNewDocSec(props) {

    return (
        <div className={styles.addNewDocSecBody}>
            <div className={styles.addNewDocSec}>
                <div className={styles.titlebar}>
                    <h3>Add New Doctor</h3>

                    <button
                        onClick={props.closeHook}
                    ><i className="fa-solid fa-xmark"></i></button>
                </div>

                <div className={styles.sections}>
                    <div className={styles.sectionHeaders}>
                        <button className={`${styles.section} ${styles.activeSection}`}>Personal Information</button>

                        <button className={styles.section}>Professional Details</button>

                        <button className={styles.section}>Availability</button>
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
                            <h5>First Name</h5>

                            <input type="text" placeholder="First Name" />
                        </div>

                        <div className={styles.lastName}>
                            <h5>Last Name</h5>

                            <input type="text" placeholder="Last Name" />
                        </div>

                        <div className={styles.email}>
                            <h5>Email Address</h5>

                            <input type="email" placeholder="Email" />
                        </div>

                        <div className={styles.phoneNumber}>
                            <h5>Phone Number</h5>

                            <input type="number" placeholder="Phone Number" />
                        </div>
                    </div>

                    <div className={styles.bottomButtons}>
                        <button className={styles.cancel}>Cancel</button>

                        <button className={styles.save}>Save and Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
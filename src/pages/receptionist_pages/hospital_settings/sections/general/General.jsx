import styles from './general.module.css';

export default function General() {

    return (
        <div className={styles.generalScreen}>
            <h1>Hospital Settings</h1>

            <div className={styles.hospitalInfo}>
                <h3>Hospital Information</h3>

                <div className={styles.nameSec}>
                    <h5>Hospital Name</h5>
                    <input type="text" placeholder='Hospital name' />
                </div>

                <div className={styles.addressSec}>
                    <h5>Address</h5>
                    <input type="text" placeholder='Address' />
                </div>

                <div className={styles.descriptionSec}>
                    <label htmlFor="decription">Description</label>
                    <textarea
                        name="decription"
                        id="decription"
                        placeholder='Add description'
                        rows={6}
                    ></textarea>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <h3>Contact Details</h3>

                <div className={styles.phno}>
                    <h5>Phone Number</h5>
                    <input type="number" placeholder='Phone number' />
                </div>

                <div className={styles.email}>
                    <h5>Email Address</h5>
                    <input type="email" placeholder='Email address' />
                </div>
            </div>
        </div>
    );
}
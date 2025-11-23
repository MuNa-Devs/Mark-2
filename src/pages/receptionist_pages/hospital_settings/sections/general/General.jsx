import styles from './general.module.css';

export default function General(){

    return (
        <div className={styles.generalScreen}>
            <div className={styles.titleBar}>
                <h1>Hospital Settings</h1>
            </div>

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
                    ></textarea>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <h3>Contact Details</h3>
            </div>
        </div>
    );
}
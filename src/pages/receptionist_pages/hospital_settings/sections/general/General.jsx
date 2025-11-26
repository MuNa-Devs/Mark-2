import { useState } from 'react';
import styles from './general.module.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function General(props) {
    const navigate = useNavigate();
    let file = null;

    const [hosp_save_status, setHospSaveStatus] = useState(false);
    const [cont_save_status, setContSaveStatus] = useState(false);

    const [hosp_details, setHospDetails] = useState({
        logo: '',
        hosp_name: '',
        address: '',
        description: ''
    });

    const [contact_details, setContactdetails] = useState({
        phone: '',
        email: ''
    });

    const openFileSelector = () => {
        document.getElementById("logo").click();
    }

    const handleHospitalDetails = (e) => {
        if (e.target.name === "logo") {
            setHospDetails({
                ...hosp_details, [e.target.name]: e.target.files[0]
            });

            setLogo(e);
        }

        else setHospDetails({
            ...hosp_details, [e.target.name]: e.target.value
        });
    };

    const handleContactDetails = (e) => setContactdetails({
        ...contact_details, [e.target.name]: e.target.value
    });

    const setLogo = (e) => {
        file = e.target.files[0];

        if (!file) return;

        // Converting image into url:
        const fileUrl = URL.createObjectURL(file);
        document.getElementById("hosp_logo").src = fileUrl;
    }

    const saveChanges = (e) => {
        const start = Date.now();
        const id = e.target.id;
        const form_data = new FormData();

        if (id === "hosp_info"){
            setHospSaveStatus(true);

            for (let each_key in hosp_details) {
                let value = hosp_details[each_key];

                if (value) form_data.append(each_key, value);
            }
        }

        else if (id === "contact_info"){
            setContSaveStatus(true);

            for (let each_key in contact_details) {
                let value = contact_details[each_key];

                if (value) form_data.append(each_key, value);
            }
        }

        axios.post("http://192.168.137.1:9999/base/update_hosp_settings",
            form_data,
            {timeout: 5000}
        )
        .then(res => {
            const data = res.data;
            const end = Date.now();

            console.log(
                "Server response on '" + data.request + "':" +
                "\nMethod: " + data.method +
                "\nStatus: " + res.status +
                "\nTime taken: " + (end - start) + "ms"
            );

            setHospSaveStatus(false);
            setContSaveStatus(false);
        })
        .catch(err => {
            console.log("Error: " + err);

            setHospSaveStatus(false);
            setContSaveStatus(false);
        });
    }

    return (
        <div className={styles.generalScreen}>
            <div className={styles.header}>
                <h1>Hospital Settings</h1>

                <button className={styles.backBtn}
                    onClick={() => navigate(props.back_location)}
                ><i className="fa-solid fa-chevron-left"></i> <span>Back</span></button>
            </div>

            <div className={styles.hospitalInfo}>
                <h3>Hospital Information</h3>

                <div className={styles.logoContainer}>
                    <div className={styles.logoDiv}>
                        <img id="hosp_logo" src="#" alt="" />
                    </div>

                    <input
                        name='logo'
                        type="file"
                        id='logo'
                        style={{ display: 'none' }}
                        onChange={handleHospitalDetails}
                    />

                    <button className={styles.whenWide}
                        onClick={() => openFileSelector()}
                    ><i className="fa-regular fa-image"></i> Upload Image</button>

                    <button className={styles.whenNarrow}
                        onClick={() => openFileSelector()}
                    ><i className="fa-regular fa-image"></i> Upload</button>
                </div>

                <div className={styles.nameSec}>
                    <h5>Hospital Name</h5>

                    <input
                        name='hosp_name'
                        type="text"
                        placeholder='Hospital name'
                        onChange={handleHospitalDetails}
                    />
                </div>

                <div className={styles.addressSec}>
                    <h5>Address</h5>

                    <input
                        name='address'
                        type="text"
                        placeholder='Address'
                        onChange={handleHospitalDetails}
                    />
                </div>

                <div className={styles.descriptionSec}>
                    <label htmlFor="decription">Description</label>

                    <textarea
                        name="decription"
                        id="decription"
                        placeholder='Add description'
                        rows={6}
                        onChange={handleHospitalDetails}
                    ></textarea>
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.savBtn}>
                        <button id='hosp_info'
                            onClick={saveChanges}
                            disabled={hosp_save_status}
                        >{hosp_save_status ? "Saving.." : "Save Changes"}</button>
                    </div>
                </div>
            </div>

            <div className={styles.contactInfo}>
                <h3>Contact Details</h3>

                <div className={styles.phno}>
                    <h5>Phone Number</h5>

                    <input
                        name='phone'
                        type="number"
                        placeholder='Phone number'
                        onChange={handleContactDetails}
                    />
                </div>

                <div className={styles.email}>
                    <h5>Email Address</h5>

                    <input
                        name='email'
                        type="email"
                        placeholder='Email address'
                        onChange={handleContactDetails}
                    />
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.savBtn}>
                        <button id='contact_info'
                            onClick={saveChanges}
                            disabled={cont_save_status}
                        >{cont_save_status? "Saving.." : "Save Changes"}</button>
                    </div>
                </div>
            </div>

            <div className={styles.bufferDiv}></div>
        </div>
    );
}
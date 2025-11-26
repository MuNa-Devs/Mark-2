import { useState } from 'react';
import styles from './general.module.css';
import { AuthContext } from '../../../../../AuthContext';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import axios from 'axios';
import { serverurl } from '../../../../../../handlings/LocalConstants';

export default function General(props) {
    const navigate = useNavigate();

    // -------------------------------------
    // Syncing entered values and save them
    // -------------------------------------
    let file = null;

    // Store if button is triggered
    const [save_status, setSaveStatus] = useState(false);

    const [details_local, setDetails_local] = useState({
        logo: '',
        hosp_name: '',
        address: '',
        description: '',
        phone: '',
        email: ''
    });

    // Open file selector window
    const openFileSelector = () => document.getElementById("logo").click();

    // Sync hospital details sec
    const handleDetails = (e) => {
        if (e.target.name === "logo") {
            setDetails_local({
                ...details_local, [e.target.name]: e.target.files[0]
            });

            setLogo(e);
        }

        else setDetails_local({
            ...details_local, [e.target.name]: e.target.value
        });
    };

    // Update logo in the local logo div
    const setLogo = (e) => {
        file = e.target.files[0];

        if (file) {
            // Converting image into url:
            const fileUrl = URL.createObjectURL(file);
            document.getElementById("hosp_logo").src = fileUrl;
        }
    }

    // ----------------------------------
    // Send the updated values to server
    // ----------------------------------
    const { setHospDetails } = useContext(AuthContext);

    const saveChanges = (e) => {
        const start = Date.now();
        const id = e.target.id;
        const form_data = new FormData();

        setSaveStatus(true);

        for (let each_key in details_local) {
            let value = details_local[each_key];

            if (value) form_data.append(each_key, value);
        }

        axios.post(serverurl + "/update_hosp_settings",
            form_data,
            { timeout: 5000 }
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

                // Update new values all over
                setHospDetails({
                    img_name: data.logoname,
                    img_url: data.logourl,
                    hosp_name: data.hosp_name,
                    address: data.address,
                    description: data.description,
                    phone_no: data.phone_no,
                    email: data.email
                })

                setSaveStatus(false);
            })
            .catch(err => {
                console.log("Error: " + err);

                setSaveStatus(false);
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
                        <img
                            id="hosp_logo"
                            src="https://www.shutterstock.com/image-vector/blank-image-photo-placeholder-icon-600nw-2501054919.jpg"
                            alt=""
                        />
                    </div>

                    <input
                        name='logo'
                        type="file"
                        id='logo'
                        style={{ display: 'none' }}
                        onChange={handleDetails}
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
                        onChange={handleDetails}
                    />
                </div>

                <div className={styles.addressSec}>
                    <h5>Address</h5>

                    <input
                        name='address'
                        type="text"
                        placeholder='Address'
                        onChange={handleDetails}
                    />
                </div>

                <div className={styles.descriptionSec}>
                    <label htmlFor="decription">Description</label>

                    <textarea
                        name="decription"
                        id="decription"
                        placeholder='Add description'
                        rows={6}
                        onChange={handleDetails}
                    ></textarea>
                </div>

                <h3>Contact Details</h3>

                <div className={styles.phno}>
                    <h5>Phone Number</h5>

                    <input
                        name='phone'
                        type="number"
                        placeholder='Phone number'
                        onChange={handleDetails}
                    />
                </div>

                <div className={styles.email}>
                    <h5>Email Address</h5>

                    <input
                        name='email'
                        type="email"
                        placeholder='Email address'
                        onChange={handleDetails}
                    />
                </div>

                <div className={styles.wrapper}>
                    <div className={styles.savBtn}>
                        <button id='contact_info'
                            onClick={saveChanges}
                            disabled={save_status}
                        >{save_status ? "Saving.." : "Save Changes"}</button>
                    </div>
                </div>
            </div>

            <div className={styles.bufferDiv}></div>
        </div>
    );
}
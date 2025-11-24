import styles from './hospital_settings.module.css';
import { Manager, SettingSidebar } from './SettingsSidebar';
import { AuthContext } from '../../../AuthContext';

import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';

export default function HospitalSettings(){
    const {is_logged_in, setLogin, setLogOut} = useContext(AuthContext);
    const navigate = useNavigate();

    if (! is_logged_in) navigate("/login");

    const location = useLocation();
    const native = location.state?.from || "/";

    const [section_body, setSectionBody] = useState("general");

    return (
        <div className={styles.hospitalSettingsPage}>
            <SettingSidebar
                page={section_body}
                back_location={native} 
                setSectionBody={setSectionBody}
            />

            <div className={styles.sectionBody}>
                <Manager
                    section={section_body} 
                    back_location={native}
                />
            </div>
        </div>
    );
}
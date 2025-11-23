import styles from './hospital_settings.module.css';
import { Manager, SettingSidebar } from './SettingsSidebar';

import { useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function HospitalSettings(){
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
                <Manager section={section_body} />
            </div>
        </div>
    );
}
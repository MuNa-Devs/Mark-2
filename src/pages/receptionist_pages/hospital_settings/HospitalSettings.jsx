import styles from './hospital_settings.module.css';
import SettingSidebar from './SettingsSidebar';

import { useLocation } from 'react-router-dom';

export default function HospitalSettings(){
    const location = useLocation();
    const native = location.state?.from || "/";

    return (
        <div className={styles.hospitalSettingsPage}>
            <SettingSidebar page="holidays" back_location={native} />

            <div className={styles.sectionBody}></div>
        </div>
    );
}
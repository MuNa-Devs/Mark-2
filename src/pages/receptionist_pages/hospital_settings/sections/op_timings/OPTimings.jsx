import styles from './op_timings.module.css';
import OpForWeek from './OpForWeek';
import HolidaysCard from './HolidaysCard';
import ServicesCard from './ServicesCard';

import { useNavigate } from 'react-router-dom';

export default function OPTimings(props){
    const navigate = useNavigate();

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    return (
        <div className={styles.generalScreen}>
            <div className={styles.header}>
                <h1>Hospital Settings</h1>

                <button className={styles.backBtn}
                    onClick={() => navigate(props.back_location)}
                ><i className="fa-solid fa-chevron-left"></i> <span>Back</span></button>
            </div>

            <div className={styles.opdepTimings}>
                <h3>Outpatient Department Timings</h3>

                {days.map((day, index) => <OpForWeek key={index} id={index} day={day} />)}

                <div className={styles.bottomBtns}>
                    <button>Save Changes</button>
                </div>
            </div>

            <div className={styles.opHolidayCalendar}>
                <h3>Outpatient Department Holiday Calendar</h3>

                <div className={styles.opHolidayHeader}>
                    <h5>Configured Holidays</h5>

                    <button className={styles.whenWide}><i className="fa-solid fa-plus"></i> Add New Holiday</button>
                    <button className={styles.whenNarrow}><i className="fa-solid fa-plus"></i> Holiday</button>
                </div>

                <HolidaysCard holiday="Lorem ipsum dolor" date="January 1, 2001" />
            </div>

            <div className={styles.specialServices}>
                <div className={styles.spServicesHeader}>
                    <h3>Special Services Offered</h3>

                    <button className={styles.whenWide}><i className="fa-solid fa-plus"></i> Add Service</button>
                    <button className={styles.whenNarrow}><i className="fa-solid fa-plus"></i> Service</button>
                </div>

                <ServicesCard service="Lorem ipsum dolor" />
            </div>

            <div className={styles.bufferDiv}></div>
        </div>
    );
}
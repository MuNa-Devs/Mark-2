import styles from './op_timings.module.css';
import OpForWeek from './OpForWeek';

export default function OPTimings() {
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
            <h1>Hospital Settings</h1>

            <div className={styles.opdepTimings}>
                <h3>Outpatient Department Timings</h3>

                {days.map((day, index) => <OpForWeek key={index} id={index} day={day} />)}

                <div className={styles.bottomBtns}>
                    <button>Save Changes</button>
                </div>
            </div>

            <div className={styles.opHolidayCalendar}>
                <h3>Outpatient Department Holiday Calendar</h3>
            </div>

            <div className={styles.specialServices}>
                <h3>Special Services Offered</h3>
            </div>
        </div>
    );
}
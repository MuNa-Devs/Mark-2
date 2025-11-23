import styles from './op_for_week.module.css';

export default function OpForWeek(props) {

    return (
        <div className={styles.week} id={props.day}>
            <div className={styles.head}>
                <input type="checkbox" id={props.id} name={props.id} />

                <label htmlFor={props.id}>{props.day}</label>
            </div>

            <div className={styles.tail}>
                <input type="time" />

                <h5>To</h5>

                <input type="time" />
            </div>
        </div>
    );
}
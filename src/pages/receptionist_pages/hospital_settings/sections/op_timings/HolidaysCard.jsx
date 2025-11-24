import styles from './holidays_card.module.css';

export default function HolidaysCard(props) {

    return (
        <div className={styles.holidaysCard}>
            <div className={styles.text}>
                <p className={styles.holidayName}>{props.holiday}</p>

                <p className={styles.date}>{props.date}</p>
            </div>

            <div className={styles.btns}>
                <button><i className="fa-solid fa-pen-to-square"></i></button>

                <button><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    );
}
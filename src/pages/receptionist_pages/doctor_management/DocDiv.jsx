import styles from './doctor_management.module.css';
import Toggle from '../../../reusable_components/toggle_button/Toggle';

export default function DocDiv(props) {

    return (
        <div className={styles.docDiv}>
            <div className={styles.docPfp}>
                <img src={props.profilepicURL} alt="" />
            </div>

            <p>{props.doctor}</p>

            <div className={styles.actionBtns}>
                <button><i className="fa-solid fa-pencil"></i></button>

                <button><i className="fa-solid fa-calendar-check"></i></button>

                <Toggle defaultValue={true} />
            </div>
        </div>
    );
}
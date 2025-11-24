import styles from './holidays_card.module.css';
import Toggle from '../../../../../reusable_components/toggle_button/Toggle';

export default function ServicesCard(props) {

    return (
        <div className={styles.servicesCard}>
            <div className={styles.text}>
                <p className={styles.serviceName}>{props.service}</p>
            </div>

            <div className={styles.btns}>
                <Toggle defaultValue={true} />

                <button><i className="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
    );
}